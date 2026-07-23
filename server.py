from __future__ import annotations

import os
import re
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)")


class RangeRequestHandler(SimpleHTTPRequestHandler):
    """Serve static files with byte-range support for media seeking."""

    def __init__(self, *args, directory: str | None = None, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)
        self._range: tuple[int, int] | None = None

    def send_head(self):
        self._range = None
        path = self.translate_path(self.path)

        if os.path.isdir(path):
            return super().send_head()

        try:
            file = open(path, "rb")
        except OSError:
            self.send_error(HTTPStatus.NOT_FOUND, "File not found")
            return None

        file_stat = os.fstat(file.fileno())
        file_size = file_stat.st_size
        content_type = self.guess_type(path)

        range_header = self.headers.get("Range")
        if range_header:
            requested_range = self._parse_range_header(range_header, file_size)
            if requested_range is None:
                self.send_error(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                file.close()
                return None

            start, end = requested_range
            self._range = (start, end)
            self.send_response(HTTPStatus.PARTIAL_CONTENT)
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
            self.send_header("Content-Length", str(end - start + 1))
        else:
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Length", str(file_size))

        self.send_header("Content-type", content_type)
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Last-Modified", self.date_time_string(file_stat.st_mtime))
        self.end_headers()

        if self._range:
            file.seek(self._range[0])

        return file

    def copyfile(self, source, outputfile):
        if not self._range:
            super().copyfile(source, outputfile)
            return

        start, end = self._range
        remaining = end - start + 1
        while remaining > 0:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    @staticmethod
    def _parse_range_header(header_value: str, file_size: int) -> tuple[int, int] | None:
        match = RANGE_RE.fullmatch(header_value.strip())
        if not match:
            return None

        start_str, end_str = match.groups()
        if start_str == "" and end_str == "":
            return None

        if start_str == "":
            suffix_length = int(end_str)
            if suffix_length <= 0:
                return None
            start = max(file_size - suffix_length, 0)
            end = file_size - 1
            return start, end

        start = int(start_str)
        end = int(end_str) if end_str else file_size - 1

        if start >= file_size or start < 0 or end < start:
            return None

        end = min(end, file_size - 1)
        return start, end


def run_server(port: int = 8000) -> None:
    project_root = Path(__file__).resolve().parent
    handler = partial(RangeRequestHandler, directory=str(project_root))
    with ThreadingHTTPServer(("127.0.0.1", port), handler) as httpd:
        print(f"Serving PN Medical on http://127.0.0.1:{port}")
        httpd.serve_forever()


if __name__ == "__main__":
    run_server()
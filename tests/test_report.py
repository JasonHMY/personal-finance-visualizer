import importlib.util
import json
from pathlib import Path
import socket
import time
import tempfile
import threading
import unittest
import urllib.request
import urllib.error

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("report", ROOT / "skills/personal-finance-visualizer/scripts/report.py")
report = importlib.util.module_from_spec(spec)
spec.loader.exec_module(report)


class ReportTests(unittest.TestCase):
    def test_csv_requires_explicit_coverage_and_currency(self):
        raw=b"id,date,amount,kind\nx,2024-01-01,-1.00,expense\n"
        with self.assertRaises(ValueError): report.load_input(raw)
        d=report.load_input(raw,currency="USD",start="2024-01-01",end="2024-01-31")
        self.assertEqual(d["transactions"][0]["amount"],"-1.00")

    def test_html_is_safe_at_script_boundary(self):
        d=json.loads((ROOT / "demo/sample.json").read_text())
        d["transactions"][0]["description"]="</script><script>alert('private')</script>__APP__"
        html=report.render(d).decode()
        self.assertNotIn("<script>alert('private')",html)
        self.assertIn("\\u003c/script\\u003e",html)
        self.assertIn("connect-src 'none'",html)
        self.assertIn("__APP__",html)  # user text must not become a template expansion

    def test_export_is_explicit_private_and_never_overwrites(self):
        with tempfile.TemporaryDirectory() as tmp:
            p=Path(tmp)/"result.html"
            report.export_report(str(p),b"synthetic")
            self.assertEqual(p.stat().st_mode & 0o777,0o600)
            with self.assertRaises(FileExistsError): report.export_report(str(p),b"other")
            self.assertEqual(p.read_bytes(),b"synthetic")
            (Path(tmp)/".git").mkdir()
            with self.assertRaises(ValueError): report.export_report(str(Path(tmp)/"new.html"),b"x")

    def test_memory_server_has_no_public_route_logs_or_cache(self):
        server,url=report.create_server(b"synthetic")
        worker=threading.Thread(target=server.serve_forever,daemon=True)
        worker.start()
        try:
            with urllib.request.urlopen(url) as r:
                self.assertEqual(r.read(),b"synthetic")
                self.assertEqual(r.headers["Cache-Control"],"no-store")
                self.assertIsNone(r.headers.get("Access-Control-Allow-Origin"))
            with self.assertRaises(urllib.error.HTTPError): urllib.request.urlopen(url.rsplit('/',1)[0]+"/")
            req=urllib.request.Request(url,headers={"Host":"external.example"})
            with self.assertRaises(urllib.error.HTTPError): urllib.request.urlopen(req)
        finally:
            server.shutdown();server.server_close();worker.join()

    def test_idle_connection_does_not_block_report_and_times_out(self):
        server, url = report.create_server(b"synthetic")
        worker = threading.Thread(target=server.serve_forever, daemon=True)
        worker.start()
        idle = socket.create_connection(server.server_address, timeout=2)
        try:
            # A partial request models a browser connection waiting for more bytes.
            started = time.monotonic()
            idle.sendall(b"GET ")
            with urllib.request.urlopen(url, timeout=2) as response:
                self.assertEqual(response.read(), b"synthetic")
            idle.settimeout(13)
            self.assertEqual(idle.recv(1), b"")
            self.assertGreaterEqual(time.monotonic() - started, 9)
            self.assertLess(time.monotonic() - started, 13)
        finally:
            idle.close()
            server.shutdown()
            server.server_close()
            worker.join()

    def test_demo_is_reproducible_without_reading_files(self):
        path=ROOT/"skills/personal-finance-visualizer/scripts/demo_data.py"
        spec2=importlib.util.spec_from_file_location("demo",path)
        module=importlib.util.module_from_spec(spec2);spec2.loader.exec_module(module)
        self.assertEqual(module.make_demo(),json.loads((ROOT/"demo/sample.json").read_text()))

if __name__=="__main__": unittest.main()

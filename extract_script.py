import json
import re
from html.parser import HTMLParser

class MyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for attr in attrs:
                if attr[0] == 'href':
                    self.links.append(attr[1])

    def handle_data(self, data):
        clean = data.strip()
        if clean:
            self.text.append(clean)

parser = MyParser()
with open(r'C:\Users\hafiz\.gemini\antigravity-ide\brain\d0220db9-1ea2-4719-b4c9-ab8a5ac1b74a\.system_generated\steps\54\content.md', 'r', encoding='utf-8') as f:
    parser.feed(f.read())

with open('extracted_data.json', 'w', encoding='utf-8') as out:
    json.dump({'text': list(set(parser.text)), 'links': list(set(parser.links))}, out, indent=2)

print('Data extracted to extracted_data.json')

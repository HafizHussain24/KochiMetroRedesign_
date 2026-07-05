import urllib.request
import re

url = 'https://api.iconify.design/game-icons:holy-oak.svg'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
content = urllib.request.urlopen(req).read().decode('utf-8')
content = content.replace('currentColor', 'white')
content = re.sub(r'(<svg[^>]*>)', r'\1<style>svg { opacity: 0.15 !important; fill: white !important; }</style>', content, count=1)

with open('src/assets/other-tree-bg.svg', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved other-tree-bg.svg')

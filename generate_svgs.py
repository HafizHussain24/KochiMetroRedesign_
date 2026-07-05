import urllib.request
import re

def download_and_style(icon_name, file_name):
    url = f'https://api.iconify.design/{icon_name}.svg'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    content = urllib.request.urlopen(req).read().decode('utf-8')
    content = content.replace('currentColor', 'white')
    content = re.sub(r'(<svg[^>]*>)', r'\1<style>svg { opacity: 0.15 !important; fill: white !important; }</style>', content, count=1)
    with open(f'src/assets/{file_name}', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Saved {file_name}')

download_and_style('fluent-emoji-high-contrast:cityscape', 'city-bg.svg')
download_and_style('game-icons:vine-leaf', 'leaf-bg.svg')
download_and_style('game-icons:elephant-head', 'elephant-bg.svg')

wave_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <style>svg { opacity: 0.15 !important; fill: white !important; }</style>
  <path fill="white" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,176C672,181,768,171,864,154.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  <path fill="white" fill-opacity="0.5" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>'''

with open('src/assets/wave-bg.svg', 'w', encoding='utf-8') as f:
    f.write(wave_svg)
print('Saved wave-bg.svg')

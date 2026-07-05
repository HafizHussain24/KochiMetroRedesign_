svg_width = 1200
svg_height = 250

grid_lines = []
grid_size = 40
for x in range(0, svg_width, grid_size):
    opacity = 0.6 if x % (grid_size * 4) == 0 else 0.3
    stroke_width = 3 if x % (grid_size * 4) == 0 else 2
    grid_lines.append(f'<line x1="{x}" y1="0" x2="{x}" y2="{svg_height}" stroke="white" stroke-width="{stroke_width}" opacity="{opacity}"/>')
for y in range(0, svg_height, grid_size):
    opacity = 0.6 if y % (grid_size * 4) == 0 else 0.3
    stroke_width = 3 if y % (grid_size * 4) == 0 else 2
    grid_lines.append(f'<line x1="0" y1="{y}" x2="{svg_width}" y2="{y}" stroke="white" stroke-width="{stroke_width}" opacity="{opacity}"/>')

details = []
details.append('<path d="M 120 40 L 120 60 M 110 50 L 130 50" stroke="white" stroke-width="2"/>')
details.append('<circle cx="120" cy="50" r="5" fill="none" stroke="white" stroke-width="2"/>')

details.append('<path d="M 800 160 L 800 180 M 790 170 L 810 170" stroke="white" stroke-width="2"/>')
details.append('<circle cx="800" cy="170" r="15" fill="none" stroke="white" stroke-width="2"/>')

details.append('<rect x="400" y="80" width="160" height="80" fill="none" stroke="white" stroke-width="3" opacity="0.5"/>')
details.append('<line x1="400" y1="80" x2="560" y2="160" stroke="white" stroke-width="2" stroke-dasharray="6" opacity="0.4"/>')
details.append('<line x1="400" y1="160" x2="560" y2="80" stroke="white" stroke-width="2" stroke-dasharray="6" opacity="0.4"/>')

blueprint_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" preserveAspectRatio="none">
<style>svg {{ opacity: 0.20 !important; }}</style>
<g>
{''.join(grid_lines)}
{''.join(details)}
</g>
</svg>'''

with open('src/assets/blueprint-bg.svg', 'w', encoding='utf-8') as f:
    f.write(blueprint_svg)
print("Updated thicker blueprint-bg.svg")

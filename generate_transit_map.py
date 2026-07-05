import random

svg_width = 1200
svg_height = 250

lines = []
stations = []

# Generate transit lines matching the 45-degree angle map style
# Line 1 (Main horizontal)
lines.append('<path d="M -50 150 L 300 150 L 350 200 L 800 200 L 850 150 L 1250 150" fill="none" stroke-width="4" stroke-linejoin="round"/>')
# Line 2
lines.append('<path d="M 100 -50 L 100 100 L 150 150 L 150 300" fill="none" stroke-width="4" stroke-linejoin="round"/>')
# Line 3
lines.append('<path d="M 500 -50 L 500 100 L 400 200 L 400 300" fill="none" stroke-width="4" stroke-linejoin="round"/>')
# Line 4
lines.append('<path d="M 700 300 L 700 250 L 800 150 L 1000 150 L 1050 100 L 1250 100" fill="none" stroke-width="4" stroke-linejoin="round"/>')
# Line 5
lines.append('<path d="M -50 50 L 250 50 L 300 100 L 500 100 L 550 50 L 900 50 L 950 100 L 1250 100" fill="none" stroke-width="4" stroke-linejoin="round"/>')

# Add stations (circles)
station_coords = [
    (100, 150), (300, 150), (350, 200), (500, 200), (800, 200), (850, 150), (1100, 150),
    (100, 100), (150, 150), (150, 250),
    (500, 100), (400, 200), (400, 250),
    (700, 250), (800, 150), (1000, 150), (1050, 100),
    (50, 50), (250, 50), (300, 100), (550, 50), (900, 50), (950, 100)
]

for (x, y) in station_coords:
    # Interchange style (white circle with transparent center, or solid white)
    if random.random() > 0.6:
        # Interchange (hollow circle)
        stations.append(f'<circle cx="{x}" cy="{y}" r="6" fill="#07afb1" stroke="white" stroke-width="2"/>')
    else:
        # Normal station
        stations.append(f'<circle cx="{x}" cy="{y}" r="4" fill="white" stroke="white"/>')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" preserveAspectRatio="none">
<style>
    svg {{ opacity: 0.15 !important; stroke: white !important; }}
    path {{ stroke: white !important; }}
</style>
<g>
{''.join(lines)}
{''.join(stations)}
</g>
</svg>'''

with open('src/assets/transit-map-bg.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print("Saved transit-map-bg.svg")

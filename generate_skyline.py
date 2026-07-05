import random

svg_width = 1200
svg_height = 250

bg_rects = []
fg_rects = []
details = []

random.seed(42)

# Background tall buildings - sparse, allowing whitespace and clarity
for i in range(12):
    w = random.randint(50, 100)
    x = (i * 100) + random.randint(-20, 20)
    h = random.randint(100, 220) # Much taller for contrast
    y = svg_height - h
    bg_rects.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill-opacity="0.4"/>')

# Foreground buildings - organized, less jumbled
for i in range(25):
    w = random.randint(30, 80)
    x = (i * 48) + random.randint(-10, 10)
    h = random.randint(50, 140)
    y = svg_height - h
    fg_rects.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill-opacity="0.8"/>')
    
    rand = random.random()
    if rand > 0.8: # Antenna
        details.append(f'<rect x="{x + w/2 - 2}" y="{y - random.randint(20, 50)}" width="4" height="50" fill-opacity="0.8"/>')
    elif rand > 0.6: # Sloped roof
        rh = random.randint(20, 40)
        details.append(f'<polygon points="{x},{y} {x+w},{y} {x+w/2},{y-rh}" fill-opacity="0.8"/>')

# Add 5 distinct palm trees so they are clearly visible
def add_palm_tree(tx, ty):
    details.append(f'<path d="M {tx} {ty} Q {tx-5} {ty-30} {tx-2} {ty-60} Q {tx+2} {ty-30} {tx+5} {ty}" fill-opacity="0.9"/>')
    details.append(f'<path d="M {tx-2} {ty-60} Q {tx-20} {ty-65} {tx-25} {ty-40} Q {tx-15} {ty-50} {tx-2} {ty-60}" fill-opacity="0.9"/>')
    details.append(f'<path d="M {tx-2} {ty-60} Q {tx+20} {ty-65} {tx+25} {ty-40} Q {tx+15} {ty-50} {tx-2} {ty-60}" fill-opacity="0.9"/>')
    details.append(f'<path d="M {tx-2} {ty-60} Q {tx} {ty-85} {tx-15} {ty-90} Q {tx-5} {ty-70} {tx-2} {ty-60}" fill-opacity="0.9"/>')
    details.append(f'<path d="M {tx-2} {ty-60} Q {tx} {ty-85} {tx+15} {ty-90} Q {tx+5} {ty-70} {tx-2} {ty-60}" fill-opacity="0.9"/>')

for tx in [150, 350, 650, 950, 1100]:
    add_palm_tree(tx + random.randint(-20, 20), svg_height - random.randint(10, 30))

wave = f'<path d="M 0 {svg_height-10} Q 100 {svg_height-20} 200 {svg_height-10} T 400 {svg_height-10} T 600 {svg_height-10} T 800 {svg_height-10} T 1000 {svg_height-10} T 1200 {svg_height-10} L 1200 {svg_height} L 0 {svg_height} Z" fill-opacity="1"/>'

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" preserveAspectRatio="none">
<style>svg {{ opacity: 0.15 !important; fill: white !important; }}</style>
<g>
{''.join(bg_rects)}
{''.join(fg_rects)}
{''.join(details)}
{wave}
</g>
</svg>'''

with open('src/assets/kochi-skyline-bg.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print("Saved clearer kochi-skyline-bg.svg")

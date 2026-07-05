import random
import math

# 1. Generate Network Graph (Careers)
svg_width = 1200
svg_height = 250
nodes = []
edges = []

random.seed(10)
# Create 50 random nodes
node_coords = []
for _ in range(50):
    x = random.randint(0, svg_width)
    y = random.randint(0, svg_height)
    r = random.choice([3, 4, 6, 8])
    node_coords.append((x, y, r))

# Connect nodes that are close to each other
for i in range(len(node_coords)):
    x1, y1, r1 = node_coords[i]
    connections = 0
    for j in range(i+1, len(node_coords)):
        x2, y2, r2 = node_coords[j]
        dist = math.hypot(x2 - x1, y2 - y1)
        if dist < 180 and connections < 3: # Max 3 connections per node to avoid clutter
            edges.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="white" stroke-width="1.5" opacity="{random.uniform(0.3, 0.8)}"/>')
            connections += 1
    
    # Draw node
    if random.random() > 0.5:
        # Hollow node
        nodes.append(f'<circle cx="{x1}" cy="{y1}" r="{r}" fill="#07afb1" stroke="white" stroke-width="2"/>')
    else:
        # Solid node
        nodes.append(f'<circle cx="{x1}" cy="{y1}" r="{r}" fill="white"/>')

network_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" preserveAspectRatio="none">
<style>svg {{ opacity: 0.20 !important; }}</style>
<g>
{''.join(edges)}
{''.join(nodes)}
</g>
</svg>'''

with open('src/assets/network-bg.svg', 'w', encoding='utf-8') as f:
    f.write(network_svg)


# 2. Generate Architectural Blueprint Grid (Transparency)
# Isometric/Blueprint grid
grid_lines = []
grid_size = 40
# Vertical lines
for x in range(0, svg_width, grid_size):
    opacity = 0.5 if x % (grid_size * 4) == 0 else 0.2
    grid_lines.append(f'<line x1="{x}" y1="0" x2="{x}" y2="{svg_height}" stroke="white" stroke-width="1" opacity="{opacity}"/>')
# Horizontal lines
for y in range(0, svg_height, grid_size):
    opacity = 0.5 if y % (grid_size * 4) == 0 else 0.2
    grid_lines.append(f'<line x1="0" y1="{y}" x2="{svg_width}" y2="{y}" stroke="white" stroke-width="1" opacity="{opacity}"/>')

# Add some blueprint drafting details (crosshairs, measurements)
details = []
details.append('<path d="M 120 40 L 120 60 M 110 50 L 130 50" stroke="white" stroke-width="1"/>')
details.append('<circle cx="120" cy="50" r="5" fill="none" stroke="white" stroke-width="1"/>')

details.append('<path d="M 800 160 L 800 180 M 790 170 L 810 170" stroke="white" stroke-width="1"/>')
details.append('<circle cx="800" cy="170" r="15" fill="none" stroke="white" stroke-width="1"/>')

details.append('<rect x="400" y="80" width="160" height="80" fill="none" stroke="white" stroke-width="2" opacity="0.4"/>')
details.append('<line x1="400" y1="80" x2="560" y2="160" stroke="white" stroke-width="1" stroke-dasharray="4" opacity="0.3"/>')
details.append('<line x1="400" y1="160" x2="560" y2="80" stroke="white" stroke-width="1" stroke-dasharray="4" opacity="0.3"/>')

blueprint_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" preserveAspectRatio="none">
<style>svg {{ opacity: 0.15 !important; }}</style>
<g>
{''.join(grid_lines)}
{''.join(details)}
</g>
</svg>'''

with open('src/assets/blueprint-bg.svg', 'w', encoding='utf-8') as f:
    f.write(blueprint_svg)

print("Generated network-bg.svg and blueprint-bg.svg")

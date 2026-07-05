import math

svg_width = 1920
svg_height = 400
circles = []

# Hand-placed coordinates: 6 drops brought fully INTO the frame,
# zig-zagging across the center so you can clearly see the impact points.
# (x, y, max_radius)
drop_configs = [
    (200, 150, 220),    # Left, clearly visible
    (550, 300, 250),    # Mid-left, lower down
    (800, 80, 200),     # Center-left, upper area
    (1150, 250, 260),   # Center-right, lower area
    (1450, 100, 220),   # Mid-right, upper area
    (1700, 320, 240)    # Right side, lower area
]

for (ox, oy, max_radius) in drop_configs:
    spacing = 30 # Tighter spacing since they are fully visible
    num_ripples = int(max_radius / spacing)
    
    for i in range(1, num_ripples + 1):
        radius = i * spacing
        
        # Opacity fades outwards
        opacity = max(0.02, 0.7 - (i * (0.7 / num_ripples)))
        
        # Thicker in center, thinner at edge
        progress = (i - 1) / (num_ripples - 1) if num_ripples > 1 else 0
        stroke_width = 4.5 - (progress * 3.5)
        
        circles.append(f'<circle cx="{ox}" cy="{oy}" r="{radius}" fill="none" stroke="white" stroke-width="{stroke_width:.2f}" opacity="{opacity}"/>')

ripples_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" preserveAspectRatio="xMidYMid slice">
<style>svg {{ opacity: 0.20 !important; }}</style>
<g>
{''.join(circles)}
</g>
</svg>'''

with open('src/assets/ripples-bg.svg', 'w', encoding='utf-8') as f:
    f.write(ripples_svg)
print("Generated central fully-visible 6-drop ripples-bg.svg")

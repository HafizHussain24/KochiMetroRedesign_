import re

tree_svg = open('src/assets/tree-bg.svg', encoding='utf-8').read()
boat_svg = open('src/assets/vallam-bg.svg', encoding='utf-8').read()

tree_path = re.search(r'<path[^>]*d="([^"]+)"', tree_svg)
boat_path = re.search(r'<path[^>]*d="([^"]+)"', boat_svg)

if tree_path and boat_path:
    tree_d = tree_path.group(1)
    boat_d = boat_path.group(1)
    
    # We will create a 300x300 pattern tile
    pattern = f'''<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
      <g fill="white" opacity="0.12">
        <!-- Seamless Waves -->
        <path d="M 0 250 Q 75 220 150 250 T 300 250 L 300 300 L 0 300 Z" />
        <path d="M 0 270 Q 75 290 150 270 T 300 270 L 300 300 L 0 300 Z" opacity="0.5" />
        
        <!-- Tree -->
        <g transform="translate(20, 80) scale(0.3)">
            <path d="{tree_d}" />
        </g>
        
        <!-- Boat -->
        <g transform="translate(150, 180) scale(0.18)">
            <path d="{boat_d}" />
        </g>
        
        <!-- Metro / Modern Element -->
        <g transform="translate(180, 50)">
            <rect x="0" y="0" width="80" height="30" rx="5" />
            <rect x="10" y="5" width="20" height="10" fill="#07afb1" />
            <rect x="35" y="5" width="35" height="10" fill="#07afb1" />
            <circle cx="20" cy="25" r="4" fill="#07afb1" />
            <circle cx="60" cy="25" r="4" fill="#07afb1" />
        </g>
        
        <!-- Connecting dots / stars to make it look like a fabric pattern -->
        <circle cx="150" cy="30" r="2" />
        <circle cx="30" cy="220" r="2" />
        <circle cx="270" cy="150" r="3" />
        <circle cx="100" cy="100" r="1.5" />
        
        <!-- Diagonal connecting lines (subtle grid) -->
        <line x1="0" y1="0" x2="300" y2="300" stroke="white" stroke-width="0.5" opacity="0.3" stroke-dasharray="5, 5" />
        <line x1="300" y1="0" x2="0" y2="300" stroke="white" stroke-width="0.5" opacity="0.3" stroke-dasharray="5, 5" />
      </g>
    </svg>'''
    
    with open('src/assets/kerala-pattern.svg', 'w', encoding='utf-8') as f:
        f.write(pattern)
    print('Generated kerala-pattern.svg')
else:
    print('Failed to extract paths')

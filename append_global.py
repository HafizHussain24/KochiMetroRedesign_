with open('src/styles/global.css', 'a', encoding='utf-8') as f:
    f.write('\n\n/* Custom Page Hero Backgrounds */\n')
    f.write('.careers-hero {\n  background-image: url("../assets/network-bg.svg") !important;\n  background-position: center bottom !important;\n  background-repeat: repeat-x !important;\n  background-size: auto 250px !important;\n}\n\n')
    f.write('.transparency-hero {\n  background-image: url("../assets/blueprint-bg.svg") !important;\n  background-position: center center !important;\n  background-repeat: repeat !important;\n  background-size: 1200px 250px !important;\n}\n')

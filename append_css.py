with open('src/pages/Business.css', 'a', encoding='utf-8') as f:
    f.write('\n\n.business-hero {\n  background-image: url("../assets/city-bg.svg") !important;\n  background-position: center bottom !important;\n  background-repeat: repeat-x !important;\n  background-size: auto 150px !important;\n}\n')

with open('src/pages/Media.css', 'a', encoding='utf-8') as f:
    f.write('\n\n.media-hero {\n  background-image: url("../assets/elephant-bg.svg") !important;\n  background-position: right -100px center !important;\n  background-repeat: no-repeat !important;\n  background-size: auto 250% !important;\n}\n')

with open('src/pages/Sustainability.css', 'a', encoding='utf-8') as f:
    f.write('\n\n.sustain-hero {\n  background-image: url("../assets/leaf-bg.svg"), url("../assets/leaf-bg.svg") !important;\n  background-position: left -50px top -50px, right -50px bottom -50px !important;\n  background-repeat: no-repeat, no-repeat !important;\n  background-size: 300px 300px, 400px 400px !important;\n}\n')

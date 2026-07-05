import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { STATIONS } from '../../data/stations';
import { X, Train, Bus, Navigation } from 'lucide-react';
import './HomeMap.css';


// All station positions defined explicitly — no math-based calculation.
// ViewBox: 0 0 1620 590
const STATION_POSITIONS = {
  // Top horizontal (left to right)
  'aluva':           { x: 55,   y: 90,  side: 'top'    },
  'pulinchodu':      { x: 165,  y: 90,  side: 'bottom' },
  'companypady':     { x: 275,  y: 90,  side: 'top'    },
  'ambattukavu':     { x: 385,  y: 90,  side: 'bottom' },
  'muttom':          { x: 495,  y: 90,  side: 'top'    },
  'kalamassery':     { x: 600,  y: 90,  side: 'bottom' },

  // Diagonal down-right
  'cusat':           { x: 660,  y: 160, side: 'right'  },
  'pathadipalam':    { x: 700,  y: 230, side: 'right'  },
  'edapally':        { x: 730,  y: 305, side: 'right'  },

  // Vertical down
  'changampuzha':    { x: 730,  y: 365, side: 'left'   },
  'palarivattom':    { x: 730,  y: 415, side: 'left'   },
  'jln-stadium':     { x: 730,  y: 465, side: 'left'   },
  'kaloor':          { x: 730,  y: 515, side: 'left'   },

  // Diagonal up-right (V-shape bottom of map going back up)
  'town-hall':       { x: 800,  y: 505, side: 'bottom' },
  'mg-road':         { x: 870,  y: 455, side: 'bottom' },
  'maharajas':       { x: 950,  y: 420, side: 'bottom' },
  'ernakulam-south': { x: 1020, y: 385, side: 'right'  },
  'kadavanthra':     { x: 1080, y: 355, side: 'top'    },

  // Horizontal right
  'elamkulam':       { x: 1130, y: 320, side: 'top'    },
  'vyttila':         { x: 1190, y: 285, side: 'top'    },
  'thaikoodam':      { x: 1260, y: 285, side: 'bottom' },
  'petta':           { x: 1330, y: 285, side: 'top'    },
  'vadakkekotta':    { x: 1400, y: 285, side: 'bottom' },
  'sn-junction':     { x: 1470, y: 285, side: 'top'    },
  'thripunithura':   { x: 1540, y: 285, side: 'bottom' },

  // Branch: Kakkanad — placed BELOW the right horizontal, branching from Vyttila
  'kakkanad':        { x: 1190, y: 390, side: 'right'  },
};

export default function HomeMap() {
  const [activeStation, setActiveStation] = useState(null);
  const mapRef = useRef(null);

  // Close panel on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveStation(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const stationsWithPos = STATIONS.map((s) => {
    const pos = STATION_POSITIONS[s.id] || { x: 0, y: 0, side: 'bottom' };
    return { ...s, cx: pos.x, cy: pos.y, side: pos.side };
  });

  const mainLineStations = stationsWithPos.filter(s => s.line === 'main');
  const branchLineStations = stationsWithPos.filter(s => s.line === 'branch');
  const vyttila = stationsWithPos.find(s => s.id === 'vyttila');

  // Main path
  const mainPath = mainLineStations
    .map((s, i) => (i === 0 ? `M ${s.cx} ${s.cy}` : `L ${s.cx} ${s.cy}`))
    .join(' ');

  // Branch path: from Vyttila goes straight down then right to Kakkanad
  const branchPaths = branchLineStations.map(s =>
    `M ${vyttila.cx} ${vyttila.cy} L ${vyttila.cx} ${s.cy} L ${s.cx} ${s.cy}`
  );

  const handleStationClick = (station) => {
    setActiveStation(station);
  };

  return (
    <div
      className="home-map-container"
      ref={mapRef}
      onClick={(e) => {
        // Close panel when clicking the map background (not the panel or a station)
        if (
          activeStation &&
          !e.target.closest('.station-panel') &&
          !e.target.closest('.station-node')
        ) {
          setActiveStation(null);
        }
      }}
    >
      <div className="container map-header">
        <h2 className="section-title text-white">Explore Our Network</h2>
        <p className="text-light">Click any station to plan your journey and explore nearby attractions.</p>
      </div>

      <div className="map-scroll-area">
        <svg viewBox="0 0 1620 590" className="interactive-svg-map">

          {/* Main Line path */}
          <path d={mainPath} className="map-line main-line" />

          {/* Branch Line — Vyttila straight down then across to Kakkanad */}
          {branchPaths.map((d, i) => (
            <path key={`branch-${i}`} d={d} className="map-line branch-line" />
          ))}

          {/* Animated Train */}
          <g className="train-icon-group">
            <animateMotion dur="20s" repeatCount="indefinite" path={mainPath} rotate="auto" />
            <rect x="-16" y="-8" width="32" height="16" rx="4" fill="var(--kerala-deep)" stroke="var(--kmrl-teal)" strokeWidth="2" />
            <rect x="-10" y="-5" width="7" height="6" rx="1" fill="var(--kmrl-teal)" opacity="0.85" />
            <rect x="3" y="-5" width="7" height="6" rx="1" fill="var(--kmrl-teal)" opacity="0.85" />
            <circle cx="14" cy="0" r="2.5" fill="white" opacity="0.9" />
          </g>

          {/* Station dots */}
          {stationsWithPos.map((s) => {
            const isInterchange = s.id === 'vyttila' || s.id === 'edapally';
            const isActive = activeStation?.id === s.id;
            const r = isInterchange ? 9 : 7;

            // Label offset values by side
            const LABEL_OFFSET = 20; // px from station dot edge to first text line
            let lx = 0, nameLy = 0, codeLy = 0, anchor = 'middle';
            switch (s.side) {
              case 'top':
                // Code above, name below code (both above dot)
                nameLy = -(r + LABEL_OFFSET);
                codeLy = -(r + LABEL_OFFSET + 14);
                anchor = 'middle';
                break;
              case 'bottom':
                // Code first, then name below it (both below dot)
                codeLy = r + LABEL_OFFSET;
                nameLy = r + LABEL_OFFSET + 14;
                anchor = 'middle';
                break;
              case 'left':
                lx = -(r + 14);
                nameLy = 4;
                codeLy = -10;
                anchor = 'end';
                break;
              case 'right':
                lx = r + 14;
                nameLy = 4;
                codeLy = -10;
                anchor = 'start';
                break;
              default: break;
            }

            return (
              <g
                key={s.id}
                className={`station-node ${isActive ? 'active' : ''}`}
                onClick={() => handleStationClick(s)}
                tabIndex="0"
                aria-label={s.name}
              >
                {/* Interchange ring */}
                {isInterchange && (
                  <circle cx={s.cx} cy={s.cy} r={r + 7} className="station-interchange" />
                )}
                {/* Water metro indicator */}
                {s.connectivity?.waterMetro && (
                  <circle cx={s.cx} cy={s.cy} r={r + 12} className="station-water-bg" />
                )}

                {/* Dot */}
                <circle cx={s.cx} cy={s.cy} r={r} className="station-dot" />
                {isActive && (
                  <circle cx={s.cx} cy={s.cy} r={r + 6} className="station-active-ring" />
                )}

                {/* Label — SVG text with paint-order stroke outline (no rect badge needed) */}
                <text
                  x={s.cx + lx}
                  y={s.cy + nameLy}
                  textAnchor={anchor}
                  className="station-name"
                >
                  {s.name}
                </text>
                <text
                  x={s.cx + lx}
                  y={s.cy + codeLy}
                  textAnchor={anchor}
                  className="station-code"
                >
                  {s.code}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="map-legend">
          <div className="legend-item"><span className="leg-line main"></span> Phase 1 (Operational)</div>
          <div className="legend-item"><span className="leg-line branch"></span> Phase 2 (Under Const.)</div>
          <div className="legend-item"><span className="leg-dot interchange"></span> Interchange</div>
          <div className="legend-item"><span className="leg-dot water"></span> Water Metro</div>
        </div>
      </div>

      {/* Side Panel */}
      <div className={`station-panel glass-panel ${activeStation ? 'open' : ''}`}>
        {activeStation && (
          <>
            <button className="close-panel" onClick={() => setActiveStation(null)}>
              <X size={24} />
            </button>

            <div className="panel-header" style={{ borderBottomColor: `var(--zone-${activeStation.zone})` }}>
              <div className="panel-title-row">
                <span className="station-code-large">{activeStation.code}</span>
                <div>
                  <h3>{activeStation.name}</h3>
                  <span className="ml-name">{activeStation.malayalam}</span>
                </div>
              </div>
              <span className="zone-badge">Zone {activeStation.zone}</span>
            </div>

            <div className="panel-content">
              <div className="panel-section">
                <h4><Train size={16} /> Next Departures</h4>
                <div className="departures-grid">
                  <div className="dep-row">
                    <span>Towards Thripunithura:</span>
                    <strong>{activeStation.nextTrains?.up.join(' min, ')} min</strong>
                  </div>
                  <div className="dep-row">
                    <span>Towards Aluva:</span>
                    <strong>{activeStation.nextTrains?.down.join(' min, ')} min</strong>
                  </div>
                </div>
              </div>

              <div className="panel-section">
                <h4><Bus size={16} /> Connectivity</h4>
                <ul className="connectivity-list">
                  {activeStation.connectivity.bus.length > 0 && (
                    <li><strong>Buses:</strong> {activeStation.connectivity.bus.join(', ')}</li>
                  )}
                  {activeStation.connectivity.waterMetro && (
                    <li><strong>Water Metro:</strong> {activeStation.connectivity.waterMetroPlatform}</li>
                  )}
                  {activeStation.connectivity.auto && (
                    <li><strong>Auto/Taxi:</strong> Available at station exits</li>
                  )}
                  {activeStation.connectivity.bus.length === 0 && !activeStation.connectivity.waterMetro && (
                    <li>No major transit hubs directly connected. Auto available.</li>
                  )}
                </ul>
              </div>

              <div className="panel-section">
                <h4><Navigation size={16} /> Nearby (Walk)</h4>
                <ul className="nearby-list">
                  {activeStation.nearby.map((place, i) => (
                    <li key={i}>
                      <span className="place-name">{place.name}</span>
                      <span className="place-dist">{place.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel-actions">
                <Link to={`/stations/${activeStation.id}`} className="btn-primary" style={{ width: '100%' }}>
                  Full Station Guide →
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

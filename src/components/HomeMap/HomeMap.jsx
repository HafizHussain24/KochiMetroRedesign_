import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { Train, Bus, X } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './HomeMap.css';
import { STATIONS } from '../../data/stations';

const mainLineCoords = STATIONS.filter(s => s.line === 'main').map(s => [s.lat, s.lng]);
const jlnStadium = STATIONS.find(s => s.id === 'jln-stadium');
const kakkanad = STATIONS.find(s => s.id === 'kakkanad');
const branchLineCoords = jlnStadium && kakkanad ? [
  [jlnStadium.lat, jlnStadium.lng],
  [kakkanad.lat, kakkanad.lng]
] : [];

export default function HomeMap() {
  const mapCenter = [10.022, 76.32];
  const bounds = [[9.90, 76.22], [10.15, 76.45]];
  const [selectedStation, setSelectedStation] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="home-map-wrapper">
      <div className="leaflet-container-wrapper">
        <MapContainer
          center={mapCenter}
          zoom={12}
          minZoom={11}
          maxZoom={16}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={false}
          className="route-leaflet-map"
        >
          {/* Tile Layer using CARTO Voyager light tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          {/* Main Line Polyline */}
          <Polyline
            positions={mainLineCoords}
            pathOptions={{ color: '#00C2D1', weight: 5, opacity: 1, lineJoin: 'round' }}
          />

          {/* Branch Line Polyline (JLN to Kakkanad) */}
          {branchLineCoords.length > 0 && (
            <Polyline
              positions={branchLineCoords}
              pathOptions={{ color: '#8FB339', weight: 5, opacity: 0.9, dashArray: '8, 8', lineJoin: 'round' }}
            />
          )}

          {/* Station Markers */}
          {STATIONS.map((station) => {
            // Interchange check (JLN is interchange for branch, Vyttila for Water Metro)
            const isInterchange = station.id === 'jln-stadium' || station.id === 'vyttila';
            const radius = isInterchange ? 8 : 5;
            const isSelected = selectedStation?.id === station.id;

            return (
              <CircleMarker
                key={station.id}
                center={[station.lat, station.lng]}
                radius={isSelected ? radius + 2 : radius}
                eventHandlers={{ click: () => setSelectedStation(station) }}
                pathOptions={{
                  fillColor: isSelected ? '#00C2D1' : '#ffffff',
                  color: station.line === 'branch' ? '#8FB339' : '#00C2D1',
                  weight: isSelected ? 4 : 3,
                  fillOpacity: 1
                }}
              >
                <Tooltip
                  direction={station.lat > 10.05 ? "bottom" : "top"}
                  offset={[0, station.lat > 10.05 ? 5 : -5]}
                  opacity={1}
                  permanent={false}
                  className="glassmorphic-tooltip"
                >
                  <div className="tooltip-inner-new">
                    <div className="tooltip-header-new">
                      <div className="tooltip-code-box">{station.code}</div>
                      <div className="tooltip-title-col">
                        <h4 className="tooltip-title">{station.name}</h4>
                        <span className="tooltip-sub">{station.malayalam}</span>
                      </div>
                    </div>
                    
                    <div className="tooltip-accent"></div>
                    
                    <div className="tooltip-body-new">
                      <div className="tooltip-section">
                        <span className="tooltip-section-label">
                          <Train size={14} className="tooltip-icon" /> Next Trains
                        </span>
                        <div className="tooltip-list flex-between">
                          <span>To Thripunithura:</span>
                          <strong>{station.nextTrains?.down?.[0]} min</strong>
                        </div>
                        <div className="tooltip-list flex-between">
                          <span>To Aluva:</span>
                          <strong>{station.nextTrains?.up?.[0]} min</strong>
                        </div>
                      </div>
                      
                      <div className="tooltip-section" style={{ marginTop: '0.5rem', borderTop: '1px solid #E2E8F0', paddingTop: '0.5rem' }}>
                        <span className="tooltip-section-label">
                          <Bus size={14} className="tooltip-icon" /> Connectivity
                        </span>
                        <div className="tooltip-list">
                          <span>Buses: {station.connectivity?.bus?.length > 0 ? station.connectivity.bus.join(', ') : 'None'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>

        {/* Panel Backdrop to close on click outside */}
        {selectedStation && (
          <div className="panel-backdrop" onClick={() => setSelectedStation(null)} />
        )}

        {/* Station Detail Side Panel */}
        {selectedStation && (
          <div className="station-side-panel premium-panel">
            <button className="close-panel-btn" onClick={() => setSelectedStation(null)}>
              <X size={20} />
            </button>
            <div className="panel-header">
              <div className="panel-header-top">
                <div className="panel-station-code">{selectedStation.code}</div>
                <div className="panel-title-group">
                  <h4 className="panel-name">{selectedStation.name}</h4>
                  <span className="panel-malayalam">{selectedStation.malayalam}</span>
                </div>
              </div>
              <div className="panel-zone-badge">ZONE {selectedStation.zone}</div>
            </div>
            
            <div className="panel-accent-line"></div>
            
            <div className="panel-body scrollable-body">
              <div className="panel-section">
                <span className="panel-section-label">
                  <Train size={16} /> NEXT DEPARTURES
                </span>
                <div className="panel-list">
                  <div className="panel-list-item flex-between">
                    <span className="item-label">Towards Thripunithura:</span>
                    <span className="item-value">{selectedStation.nextTrains?.down?.join(' min, ')} min</span>
                  </div>
                  <div className="panel-list-item flex-between">
                    <span className="item-label">Towards Aluva:</span>
                    <span className="item-value">{selectedStation.nextTrains?.up?.join(' min, ')} min</span>
                  </div>
                </div>
              </div>
              
              <div className="panel-section">
                <span className="panel-section-label">
                  <Bus size={16} /> CONNECTIVITY
                </span>
                <div className="panel-list">
                  <div className="panel-list-item">
                    <span className="item-label">Buses:</span>
                    <span className="item-value ml-2">{selectedStation.connectivity?.bus?.length > 0 ? selectedStation.connectivity.bus.join(', ') : 'None'}</span>
                  </div>
                  <div className="panel-list-item">
                    <span className="item-label">Auto/Taxi:</span>
                    <span className="item-value fw-normal ml-2">Available at station exits</span>
                  </div>
                </div>
              </div>

              {selectedStation.nearby && selectedStation.nearby.length > 0 && (
                <div className="panel-section">
                  <span className="panel-section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                    NEARBY (WALK)
                  </span>
                  <div className="nearby-cards">
                    {selectedStation.nearby.map((place, idx) => (
                      <div key={idx} className="nearby-card">
                        <span className="nearby-name">{place.name}</span>
                        <span className="nearby-dist">{place.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="panel-footer">
              <button className="full-guide-btn" onClick={() => navigate(`/stations/${selectedStation.id}`)}>Full Station Guide &rarr;</button>
            </div>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <div className="container map-legend-container">
        <div className="map-legend">
          <div className="legend-item">
            <span className="leg-line main"></span>
            <span>Main Line</span>
          </div>
          <div className="legend-item">
            <span className="leg-line branch"></span>
            <span>Branch Line</span>
          </div>
          <div className="legend-item">
            <span className="leg-dot interchange"></span>
            <span>Interchange Station</span>
          </div>
          <div className="legend-item">
            <span className="leg-dot standard"></span>
            <span>Standard Station</span>
          </div>
        </div>
      </div>
    </div>
  );
}

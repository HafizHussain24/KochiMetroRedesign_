import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { STATIONS } from '../data/stations';
import { Train, Clock, MapPin, Building2, Utensils, ShoppingBag, Coffee, Hospital, Hotel, Info } from 'lucide-react';
import './StationDetail.css';

export default function StationDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('getting-there');
  const [station, setStation] = useState(null);

  useEffect(() => {
    // Scroll to top when loading new station
    window.scrollTo(0, 0);
    const found = STATIONS.find(s => s.id === id);
    setStation(found);
  }, [id]);

  if (!station) return <div className="container" style={{padding: '100px 0'}}>Loading...</div>;

  const getFacilityIcon = (type) => {
    switch(type) {
      case 'Restaurant': return <Utensils size={20} />;
      case 'Shopping': return <ShoppingBag size={20} />;
      case 'Hospital': return <Hospital size={20} />;
      case 'Hotel': return <Hotel size={20} />;
      case 'Café': return <Coffee size={20} />;
      default: return <Building2 size={20} />;
    }
  };

  return (
    <div className="station-detail-page">
      
      {/* ══════════════ HERO ══════════════ */}
      <section className="st-hero" style={{borderBottomColor: `var(--zone-${station.zone})`}}>
        <div className="container">
          <Link to="/stations" className="back-link">← Back to Stations</Link>
          
          <div className="st-hero-content animate-on-scroll is-visible stagger-1">
            <div className="st-hero-badge">{station.code}</div>
            <div className="st-hero-text">
              <h1 className="st-hero-title">{station.name}</h1>
              <span className="st-hero-ml">{station.malayalam}</span>
              <div className="st-hero-meta">
                <span className="st-zone">Zone {station.zone}</span>
                <span className="st-line">{station.line === 'main' ? 'Main Line' : 'Phase 2'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="st-hero-bg">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,100" fill={`var(--zone-${station.zone})`} opacity="0.1" />
          </svg>
        </div>
      </section>

      {/* ══════════════ TABS ══════════════ */}
      <section className="st-tabs-section">
        <div className="container">
          <div className="st-tabs-nav animate-on-scroll is-visible stagger-2">
            <button 
              className={`st-tab ${activeTab === 'getting-there' ? 'active' : ''}`}
              onClick={() => setActiveTab('getting-there')}
            >
              Getting There
            </button>
            <button 
              className={`st-tab ${activeTab === 'facilities' ? 'active' : ''}`}
              onClick={() => setActiveTab('facilities')}
            >
              Station Facilities
            </button>
            <button 
              className={`st-tab ${activeTab === 'nearby' ? 'active' : ''}`}
              onClick={() => setActiveTab('nearby')}
            >
              Nearby Places
            </button>
          </div>

          <div className="st-tab-content animate-on-scroll is-visible stagger-3">
            
            {/* TAB 1: Getting There */}
            {activeTab === 'getting-there' && (
              <div className="st-getting-there">
                <div className="content-grid">
                  
                  <div className="content-col">
                    <h3 className="section-heading"><Clock className="heading-icon" /> Next Trains</h3>
                    <div className="live-board">
                      <div className="board-header">
                        <span>Direction</span>
                        <span>Next</span>
                        <span>After</span>
                      </div>
                      
                      {station.nextTrains?.up[0] !== 0 ? (
                        <div className="board-row">
                          <span className="direction">→ Towards Thripunithura</span>
                          <span className="time pulse-text">{station.nextTrains?.up[0]} min</span>
                          <span className="time">{station.nextTrains?.up[1]} min</span>
                        </div>
                      ) : (
                        <div className="board-row empty">End of Line</div>
                      )}
                      
                      {station.nextTrains?.down[0] !== 0 ? (
                        <div className="board-row">
                          <span className="direction">← Towards Aluva</span>
                          <span className="time pulse-text">{station.nextTrains?.down[0]} min</span>
                          <span className="time">{station.nextTrains?.down[1]} min</span>
                        </div>
                      ) : (
                        <div className="board-row empty">End of Line</div>
                      )}
                    </div>
                  </div>

                  <div className="content-col">
                    <h3 className="section-heading"><MapPin className="heading-icon" /> Connectivity</h3>
                    
                    <div className="conn-blocks">
                      <div className="conn-block">
                        <h4>🚌 Feeder Buses</h4>
                        {station.connectivity.bus.length > 0 ? (
                          <p>Routes available: <strong>{station.connectivity.bus.join(', ')}</strong></p>
                        ) : (
                          <p>No dedicated feeder bus service at this station.</p>
                        )}
                      </div>

                      {station.connectivity.waterMetro && (
                        <div className="conn-block water">
                          <h4>⛴️ Water Metro</h4>
                          <p>Direct interchange to <strong>{station.connectivity.waterMetroPlatform}</strong>. Frequency: every 30 mins.</p>
                        </div>
                      )}

                      <div className="conn-block">
                        <h4>🚕 Last Mile</h4>
                        <p>Auto-rickshaws available at Exit 1. E-rickshaw charging point at parking.</p>
                      </div>

                      <div className="conn-block">
                        <h4>🅿️ Parking</h4>
                        <p>
                          {station.facilities.includes('parking') 
                            ? 'Available for 2-wheeler and 4-wheeler. ₹20/hr base rate.' 
                            : 'No dedicated parking facility at this station.'}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 2: Facilities */}
            {activeTab === 'facilities' && (
              <div className="st-facilities-tab">
                <div className="fac-grid">
                  <div className="fac-group">
                    <h3 className="section-heading">Essential</h3>
                    <ul className="fac-list">
                      <li><span className="icon">🛗</span> <strong>Lifts:</strong> 3 lifts serving all floors</li>
                      <li><span className="icon">♿</span> <strong>Accessibility:</strong> Ramps, tactile paths, visual aids</li>
                      <li><span className="icon">🚻</span> <strong>Toilets:</strong> Available on Concourse level</li>
                    </ul>
                  </div>

                  <div className="fac-group">
                    <h3 className="section-heading">Services</h3>
                    <ul className="fac-list">
                      <li className={!station.facilities.includes('cafeteria') ? 'disabled' : ''}>
                        <span className="icon">☕</span> <strong>Cafeteria:</strong> {station.facilities.includes('cafeteria') ? 'Open 7 AM–9 PM' : 'Not available'}
                      </li>
                      <li className={!station.facilities.includes('atm') ? 'disabled' : ''}>
                        <span className="icon">🏧</span> <strong>ATM:</strong> {station.facilities.includes('atm') ? 'Available at Concourse' : 'Not available'}
                      </li>
                      <li><span className="icon">💳</span> <strong>Top-up:</strong> Kiosk near ticketing counter</li>
                    </ul>
                  </div>

                  <div className="fac-group">
                    <h3 className="section-heading">Safety & Platform</h3>
                    <ul className="fac-list">
                      <li><span className="icon">👮</span> <strong>Security:</strong> 24/7 CISF personnel</li>
                      <li><span className="icon">📷</span> <strong>CCTV:</strong> 100% station coverage</li>
                      <li><span className="icon">🚪</span> <strong>Platform:</strong> Full-height screen doors</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Nearby */}
            {activeTab === 'nearby' && (
              <div className="st-nearby-tab">
                <div className="nearby-grid">
                  {station.nearby.map((place, index) => (
                    <div key={index} className="nearby-card">
                      <div className="nb-icon">{getFacilityIcon(place.type)}</div>
                      <div className="nb-content">
                        <h4>{place.name}</h4>
                        <span className="nb-type">{place.type}</span>
                        <div className="nb-dist">
                          <MapPin size={14} /> {place.distance}
                        </div>
                      </div>
                    </div>
                  ))}
                  {station.nearby.length === 0 && (
                    <div className="no-data">No nearby attractions listed for this station.</div>
                  )}
                </div>
                <div className="info-box">
                  <Info size={16} />
                  Distances are approximate walking times from the main station exit.
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}

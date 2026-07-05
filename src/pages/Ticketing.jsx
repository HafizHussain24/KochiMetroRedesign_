import { useState } from 'react';
import { STATIONS } from '../data/stations';
import { FARES } from '../data/fares';
import { ArrowDownUp, Train, MapPin } from 'lucide-react';
import './Ticketing.css';

export default function Ticketing() {
  const [fromStation, setFromStation] = useState('aluva');
  const [toStation, setToStation] = useState('mg-road');
  const [journeyResult, setJourneyResult] = useState(null);

  const handleSwap = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const calculateJourney = () => {
    if (fromStation === toStation) {
      setJourneyResult({ error: 'Origin and destination cannot be the same.' });
      return;
    }

    const start = STATIONS.find(s => s.id === fromStation);
    const end = STATIONS.find(s => s.id === toStation);

    if (!start || !end) return;

    // Simplified calculation for mockup
    const startIndex = STATIONS.findIndex(s => s.id === fromStation);
    const endIndex = STATIONS.findIndex(s => s.id === toStation);
    
    const stops = Math.abs(endIndex - startIndex);
    const time = stops * 2.5; // ~2.5 mins per stop average
    
    // Get fare from matrix
    const fare = FARES.matrix[start.zone][end.zone];
    const smartCardFare = fare * (1 - FARES.discounts.smartCard);

    // Generate path
    const path = [];
    const step = startIndex < endIndex ? 1 : -1;
    for (let i = startIndex; i !== endIndex + step; i += step) {
      path.push(STATIONS[i]);
    }

    setJourneyResult({
      start, end, stops, time: Math.round(time), fare, smartCardFare, path
    });
  };

  return (
    <div className="ticketing-page">
      <section className="page-hero small-hero ticketing-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Plan Your Journey</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Find the quickest route, check fares, and explore ticketing options.
          </p>
        </div>
      </section>

      <section className="planner-section">
        <div className="container">
          <div className="planner-grid">
            
            {/* Journey Planner UI */}
            <div className="planner-card animate-on-scroll is-visible stagger-2">
              <div className="planner-inputs">

                {/* FROM */}
                <div className="input-group">
                  <span className="input-label">From</span>
                  <div className="input-row">
                    <div className="input-icon from-icon"></div>
                    <select
                      className="input-base station-select"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                    >
                      {STATIONS.map(s => <option key={`from-${s.id}`} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                </div>

                {/* Swap */}
                <div className="swap-btn-wrapper">
                  <button className="swap-btn" onClick={handleSwap} aria-label="Swap stations">
                    <ArrowDownUp size={16} />
                  </button>
                </div>

                {/* TO */}
                <div className="input-group">
                  <span className="input-label">To</span>
                  <div className="input-row">
                    <div className="input-icon to-icon"></div>
                    <select
                      className="input-base station-select"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                    >
                      {STATIONS.map(s => <option key={`to-${s.id}`} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                </div>

              </div>
              
              <button className="btn-primary full-width calc-btn" onClick={calculateJourney}>
                Find Route →
              </button>

              {/* Results Area */}
              {journeyResult && (
                <div className="journey-results animate-on-scroll is-visible">
                  {journeyResult.error ? (
                    <div className="error-msg">{journeyResult.error}</div>
                  ) : (
                    <>
                      <div className="result-header">
                        <div className="route-summary">
                          <h3>{journeyResult.start.name} → {journeyResult.end.name}</h3>
                          <div className="route-meta">
                            <span><ClockIcon /> ~{journeyResult.time} mins</span>
                            <span><Train size={16} /> {journeyResult.stops} stations</span>
                            <span>Zone {journeyResult.start.zone} → Zone {journeyResult.end.zone}</span>
                          </div>
                        </div>
                      </div>

                      <div className="fare-box">
                        <div className="fare-standard">
                          <span className="fare-label">Standard Fare</span>
                          <span className="fare-amount">₹{journeyResult.fare}</span>
                        </div>
                        <div className="fare-smart">
                          <span className="fare-label">Kochi1 Card Fare</span>
                          <span className="fare-amount">₹{journeyResult.smartCardFare.toFixed(2)}</span>
                          <span className="fare-discount">(10% off)</span>
                        </div>
                      </div>

                      <div className="route-timeline">
                        <div className="timeline-line"></div>
                        <div className="timeline-stop start">
                          <div className="dot"></div>
                          <span>{journeyResult.start.name}</span>
                        </div>
                        <div className="timeline-middle">
                          <div className="dots-vert"></div>
                          <span>{journeyResult.stops - 1} stops</span>
                        </div>
                        <div className="timeline-stop end">
                          <div className="dot"></div>
                          <span>{journeyResult.end.name}</span>
                        </div>
                      </div>

                      <div className="buy-options">
                        <a href="https://kochimetro.org" target="_blank" rel="noreferrer" className="btn-primary">Buy Ticket</a>
                        <a href="https://kochimetro.org" target="_blank" rel="noreferrer" className="btn-outline">Recharge Kochi1 Card</a>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Information Column */}
            <div className="info-column animate-on-scroll is-visible stagger-3">
              
              <div className="info-card">
                <h3><Train size={20} /> Train Timetable</h3>
                <div className="info-list">
                  <div className="info-row"><span>First Train:</span> <strong>06:00 AM</strong></div>
                  <div className="info-row"><span>Last Train:</span> <strong>10:00 PM</strong></div>
                  <div className="info-row highlight">
                    <span>Peak Hours (7-10 AM, 5-8 PM):</span> <strong>Every 5 mins</strong>
                  </div>
                  <div className="info-row"><span>Off-peak Hours:</span> <strong>Every 10 mins</strong></div>
                </div>
              </div>

              <div className="info-card">
                <h3>Passes & Concessions</h3>
                <div className="pass-card">
                  <h4>Tourist Day Pass</h4>
                  <p>Unlimited travel across all stations for 1 day.</p>
                  <strong>₹150</strong>
                </div>
                <div className="pass-card">
                  <h4>Student Monthly Pass</h4>
                  <p>Valid Monday to Friday for regular commuting.</p>
                  <strong>₹200 / month</strong>
                </div>
                <ul className="discount-list">
                  <li><strong>10% off</strong> on all journeys using Kochi1 Card</li>
                  <li><strong>15% off</strong> for Senior Citizens (Smart Card required)</li>
                  <li><strong>15% off</strong> for Group Bookings (20+ people)</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Fare Matrix */}
      <section className="fare-matrix-section animate-on-scroll is-visible">
        <div className="container">
          <h2 className="section-title">Complete Fare Chart</h2>
          <div className="matrix-wrapper">
            <table className="fare-matrix">
              <thead>
                <tr>
                  <th>From \ To</th>
                  <th>Zone 1</th>
                  <th>Zone 2</th>
                  <th>Zone 3</th>
                  <th>Zone 4</th>
                  <th>Zone 5</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map(zoneY => (
                  <tr key={`row-${zoneY}`}>
                    <td className="zone-header">Zone {zoneY}</td>
                    {[1, 2, 3, 4, 5].map(zoneX => (
                      <td key={`cell-${zoneY}-${zoneX}`} className={zoneX === zoneY ? 'same-zone' : ''}>
                        ₹{FARES.matrix[zoneY][zoneX]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

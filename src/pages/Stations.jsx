import { useState } from 'react';
import { Link } from 'react-router-dom';
import { STATIONS } from '../data/stations';
import { Search } from 'lucide-react';
import './Stations.css';

const ZONES = [
  { id: 'all', label: 'All Stations' },
  { id: 1, label: 'Zone 1' },
  { id: 2, label: 'Zone 2' },
  { id: 3, label: 'Zone 3' },
  { id: 4, label: 'Zone 4' },
  { id: 5, label: 'Zone 5' },
  { id: 6, label: 'Phase 2 (Kakkanad)' }
];

export default function Stations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter stations based on search term and zone filter
  const filteredStations = STATIONS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.malayalam.includes(searchTerm);
    const matchesZone = activeFilter === 'all' || s.zone === activeFilter;
    return matchesSearch && matchesZone;
  });

  return (
    <div className="stations-page">
      
      {/* Hero Section */}
      <section className="page-hero stations-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Find Your Station</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Explore facilities, real-time departures, and nearby attractions across all 26 stations.
          </p>
          
          <div className="search-bar-container animate-on-scroll is-visible stagger-2">
            <Search className="search-icon" size={24} />
            <input 
              type="text" 
              className="station-search-input" 
              placeholder="Search by station name (English or Malayalam)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="filter-section animate-on-scroll is-visible stagger-3">
        <div className="container">
          <div className="filter-pills">
            {ZONES.map(zone => (
              <button 
                key={zone.id}
                className={`filter-pill ${activeFilter === zone.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(zone.id)}
              >
                {zone.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="results-section">
        <div className="container">
          <div className="stations-grid">
            {filteredStations.length > 0 ? (
              filteredStations.map((station, index) => (
                <div key={station.id} className={`station-card animate-on-scroll is-visible stagger-${(index % 4) + 1}`} style={{borderTop: `4px solid var(--zone-${station.zone})`}}>
                  <div className="st-card-header">
                    <div className="st-badge">{station.code}</div>
                    <div className="st-titles">
                      <h3>{station.name}</h3>
                      <span className="st-ml">{station.malayalam}</span>
                    </div>
                  </div>
                  
                  <div className="st-card-body">
                    <div className="st-info-row">
                      <span className="st-label">Zone {station.zone}</span>
                      <span className="st-label">{station.line === 'main' ? 'Main Line' : 'Phase 2'}</span>
                    </div>
                    
                    <div className="st-facilities">
                      {station.facilities.includes('lift') && <span title="Lift">🛗</span>}
                      {station.facilities.includes('accessible-toilet') && <span title="Accessible">♿</span>}
                      {station.facilities.includes('parking') && <span title="Parking">🅿️</span>}
                      {station.facilities.includes('atm') && <span title="ATM">🏧</span>}
                      {station.facilities.includes('cafeteria') && <span title="Café">☕</span>}
                    </div>
                    
                    <div className="st-connectivity">
                      {station.connectivity.bus.length > 0 && <span className="conn-tag bus">Bus</span>}
                      {station.connectivity.waterMetro && <span className="conn-tag water">Water Metro</span>}
                      {station.connectivity.auto && <span className="conn-tag auto">Auto</span>}
                    </div>
                  </div>
                  
                  <div className="st-card-footer">
                    <Link to={`/stations/${station.id}`} className="btn-outline full-width">
                      Station Details →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No stations found.</h3>
                <p>Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

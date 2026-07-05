import { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { STATIONS } from '../../data/stations';
import './SearchOverlay.css';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus input when opened
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : STATIONS.filter(s => 
    s.name.toLowerCase().includes(query.toLowerCase()) || 
    s.code.toLowerCase().includes(query.toLowerCase()) ||
    s.zone.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    onClose();
    navigate(`/stations/${id}`);
  };

  return (
    <div className="search-overlay">
      <button className="close-search" onClick={onClose} aria-label="Close search">
        <X size={32} />
      </button>

      <div className="search-container">
        <div className="search-input-wrapper">
          <SearchIcon size={32} className="s-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search stations (e.g. Aluva, MG Road)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.trim() !== '' && (
          <div className="search-results">
            {results.length > 0 ? (
              results.map(station => (
                <div key={station.id} className="search-result-item" onClick={() => handleSelect(station.id)}>
                  <div className="sr-info">
                    <span className="sr-code">{station.code}</span>
                    <span className="sr-name">{station.name}</span>
                  </div>
                  <span className="sr-zone">{station.zone}</span>
                </div>
              ))
            ) : (
              <div className="no-results">No stations found matching "{query}"</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

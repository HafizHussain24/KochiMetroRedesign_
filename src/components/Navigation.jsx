import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import SearchOverlay from './SearchOverlay/SearchOverlay';
import './Navigation.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem('kmrl-lang') || 'EN');
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle scroll for transparent-to-solid effect on home page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLang = () => {
    const newLang = lang === 'EN' ? 'ML' : 'EN';
    setLang(newLang);
    localStorage.setItem('kmrl-lang', newLang);
    // Dispatch custom event so other components on the same page can react immediately
    window.dispatchEvent(new CustomEvent('kmrl-lang-change', { detail: newLang }));
  };

  const navClass = `main-nav ${isHome && !isScrolled ? 'nav-transparent' : 'nav-solid'} ${isMobileMenuOpen ? 'mobile-open' : ''}`;
  const isML = lang === 'ML';

  return (
    <>
      <nav className={navClass}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo-premium">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-258 191.7 441.7 178.3" className="logo-svg" xml:space="preserve">
              <path fill="#02B0AF" d="M-170.9,315.8c-15.5,15.3-31,30.7-46.5,46c-6.5,6.5-14.1,9.2-23.2,6.8c-9.6-2.6-16.4-11.3-16.4-21.4c-0.1-44.1-0.1-88.2,0-132.4c0-12.6,10-22.2,22.8-22.2c12.5,0,22.3,9.4,22.4,22c0.1,23.5,0.1,47,0.1,70.5c0,1.8,0,3.5,0,6.5c2.1-1.9,3.4-2.9,4.5-4c28.7-28.9,57.6-57.7,86.5-86.6c11.4-11.3,24.2-11.4,35.5-0.2c15,14.9,29.9,29.9,44.9,44.8c1.2,1.2,2.5,2.1,3.8,3.1c10.6,10.6,21.1,21.2,31.7,31.8c9.7,9.8,19.3,19.7,29,29.5c6.6,6.6,13.2,13.1,19.8,19.7c9.5,9.5,10,23.4,1,32.6c-9.3,9.5-23.2,9.5-33-0.2c-14.8-14.7-29.5-29.4-44.2-44.1c-1.7-1.7-3.8-3.2-5.6-4.8c-2.6-2.9-5.1-6-7.9-8.7c-7.9-7.7-15.9-15.3-23.8-23c-6.1-6.3-12.1-12.6-18.2-19c-4.9-5.1-9.6-10.4-13.8-14.8c-10.5,10-20,19-29.5,28.1c-0.7,0.6-1.3,1.3-2,1.9c-2,2-4,4-6.1,6.1c-8.8,8.8-17.6,17.6-26.4,26.4c-1.1,1.1-2.2,2.2-3.3,3.2C-169.3,314.2-170.1,315-170.9,315.8z"/>
              <path fill="#C1D72D" d="M-4.8,280.6c-10.6-10.6-21.1-21.2-31.7-31.8c16.9-17,33.7-34.1,50.9-50.8c7.9-7.7,21.7-7.1,30,1c21.1,20.8,42,41.8,63,62.7c22.7,22.7,45.5,45.4,68.2,68.1c6.9,6.8,9.3,15,6.4,24.2c-2.9,8.8-9.4,14.1-18.6,15.3c-8,1.1-14.5-2-20.2-7.7c-21-21.1-42.1-42.2-63.2-63.2c-15.8-15.8-31.6-31.5-47.4-47.2c-1.1-1.1-2.5-2.1-4-3.3C17.2,258.9,6.2,269.7-4.8,280.6z"/>
              <path fill="#C1D72D" d="M-69.5,281.6c7.9,7.7,15.9,15.2,23.8,23c2.8,2.7,5.3,5.8,7.9,8.7C-49.2,324.9-60.6,336.5-72,348c-4.5,4.6-9.1,9.2-13.7,13.8c-10.1,10.2-23.7,10.3-34.1,0.3c-2.3-2.2-4.5-4.4-6.8-6.6c-1.1-1-2.2-2-3.3-3l-0.1,0.2l0.1-0.2c-1.7-1.7-3.3-3.3-5-5l-0.2,0.1l0.2-0.1c-1.4-1.5-2.9-3.1-4.3-4.6l-0.1-0.1c-2.9-2.8-5.8-5.5-8.6-8.3c-3.1-3.1-6.2-6.3-9.3-9.4c-1-1.1-2.1-2.2-3.1-3.3c-0.7-0.7-1.3-1.3-2-2c-0.1-0.7-0.3-1.4-0.4-2.1c8.9-9,17.9-17.9,26.8-26.9c0.6-0.6,1.3-1.2,1.9-1.8c0.4-0.4,0.8-0.8,1.2-1.3c0.3-0.1,0.5-0.2,0.7-0.5c0.7,0,1.3,0,2,0.1c8.9,9.1,17.8,18.2,27.6,28.2C-90.9,303.7-80.2,292.6-69.5,281.6z"/>
            </svg>
            <span className="logo-text-premium">Kochi Metro</span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            <div className="nav-item">
              <Link to="/ticketing">{isML ? 'യാത്ര പ്ലാൻ ചെയ്യാം' : 'Plan Journey'}</Link>
            </div>
            <div className="nav-item">
              <Link to="/stations">{isML ? 'സ്റ്റേഷനുകൾ' : 'Stations'}</Link>
            </div>
            <div className="nav-item">
              <Link to="/about">{isML ? 'വിവരങ്ങൾ' : 'About'}</Link>
            </div>
            <div className="nav-item">
              <Link to="/sustainability">{isML ? 'സുസ്ഥിരത' : 'Sustainability'}</Link>
            </div>
            <div className="nav-item">
              <Link to="/media">{isML ? 'മീഡിയ' : 'Media'}</Link>
            </div>
            <div className="nav-item">
              <Link to="/careers">{isML ? 'കരിയർ' : 'Careers'}</Link>
            </div>
            <div className="nav-item">
              <Link to="/business">{isML ? 'ബിസിനസ്സ്' : 'Business'}</Link>
            </div>
            <div className="nav-item dropdown-parent">
              <span className="nav-link-text">{isML ? 'സുതാര്യത ▾' : 'Transparency ▾'}</span>
              <div className="dropdown-menu">
                <Link to="/rti">{isML ? 'വിവരാവകാശം' : 'RTI'}</Link>
                <Link to="/tenders">{isML ? 'ടെൻഡറുകൾ' : 'Tenders'}</Link>
                <Link to="/vigilance">{isML ? 'വിജിലൻസ്' : 'Vigilance'}</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link to="/help">{isML ? 'ബന്ധപ്പെടുക' : 'Contact'}</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="nav-actions">
            <button className="search-btn-premium" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
              <Search size={18} />
            </button>
            <button className="lang-toggle-premium" onClick={toggleLang} aria-label="Language Toggle">
              {lang}
            </button>
            <a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer" className="btn-primary buy-ticket-btn-premium">
              {isML ? 'ടിക്കറ്റ്' : 'Buy Ticket'}
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <button className="lang-toggle mobile-lang" onClick={toggleLang}>
              <span className={lang === 'EN' ? 'active' : ''}>EN</span>
              <span className="divider">|</span>
              <span className={lang === 'ML' ? 'active' : ''}>ML</span>
            </button>
          </div>
          <div className="mobile-nav-links">
            <Link to="/ticketing">Plan Your Journey</Link>
            <Link to="/stations">Stations</Link>
            <Link to="/about">About KMRL</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/media">Media</Link>
            <div className="mobile-nav-group">
              <span className="mobile-group-title">Transparency</span>
              <Link to="/rti">RTI Portal</Link>
              <Link to="/tenders">Tenders</Link>
              <Link to="/vigilance">Vigilance</Link>
            </div>
            <Link to="/careers">Careers</Link>
            <Link to="/business">Business</Link>
            <Link to="/help">Help & Contact</Link>
          </div>
          <div className="mobile-drawer-footer">
            <a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer" className="btn-primary full-width">
              Buy Ticket
            </a>
          </div>
        </div>
      </div>
      
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

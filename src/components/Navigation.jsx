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

  return (
    <>
      <nav className={navClass}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <span className="logo-text">Kochi Metro</span>
            <div className="logo-line"></div>
            <span className="logo-subtext">Rail Limited</span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            <div className="nav-item">
              <Link to="/ticketing">Plan Your Journey</Link>
            </div>
            <div className="nav-item">
              <Link to="/stations">Stations</Link>
            </div>
            <div className="nav-item">
              <Link to="/about">About KMRL</Link>
            </div>
            <div className="nav-item">
              <Link to="/sustainability">Sustainability</Link>
            </div>
            <div className="nav-item">
              <Link to="/media">Media</Link>
            </div>
            <div className="nav-item dropdown-parent">
              <span className="nav-link-text">Transparency ▾</span>
              <div className="dropdown-menu">
                <Link to="/rti">RTI</Link>
                <Link to="/tenders">Tenders</Link>
                <Link to="/vigilance">Vigilance</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link to="/careers">Careers</Link>
            </div>
            <div className="nav-item">
              <Link to="/business">Business</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLang}>
              <span className={lang === 'EN' ? 'active' : ''}>EN</span>
              <span className="divider">|</span>
              <span className={lang === 'ML' ? 'active' : ''}>ML</span>
            </button>
            <button className="search-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
            <a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer" className="btn-primary buy-ticket-btn">
              Buy Ticket
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

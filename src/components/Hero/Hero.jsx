import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STATIONS } from '../../data/stations';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import './Hero.css';

const SLIDES = [
  {
    bg: slide1,
    eyebrow: 'Phase 2 Now Operational',
    title: <>Kochi, <em>Moving</em><br />Forward Together</>,
    tagline: "26 stations, 28 km of elevated metro connecting Aluva to Thripunithura through the heart of Kerala's commercial capital.",
    cta: { label: 'Explore Stations', href: '/stations' },
    cta2: { label: 'Plan Your Journey', href: '/ticketing' },
  },
  {
    bg: slide2,
    eyebrow: 'World-Class Infrastructure',
    title: <>Stations Built<br />for <em>People</em></>,
    tagline: 'Every station designed with passenger comfort first — air-conditioned, fully accessible, and integrated with city transit.',
    cta: { label: 'Station Guide', href: '/stations' },
    cta2: { label: 'Accessibility Info', href: '/help' },
  },
  {
    bg: slide3,
    eyebrow: 'Green & Sustainable',
    title: <>A City United<br />by <em>Green Transit</em></>,
    tagline: 'Powered 65% by solar energy. Kochi Metro is the most sustainable rapid transit system in India.',
    cta: { label: 'Sustainability', href: '/sustainability' },
    cta2: { label: 'About KMRL', href: '/about' },
  },
];

const TICKER_ITEMS = [
  'All services operating normally across all lines',
  'Phase 2 extension: Vyttila → Thripunithura fully operational',
  'Use Kochi1 Smart Card for 20% off all journeys',
  'Park & Ride available at Aluva, Edapally and Vyttila',
  'Next train at MG Road in 3 minutes',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const intervalRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setProgressKey(k => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  // Auto advance every 8 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 8000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const handleSwap = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };

  // Duplicate ticker content for seamless loop
  const tickerText = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="hero-section" aria-label="Hero slideshow">

      {/* Progress bar */}
      <div
        className={`slide-progress ${progressKey >= 0 ? 'running' : ''}`}
        key={progressKey}
      />

      {/* ── SLIDES ─────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          aria-hidden={i !== current}
        >
          {/* Background with Ken Burns */}
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />

          {/* Overlay */}
          <div className="slide-overlay" />

          {/* Text content */}
          <div className="slide-content">
            <div className="hero-content">
              <h1 className="hero-title animate-on-scroll is-visible">
                <span className="hero-title-top">Experience the</span>
                <br />
                <span className="hero-title-main">Living Kerala</span>
              </h1>
              <p className="hero-subtitle animate-on-scroll is-visible stagger-1">
                Seamless, sustainable, and smart urban mobility for Kochi.
              </p>
              <div className="hero-actions animate-on-scroll is-visible stagger-2">
                <a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Plan Your Journey
                </a>
                <a href="#network" className="btn-outline hero-btn-outline">
                  Explore Network
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── FLOATING JOURNEY PLANNER ──────────── */}
      <div className="hero-planner-float">
        <div className="fp-label">Quick Planner</div>
        <div className="fp-title">Plan Your Metro Journey</div>

        <div className="fp-form">
          <div className="fp-field">
            <label>From</label>
            <select
              className="fp-select"
              value={fromStation}
              onChange={e => setFromStation(e.target.value)}
            >
              <option value="" disabled>Select Starting Station</option>
              {STATIONS.map(s => (
                <option key={`from-${s.id}`} value={s.id}>{s.name}</option>
              ))}
            </select>
            <span className="fp-select-arrow">▼</span>
          </div>

          <div className="fp-divider">
            <div className="fp-divider-line" />
            <button className="fp-swap" onClick={handleSwap} aria-label="Swap stations">
              <ArrowUpDown size={14} />
            </button>
            <div className="fp-divider-line" />
          </div>

          <div className="fp-field">
            <label>To</label>
            <select
              className="fp-select"
              value={toStation}
              onChange={e => setToStation(e.target.value)}
            >
              <option value="" disabled>Select Destination</option>
              {STATIONS.map(s => (
                <option key={`to-${s.id}`} value={s.id}>{s.name}</option>
              ))}
            </select>
            <span className="fp-select-arrow">▼</span>
          </div>
        </div>

        <Link to="/ticketing" className="fp-submit">
          Find Route & Fare →
        </Link>

        <div className="fp-links">
          <a href="https://kochimetro.org" target="_blank" rel="noreferrer">Buy Ticket</a>
          <a href="https://kochimetro.org" target="_blank" rel="noreferrer">Kochi1 Card</a>
          <a href="https://kochimetro.org" target="_blank" rel="noreferrer">Season Pass</a>
        </div>
      </div>

      {/* ── ARROW BUTTONS ─────────────────────── */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── DOT NAVIGATION ─────────────────────── */}
      <div className="hero-nav" role="tablist" aria-label="Slide navigation">
        <div className="hero-nav-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => { clearInterval(intervalRef.current); goTo(i); }}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={i === current}
            />
          ))}
        </div>
      </div>

      {/* ── SLIDE COUNTER ─────────────────────── */}
      <div className="slide-counter">
        <strong>{String(current + 1).padStart(2, '0')}</strong>
        {' / '}
        {String(SLIDES.length).padStart(2, '0')}
      </div>

      {/* ── LIVE TICKER ───────────────────────── */}
      <div className="hero-ticker" role="marquee" aria-live="polite">
        <div className="ticker-badge">
          <span className="ticker-pulse" />
          Live
        </div>
        <div className="ticker-scroll-wrap">
          <div className="ticker-scroll">
            {tickerText.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

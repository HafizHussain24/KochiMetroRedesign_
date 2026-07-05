import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeMap from '../components/HomeMap/HomeMap';
import { NEWS } from '../data/news';
import heroAerial from '../assets/KeralaAerialView.jpg';
import './Home.css';


// Intersection Observer Hook for scroll animations
function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIntersecting(true); },
      { rootMargin, threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref, rootMargin]);
  return isIntersecting;
}

// CountUp Hook
function useCountUp(target, duration = 2000, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

export default function Home() {
  const statsRef = useRef(null);
  const statsInView = useOnScreen(statsRef);

  const sustainRef = useRef(null);
  const sustainInView = useOnScreen(sustainRef);

  const riders = useCountUp(650000, 2000, statsInView);
  const solar = useCountUp(208, 1800, statsInView);
  const trees = useCountUp(30000, 2200, statsInView);
  const carbon = useCountUp(15000, 1900, statsInView);

  // Language state — synced with Navigation via custom event
  const [lang, setLang] = useState(localStorage.getItem('kmrl-lang') || 'EN');
  useEffect(() => {
    const onLangChange = (e) => setLang(e.detail);
    window.addEventListener('kmrl-lang-change', onLangChange);
    return () => window.removeEventListener('kmrl-lang-change', onLangChange);
  }, []);

  const isML = lang === 'ML';

  return (
    <div className="home-page">

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="hero-section">

        {/* ── Real Kochi photo — natural, no duotone ── */}
        <div
          className="hero-photo-layer"
          style={{ backgroundImage: `url(${heroAerial})` }}
        />

        <div className="hero-background">
          <div className="rain-noise"></div>
          {/* Animated SVG Metro Tracks Background */}
          <svg className="hero-tracks" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M-100,800 Q400,600 1100,200" stroke="rgba(7, 175, 177, 0.15)" strokeWidth="4" fill="none" />
            <path d="M-100,820 Q400,620 1100,220" stroke="rgba(7, 175, 177, 0.15)" strokeWidth="4" fill="none" />
            <path d="M-100,780 Q400,580 1100,180" stroke="rgba(7, 175, 177, 0.15)" strokeWidth="4" fill="none" />

            {/* Animated Light on tracks */}
            <circle cx="0" cy="0" r="6" fill="var(--kmrl-teal)" filter="blur(2px)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M-100,800 Q400,600 1100,200" />
            </circle>
          </svg>

        </div>

        <div className="container hero-content">
          <div className="hero-text-block">
            <span className="eyebrow fade-up stagger-1">India's Most Advanced Metro Network</span>
            <h1 className="hero-title fade-up stagger-2">
              {isML ? 'കൊച്ചി, ചലിക്കുന്നു.' : 'Kochi, in Motion.'}
            </h1>
            <p className="hero-subtitle fade-up stagger-3">
              {isML ? '26 സ്റ്റേഷനുകൾ. 30 കി.മി. ഒരു തടസ്സമില്ലാത്ത നഗരം.' : '26 stations. 30 km. One seamless city.'}
            </p>

            <div className="hero-actions fade-up stagger-4">
              <Link to="/ticketing" className="btn-primary hero-btn">Plan My Journey →</Link>
              <a href="#network" className="btn-outline hero-btn-outline">Explore Network</a>
            </div>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="hero-ticker">
          <div className="ticker-content">
            Next train from Aluva: 2 min &nbsp;|&nbsp; Ernakulam South: 5 min &nbsp;|&nbsp; M.G Road: 3 min &nbsp;|&nbsp; Vyttila: 4 min &nbsp;|&nbsp; Thripunithura: 7 min
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator"></div>
      </section>

      {/* ══════════════ QUICK SERVICES ══════════════ */}
      <section className="quick-services">
        <div className="container">
          <div className="qs-grid">
            {[
              { icon: '🎫', label: 'Buy Ticket', sub: 'Online booking', href: 'https://kochimetro.org' },
              { icon: '🗺️', label: 'Plan Journey', sub: 'Routes & fares', href: '/ticketing' },
              { icon: '🅿️', label: 'Parking', sub: 'Book a space online', href: 'https://kochimetro.org' },
              { icon: '💳', label: 'Kochi1 Card', sub: 'Recharge & manage', href: 'https://kochimetro.org' },
              { icon: '🚨', label: 'Live Alerts', sub: 'Service status & updates', href: '#' },
              { icon: '📞', label: 'Contact', sub: '1800-425-0355 | Free', href: '/help' },
            ].map((item, index) => (
              <a key={item.label} href={item.href} className={`qs-card animate-on-scroll ${statsInView ? 'is-visible stagger-' + (index % 3 + 1) : ''}`}>
                <div className="qs-icon">{item.icon}</div>
                <div className="qs-text">
                  <strong>{item.label}</strong>
                  <span>{item.sub}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ MISSION / INTEGRATED TRANSPORT ══════════════ */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-images image-zoom-container animate-on-scroll is-visible">
              <div className="mission-card c1">
                <span className="mission-card-label">🚇 {isML ? 'മെട്രോ' : 'Metro Rail'}</span>
                <span className="mission-card-sub">{isML ? '26 സ്റ്റേഷൻ · 30 കി.മി' : '26 Stations · 30 km'}</span>
              </div>
              <div className="mission-card c2">
                <span className="mission-card-label">⛵ {isML ? 'വാട്ടർ മെട്രോ' : 'Water Metro'}</span>
                <span className="mission-card-sub">{isML ? 'ജലമാർഗ ഗതാഗതം' : 'Electric vessel network'}</span>
              </div>
              <div className="mission-card c3">
                <span className="mission-card-label">🚌 {isML ? 'ഫീഡർ ബസ്' : 'Feeder Buses'}</span>
                <span className="mission-card-sub">{isML ? 'സംയോജിത ഗതാഗതം' : 'Last-mile connectivity'}</span>
              </div>
            </div>

            <div className="mission-content animate-on-scroll is-visible stagger-2">
              <span className="section-label">{isML ? 'ഞങ്ങളുടെ ദൗത്യം' : 'Our Mission'}</span>
              <h2 className="section-title">
                {isML ? 'ഗതാഗതം ഒരുമിച്ചു ചിന്തിക്കുന്ന ആദ്യ നഗരം' : 'The First City Where Transport Thinks as One'}
              </h2>
              <p className="mission-body">
                {isML
                  ? 'കൊച്ചി മെട്രോ, ഫീഡർ ബസ്, വാട്ടർ മെട്രോ, ഓട്ടോ, ടാക്സി — ഇവ എല്ലാം ഒരൊറ്റ സംയോജിത ഗതാഗത ശൃംഖലയായി പ്രവർത്തിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.'
                  : 'Our objective is to make Kochi the first city in the country where the entire public transport system — the Metro, the Feeder Buses, the Water Metro, the auto-rickshaws, and the taxis — work together as a seamless integrated system; with a common timetable, common ticketing, and a centralised command and control.'
                }
              </p>

              <div className="mission-stats">
                <div className="m-stat"><strong>2017</strong><span>{isML ? 'ആരംഭം' : 'Inception'}</span></div>
                <div className="m-stat"><strong>30 km</strong><span>{isML ? 'ശൃംഖല' : 'Network'}</span></div>
                <div className="m-stat"><strong>26</strong><span>{isML ? 'സ്റ്റേഷൻ' : 'Stations'}</span></div>
                <div className="m-stat"><strong>3</strong><span>{isML ? 'മോഡ്' : 'Modes'}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ NETWORK MAP ══════════════ */}
      <section id="network" className="map-section">
        <HomeMap />
      </section>

      {/* ══════════════ STATS COUNTER ══════════════ */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {[
              { value: riders.toLocaleString(), suffix: '+', label: 'Daily Riders', icon: '🚇' },
              { value: (solar / 10).toFixed(1), suffix: ' MWp', label: 'Solar Capacity', icon: '☀️' },
              { value: trees.toLocaleString(), suffix: '+', label: 'Trees Planted', icon: '🌿' },
              { value: carbon.toLocaleString(), suffix: ' T', label: 'CO₂ Offset/Year', icon: '🌍' },
            ].map((stat, i) => (
              <div key={stat.label} className={`stat-card animate-on-scroll ${statsInView ? 'is-visible stagger-' + (i + 1) : ''}`}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.value}<span>{stat.suffix}</span></div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ LATEST NEWS ══════════════ */}
      <section className="news-section">
        <div className="container">
          <div className="section-header animate-on-scroll is-visible">
            <h2>Latest News</h2>
            <Link to="/media" className="btn-outline">View All Updates →</Link>
          </div>

          <div className="news-grid">
            {NEWS.slice(0, 3).map((item, i) => (
              <div key={item.id} className={`news-card animate-on-scroll is-visible stagger-${i + 1}`}>
                <div className="news-image-placeholder" style={{ background: `linear-gradient(45deg, ${item.tagColor}40, transparent)` }}></div>
                <div className="news-content">
                  <span className="badge" style={{ backgroundColor: `${item.tagColor}15`, color: item.tagColor }}>{item.tag}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className="news-read-more">Read more →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SUSTAINABILITY TEASER ══════════════ */}
      <section className="sustain-teaser" ref={sustainRef}>
        <div className="container">
          <div className="sustain-grid">
            <div className={`sustain-visual animate-on-scroll ${sustainInView ? 'is-visible' : ''}`}>
              <div className="ring-container">
                <svg className="progress-ring" width="280" height="280" viewBox="0 0 280 280">
                  <circle className="progress-ring__circle-bg" cx="140" cy="140" r="120" fill="transparent" strokeWidth="12" />
                  <circle className="progress-ring__circle" cx="140" cy="140" r="120" fill="transparent" strokeWidth="12"
                    strokeDasharray="754" style={{ strokeDashoffset: sustainInView ? 98 : 754 }} />
                </svg>
                <div className="ring-content">
                  <span className="ring-value">87%</span>
                  <span className="ring-label">Renewable Energy Powered</span>
                </div>
              </div>
            </div>

            <div className="sustain-content">
              <h2 className={`section-title text-white animate-on-scroll ${sustainInView ? 'is-visible' : ''}`}>Green Metro. Greener Kochi.</h2>
              <p className={`mission-body text-light animate-on-scroll ${sustainInView ? 'is-visible stagger-1' : ''}`}>
                How we're building a carbon-neutral future for Kerala.
              </p>

              <div className="sustain-initiatives">
                {[
                  { i: '☀️', t: 'Solar Energy', d: '20.8 MWp panels across stations' },
                  { i: '🌿', t: 'Vertical Gardens', d: 'Living green walls at 12 stations' },
                  { i: '♻️', t: 'Plastic Recycling', d: '6,000+ kg recycled via RVMs' },
                  { i: '🌊', t: 'Water Metro', d: 'Zero-emission electric vessels' }
                ].map((item, idx) => (
                  <div key={item.t} className={`initiative-row animate-on-scroll ${sustainInView ? 'is-visible stagger-' + (idx + 2) : ''}`}>
                    <div className="init-icon">{item.i}</div>
                    <div className="init-text">
                      <h4>{item.t}</h4>
                      <p>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`animate-on-scroll ${sustainInView ? 'is-visible stagger-5' : ''}`} style={{ marginTop: '2rem' }}>
                <Link to="/sustainability" className="btn-primary">Explore Our Sustainability Journey →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SOCIAL FEED TEASER ══════════════ */}
      <section className="social-section">
        <div className="container">
          <div className="social-grid">
            <div className="social-card tw">
              <div className="social-header">@MetroRailKochi</div>
              <p>Monsoon is here! 🌧️ Our trains are running on time. Stay dry, Kochi! #KochiMetro #RainyDay</p>
              <div className="social-meta">Likes: 342 | 2h ago</div>
            </div>
            <div className="social-card ig">
              <div className="social-header">Instagram</div>
              <div className="social-img-placeholder">🌅</div>
              <p>When engineering meets nature. The Kochi Metro crosses the Petta waterway at dusk.</p>
              <div className="social-meta">Likes: 2.4K | 5h ago</div>
            </div>
            <div className="social-card fb">
              <div className="social-header">Facebook</div>
              <p>📢 Service Alert: Slight delay on northbound trains from Edapally due to scheduled maintenance. Expected resolution: 20 minutes.</p>
              <div className="social-meta">Reactions: 145 | 8h ago</div>
            </div>
            <div className="social-card yt">
              <div className="social-header">YouTube</div>
              <div className="social-vid-placeholder">▶</div>
              <p>Kochi Metro — A Ride Through Kerala's Future</p>
              <div className="social-meta">184K views</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

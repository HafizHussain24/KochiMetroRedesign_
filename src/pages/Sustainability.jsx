import { useRef } from 'react';
import { Download } from 'lucide-react';
import './Sustainability.css';
import { useEffect, useState } from 'react';

// CountUp Hook (reused from Home)
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

// Intersection Observer
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

export default function Sustainability() {
  const dashRef = useRef(null);
  const dashInView = useOnScreen(dashRef);
  
  const solarRef = useRef(null);
  const solarInView = useOnScreen(solarRef);

  const treesCount = useCountUp(625000, 2500, dashInView);
  const plasticCount = useCountUp(8000, 2000, dashInView);

  return (
    <div className="sustainability-page">
      
      <section className="page-hero sustain-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Sustainability</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Setting the standard for green transit in India.
          </p>
        </div>
      </section>

      {/* Carbon Dashboard */}
      <section className="carbon-dash-section" ref={dashRef}>
        <div className="container">
          <div className="dash-grid">
            <div className={`dash-main animate-on-scroll ${dashInView ? 'is-visible' : ''}`}>
              <div className="ring-container large-ring">
                <svg className="progress-ring" width="340" height="340" viewBox="0 0 340 340">
                  <circle className="progress-ring__circle-bg" cx="170" cy="170" r="150" fill="transparent" strokeWidth="16" />
                  <circle className="progress-ring__circle" cx="170" cy="170" r="150" fill="transparent" strokeWidth="16" 
                    style={{ strokeDasharray: 942, strokeDashoffset: dashInView ? 122 : 942 }} />
                </svg>
                <div className="ring-content">
                  <span className="ring-value">87%</span>
                  <span className="ring-label">Renewable Energy Powered</span>
                </div>
              </div>
            </div>
            
            <div className={`dash-stats animate-on-scroll ${dashInView ? 'is-visible stagger-1' : ''}`}>
              <div className="d-stat-card">
                <span className="d-icon">🌍</span>
                <div className="d-info">
                  <strong>15,000 Tonnes</strong>
                  <span>Annual CO₂ Avoided</span>
                </div>
              </div>
              <div className="d-stat-card">
                <span className="d-icon">🌳</span>
                <div className="d-info">
                  <strong>{treesCount.toLocaleString()}+</strong>
                  <span>Trees Equivalent Planted</span>
                </div>
              </div>
              <div className="d-stat-card">
                <span className="d-icon">☀️</span>
                <div className="d-info">
                  <strong>20.8 MWp</strong>
                  <span>Installed Solar Capacity</span>
                </div>
              </div>
              <div className="d-stat-card">
                <span className="d-icon">🏅</span>
                <div className="d-info">
                  <strong>Platinum LEED</strong>
                  <span>Green Building Rating (13 stations)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Energy Feature */}
      <section className="solar-section" ref={solarRef}>
        <div className="container">
          <div className="solar-grid">
            <div className={`solar-text animate-on-scroll ${solarInView ? 'is-visible' : ''}`}>
              <h2 className="section-title text-white">20.8 MWp — India's Greenest Metro</h2>
              <p className="solar-desc">
                Kochi Metro generates 85% of its energy requirements through solar power. 
                With over 72,000 panels installed across station roofs, depot buildings, and ground-mounted arrays, 
                we are well on our way to becoming 100% carbon neutral.
              </p>
              <ul className="solar-list">
                <li>~25 million kWh generated annually</li>
                <li>18,000 tonnes of carbon saved per year</li>
                <li>Grid-connected for efficient distribution</li>
              </ul>
            </div>
            <div className={`solar-visual animate-on-scroll ${solarInView ? 'is-visible stagger-2' : ''}`}>
              {/* CSS Art for solar panels */}
              <div className="solar-panel-art">
                <div className="sun-glow"></div>
                <div className="panels-grid">
                  {[...Array(12)].map((_, i) => <div key={i} className="panel-cell"></div>)}
                </div>
                <div className="energy-lines">
                  <div className="eline e1"></div>
                  <div className="eline e2"></div>
                  <div className="eline e3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Initiatives Grid */}
      <section className="initiatives-section">
        <div className="container">
          <h2 className="section-title text-center animate-on-scroll is-visible">Green Initiatives</h2>
          
          <div className="init-grid">
            {[
              { i: '🌿', t: 'Vertical Gardens', d: 'Living walls at 12 stations — 50,000+ plants, 120+ species cleaning the air naturally.' },
              { i: '♻️', t: 'Plastic Recycling', d: `${plasticCount.toLocaleString()}+ kg of plastic recycled since 2021 through 6 reverse vending machines.` },
              { i: '💧', t: 'Rainwater Harvesting', d: '3,000 litre capacity at each station — used extensively for cleaning and maintenance.' },
              { i: '🌊', t: 'Water Metro', d: '16 zero-emission electric boats across 38 routes on Kochi backwaters.' },
              { i: '🚲', t: 'Cycle Docking', d: 'Cycle docking stations at 8 metro stations with 120 cycles available for commuters.' },
              { i: '🌍', t: 'Social Inclusion', d: "India's first metro with transgender staff — 23 employees currently part of the KMRL family." }
            ].map((item, index) => (
              <div key={item.t} className={`init-card animate-on-scroll is-visible stagger-${(index%3)+1}`}>
                <div className="i-card-icon">{item.i}</div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="reports-section animate-on-scroll is-visible">
        <div className="container">
          <div className="reports-box">
            <h2>Reports & Certifications</h2>
            <div className="doc-list">
              <a href="#" className="doc-item">
                <div className="doc-info">
                  <strong>Annual Sustainability Report 2024-25</strong>
                  <span>PDF, 4.2 MB</span>
                </div>
                <Download className="doc-icon" />
              </a>
              <a href="#" className="doc-item">
                <div className="doc-info">
                  <strong>ISO 14001 Environmental Management Certificate</strong>
                  <span>PDF, 1.1 MB</span>
                </div>
                <Download className="doc-icon" />
              </a>
              <a href="#" className="doc-item">
                <div className="doc-info">
                  <strong>LEED Platinum Rating Certificate</strong>
                  <span>PDF, 0.8 MB</span>
                </div>
                <Download className="doc-icon" />
              </a>
              <a href="#" className="doc-item">
                <div className="doc-info">
                  <strong>Carbon Audit Report 2024</strong>
                  <span>PDF, 2.5 MB</span>
                </div>
                <Download className="doc-icon" />
              </a>
              <a href="#" className="doc-item">
                <div className="doc-info">
                  <strong>Solar Energy Generation Data 2023-24</strong>
                  <span>CSV, 12 KB</span>
                </div>
                <Download className="doc-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

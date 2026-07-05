import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Leaf, Users, Bike } from 'lucide-react';
import './SustainabilityTeaser.css';

export default function SustainabilityTeaser() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const initiatives = [
    { icon: <Sun size={24} />, title: 'Solar Energy', desc: 'Powering 65% of our operations with clean solar power.' },
    { icon: <Leaf size={24} />, title: 'Green Building', desc: 'All stations are IGBC Platinum rated for green architecture.' },
    { icon: <Users size={24} />, title: 'Inclusivity', desc: 'Empowering transgender community and women workforce.' },
    { icon: <Bike size={24} />, title: 'NMT Network', desc: 'Promoting non-motorized transport with dedicated cycling tracks.' }
  ];

  // Circumference = 2 * PI * r = 2 * 3.14159 * 120 = 753.98
  const circumference = 754;
  const targetPercent = 65;
  const strokeDashoffset = inView ? circumference - (targetPercent / 100) * circumference : circumference;

  return (
    <section className="sustain-teaser" ref={sectionRef}>
      <div className="container">
        <div className="sustain-grid">
          
          <div className="sustain-cards">
            {initiatives.map((item, idx) => (
              <div key={idx} className="sus-card">
                <div className="sus-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="sustain-visual">
            <div className="ring-container">
              <svg className="progress-ring" width="280" height="280">
                <circle
                  className="progress-ring__circle-bg"
                  strokeWidth="16"
                  fill="transparent"
                  r="120"
                  cx="140"
                  cy="140"
                />
                <circle
                  className="progress-ring__circle"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="transparent"
                  r="120"
                  cx="140"
                  cy="140"
                  style={{ strokeDashoffset }}
                />
              </svg>
              <div className="ring-content">
                <span className="ring-value">65%</span>
                <span className="ring-label">Solar Powered</span>
              </div>
            </div>
            
            <h3>Setting the Green Standard</h3>
            <p>Kochi Metro goes beyond transit. We are building a sustainable ecosystem for the future of Kerala.</p>
            
            <Link to="/sustainability" className="btn-green">Explore Sustainability →</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

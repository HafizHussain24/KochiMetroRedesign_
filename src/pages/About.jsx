import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">About KMRL</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Driving the transition to sustainable urban mobility in Kerala.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          
          <div className="about-grid">
            
            {/* Main Content Column */}
            <div className="about-main animate-on-scroll is-visible stagger-2">
              
              <div className="about-section">
                <h2 className="section-title">Our Story</h2>
                <p>
                  Kochi Metro Rail Limited (KMRL) is a 50-50 joint venture between the Government of India and the Government of Kerala. 
                  Incorporated on 12th July 2011, KMRL was established to develop and operate the Kochi Metro system.
                </p>
                <p>
                  Since its commercial operations began in 2017, KMRL has grown beyond a standalone metro system. 
                  Today, we are the nodal agency for creating a unified, multi-modal transport network in the Greater Cochin region, 
                  integrating the Metro, Water Metro, and feeder services into one seamless experience.
                </p>
              </div>

              <div className="about-section">
                <div className="history-timeline animate-on-scroll is-visible stagger-2">
                  <div className="timeline-item">
                    <div className="t-year">2012</div>
                    <div className="t-content">
                      <h3>Incorporation</h3>
                      <p>KMRL Incorporated as a Special Purpose Vehicle (SPV).</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2013</div>
                    <div className="t-content">
                      <h3>Foundation Stone</h3>
                      <p>Foundation stone laid by the Prime Minister.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2014</div>
                    <div className="t-content">
                      <h3>Construction Begins</h3>
                      <p>Civil construction begins on the priority stretch.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2015</div>
                    <div className="t-content">
                      <h3>Viaduct Completed</h3>
                      <p>Viaduct spanning 25 km completed.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2016</div>
                    <div className="t-content">
                      <h3>Rolling Stock</h3>
                      <p>Rolling stock (trains) delivered from Alstom, France.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2017</div>
                    <div className="t-content">
                      <h3>Inauguration (Phase 1A & 1B)</h3>
                      <p>Phase 1A inaugurated (Aluva–Palarivatttom) by PM Narendra Modi in June. Phase 1B extended to Petta in September.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2019</div>
                    <div className="t-content">
                      <h3>Phase 1 Complete</h3>
                      <p>Phase 1 fully completed to Thripunithura in March.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2020</div>
                    <div className="t-content">
                      <h3>Ridership Record</h3>
                      <p>All-time ridership high — 1 lakh+ single day in January.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2021</div>
                    <div className="t-content">
                      <h3>Water Metro</h3>
                      <p>Water Metro inaugurated by PM Modi.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2023</div>
                    <div className="t-content">
                      <h3>Phase 2 Groundbreaking</h3>
                      <p>Phase 2 Kakkanad extension groundbreaking.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="t-year">2025</div>
                    <div className="t-content">
                      <h3>Phase 2 Progress</h3>
                      <p>Phase 2 construction at 40% completion.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2 className="section-title">Leadership</h2>
                <div className="leadership-grid">
                  <div className="leader-card">
                    <div className="leader-img-placeholder"></div>
                    <h4>Loknath Behera IPS (Retd.)</h4>
                    <span>Managing Director</span>
                  </div>
                  <div className="leader-card">
                    <div className="leader-img-placeholder"></div>
                    <h4>Director (Systems)</h4>
                    <span>Board of Directors</span>
                  </div>
                  <div className="leader-card">
                    <div className="leader-img-placeholder"></div>
                    <h4>Director (Finance)</h4>
                    <span>Board of Directors</span>
                  </div>
                  <div className="leader-card">
                    <div className="leader-img-placeholder"></div>
                    <h4>Director (Projects)</h4>
                    <span>Board of Directors</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="about-sidebar animate-on-scroll is-visible stagger-3">
              
              <div className="sidebar-card">
                <h3>Quick Facts</h3>
                <ul className="fact-list">
                  <li><strong>Founded:</strong> July 2011</li>
                  <li><strong>Headquarters:</strong> JLN Stadium, Kaloor</li>
                  <li><strong>Status:</strong> Joint Venture (Govt. of India & Govt. of Kerala)</li>
                  <li><strong>Network Length:</strong> 30 km (Phase 1 operational)</li>
                  <li><strong>Daily Ridership:</strong> 6.5 Lakhs (avg)</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Key Milestones</h3>
                <div className="timeline-mini">
                  <div className="tl-item">
                    <span className="tl-year">2017</span>
                    <span className="tl-desc">Aluva to Palarivattom (Inauguration)</span>
                  </div>
                  <div className="tl-item">
                    <span className="tl-year">2019</span>
                    <span className="tl-desc">Extension to Thaikoodam</span>
                  </div>
                  <div className="tl-item">
                    <span className="tl-year">2020</span>
                    <span className="tl-desc">Extension to Petta</span>
                  </div>
                  <div className="tl-item">
                    <span className="tl-year">2024</span>
                    <span className="tl-desc">Phase 1B completed (Thripunithura)</span>
                  </div>
                  <div className="tl-item future">
                    <span className="tl-year">Ongoing</span>
                    <span className="tl-desc">Phase 2 (Kakkanad Extension)</span>
                  </div>
                </div>
              </div>

              <div className="about-section sidebar-section">
                <h2 className="section-title">Vision & Mission</h2>
                <div className="vm-box">
                  <div className="vm-icon">👁️</div>
                  <div>
                    <h3>Our Vision</h3>
                    <p>To make Kochi a world-class city with an integrated, smart, and sustainable urban transport system.</p>
                  </div>
                </div>
                <div className="vm-box">
                  <div className="vm-icon">🎯</div>
                  <div>
                    <h3>Our Mission</h3>
                    <p>To provide a safe, reliable, and comfortable commuting experience while ensuring environmental sustainability and social inclusivity.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

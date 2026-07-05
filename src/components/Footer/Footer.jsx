import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Footer.css';

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--kerala-deep)"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            {/* Column 1: Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-text">Kochi Metro</span>
                <div className="logo-line"></div>
              </Link>
              <p className="footer-tagline">Connecting Kochi, Enriching Lives</p>
              <p className="footer-tagline-ml">കൊച്ചിയെ ബന്ധിപ്പിക്കുന്നു, ജീവിതം സമ്പുഷ്ടമാക്കുന്നു</p>
              
              <div className="footer-address">
                <p>JLN Metro Station, 4th Floor</p>
                <p>Kaloor, Kochi - 682017</p>
              </div>
              
              <div className="footer-contact">
                <div className="contact-item">
                  <Phone size={16} />
                  <span>0484-2846700</span>
                </div>
                <div className="contact-item highlight">
                  <Phone size={16} />
                  <span>1800-425-0355 (Toll Free)</span>
                </div>
              </div>
              
              <div className="footer-socials">
                <a href="https://twitter.com/MetroRailKochi" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                <a href="https://facebook.com/KochiMetroRail" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                <a href="https://instagram.com/KochiMetroRail" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                <a href="https://youtube.com/KochiMetroRail" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
                <a href="https://linkedin.com/company/kochi-metro-rail-ltd" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              </div>
            </div>

            {/* Column 2: Commuters */}
            <div className="footer-links">
              <h4>Commuters</h4>
              <ul>
                <li><Link to="/ticketing">Plan Journey</Link></li>
                <li><Link to="/ticketing">Fare Chart</Link></li>
                <li><Link to="/ticketing">Train Timetable</Link></li>
                <li><a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer">Kochi1 Card</a></li>
                <li><a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer">Parking Services</a></li>
                <li><Link to="/help">Lost & Found</Link></li>
                <li><Link to="/stations">Feeder Services</Link></li>
                <li><a href="https://watermetro.co.in" target="_blank" rel="noopener noreferrer">Water Metro</a></li>
              </ul>
            </div>

            {/* Column 3: Corporate */}
            <div className="footer-links">
              <h4>Corporate</h4>
              <ul>
                <li><Link to="/about">About KMRL</Link></li>
                <li><Link to="/about">Board of Directors</Link></li>
                <li><Link to="/rti">Annual Reports</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
                <li><Link to="/business">Business Opportunities</Link></li>
                <li><Link to="/tenders">Tenders</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/business">Consultancy Services</Link></li>
              </ul>
            </div>

            {/* Column 4: Transparency & Help */}
            <div className="footer-links">
              <h4>Transparency & Help</h4>
              <ul>
                <li><Link to="/rti">RTI Portal</Link></li>
                <li><Link to="/vigilance">Vigilance</Link></li>
                <li><Link to="/rti">Gazette & Orders</Link></li>
                <li><Link to="/rti">Open Data</Link></li>
                <li><Link to="/help">Grievance Redressal</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Accessibility Statement</Link></li>
                <li><Link to="/">Site Map</Link></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} Kochi Metro Rail Limited. All rights reserved.</p>
              <p className="footer-badges">Hosted on AWS | Compliant with GIGW 3.0 | ISO 27001</p>
            </div>
            <div className="footer-legal-links">
              <Link to="/">Privacy</Link>
              <Link to="/">Disclaimer</Link>
              <Link to="/">Accessibility</Link>
              <Link to="/">Terms</Link>
            </div>
          </div>
        </div>
        
        {/* Palm Frond Watermark */}
        <div className="footer-watermark">
          <svg viewBox="0 0 100 100" opacity="0.08">
            <path d="M50 100 C30 80 10 50 20 20 C40 30 60 10 90 0 C80 30 70 60 50 100" fill="currentColor" />
            <path d="M50 100 C60 80 80 50 70 30 C50 40 30 20 10 10 C20 40 30 70 50 100" fill="currentColor" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

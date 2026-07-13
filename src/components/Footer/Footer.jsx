import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Footer.css';

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="premium-footer">
      {/* Top Separation Bar */}
      <div className="footer-top-bar"></div>

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand/Contact */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo-link">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-258 191.7 441.7 178.3" className="footer-logo-svg" xml:space="preserve">
                <path fill="#02B0AF" d="M-170.9,315.8c-15.5,15.3-31,30.7-46.5,46c-6.5,6.5-14.1,9.2-23.2,6.8c-9.6-2.6-16.4-11.3-16.4-21.4c-0.1-44.1-0.1-88.2,0-132.4c0-12.6,10-22.2,22.8-22.2c12.5,0,22.3,9.4,22.4,22c0.1,23.5,0.1,47,0.1,70.5c0,1.8,0,3.5,0,6.5c2.1-1.9,3.4-2.9,4.5-4c28.7-28.9,57.6-57.7,86.5-86.6c11.4-11.3,24.2-11.4,35.5-0.2c15,14.9,29.9,29.9,44.9,44.8c1.2,1.2,2.5,2.1,3.8,3.1c10.6,10.6,21.1,21.2,31.7,31.8c9.7,9.8,19.3,19.7,29,29.5c6.6,6.6,13.2,13.1,19.8,19.7c9.5,9.5,10,23.4,1,32.6c-9.3,9.5-23.2,9.5-33-0.2c-14.8-14.7-29.5-29.4-44.2-44.1c-1.7-1.7-3.8-3.2-5.6-4.8c-2.6-2.9-5.1-6-7.9-8.7c-7.9-7.7-15.9-15.3-23.8-23c-6.1-6.3-12.1-12.6-18.2-19c-4.9-5.1-9.6-10.4-13.8-14.8c-10.5,10-20,19-29.5,28.1c-0.7,0.6-1.3,1.3-2,1.9c-2,2-4,4-6.1,6.1c-8.8,8.8-17.6,17.6-26.4,26.4c-1.1,1.1-2.2,2.2-3.3,3.2C-169.3,314.2-170.1,315-170.9,315.8z"/>
                <path fill="#C1D72D" d="M-4.8,280.6c-10.6-10.6-21.1-21.2-31.7-31.8c16.9-17,33.7-34.1,50.9-50.8c7.9-7.7,21.7-7.1,30,1c21.1,20.8,42,41.8,63,62.7c22.7,22.7,45.5,45.4,68.2,68.1c6.9,6.8,9.3,15,6.4,24.2c-2.9,8.8-9.4,14.1-18.6,15.3c-8,1.1-14.5-2-20.2-7.7c-21-21.1-42.1-42.2-63.2-63.2c-15.8-15.8-31.6-31.5-47.4-47.2c-1.1-1.1-2.5-2.1-4-3.3C17.2,258.9,6.2,269.7-4.8,280.6z"/>
                <path fill="#C1D72D" d="M-69.5,281.6c7.9,7.7,15.9,15.2,23.8,23c2.8,2.7,5.3,5.8,7.9,8.7C-49.2,324.9-60.6,336.5-72,348c-4.5,4.6-9.1,9.2-13.7,13.8c-10.1,10.2-23.7,10.3-34.1,0.3c-2.3-2.2-4.5-4.4-6.8-6.6c-1.1-1-2.2-2-3.3-3l-0.1,0.2l0.1-0.2c-1.7-1.7-3.3-3.3-5-5l-0.2,0.1l0.2-0.1c-1.4-1.5-2.9-3.1-4.3-4.6l-0.1-0.1c-2.9-2.8-5.8-5.5-8.6-8.3c-3.1-3.1-6.2-6.3-9.3-9.4c-1-1.1-2.1-2.2-3.1-3.3c-0.7-0.7-1.3-1.3-2-2c-0.1-0.7-0.3-1.4-0.4-2.1c8.9-9,17.9-17.9,26.8-26.9c0.6-0.6,1.3-1.2,1.9-1.8c0.4-0.4,0.8-0.8,1.2-1.3c0.3-0.1,0.5-0.2,0.7-0.5c0.7,0,1.3,0,2,0.1c8.9,9.1,17.8,18.2,27.6,28.2C-90.9,303.7-80.2,292.6-69.5,281.6z"/>
              </svg>
            </Link>
            <p className="footer-brand-tagline">Connecting Kochi, Enriching Lives</p>
            <p className="footer-brand-tagline-ml">കൊച്ചിയെ ബന്ധിപ്പിക്കുന്നു, ജീവിതം സമ്പുഷ്ടമാക്കുന്നു</p>
            
            <div className="footer-brand-address">
              <p>JLN Metro Station, 4th Floor</p>
              <p>Kaloor, Kochi - 682017</p>
            </div>
            
            <div className="footer-brand-contacts">
              <div className="footer-contact-item">
                <Phone size={14} className="phone-icon" />
                <span className="contact-number">0484-2846700</span>
              </div>
              <div className="footer-contact-item highlighted-toll-free">
                <Phone size={14} className="phone-icon" />
                <span className="toll-free-number">1800-425-0355 (Toll Free)</span>
              </div>
            </div>
            
            <div className="footer-brand-socials">
              <a href="https://twitter.com/MetroRailKochi" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://facebook.com/KochiMetroRail" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/KochiMetroRail" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com/KochiMetroRail" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://linkedin.com/company/kochi-metro-rail-ltd" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Commuters */}
          <div className="footer-col links-col">
            <h4>COMMUTERS</h4>
            <ul>
              <li><Link to="/ticketing">Plan Journey</Link></li>
              <li><Link to="/ticketing">Fare Chart</Link></li>
              <li><Link to="/ticketing">Train Timetable</Link></li>
              <li><a href="https://kochimetro.org" target="_blank" rel="noopener noreferrer">Kochi1 Card</a></li>
              <li><Link to="/parking">Parking Services</Link></li>
              <li><Link to="/lost-found">Lost & Found</Link></li>
              <li><Link to="/stations">Feeder Services</Link></li>
              <li><Link to="/water-metro">Water Metro</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="footer-col links-col">
            <h4>CORPORATE</h4>
            <ul>
              <li><Link to="/about">About KMRL</Link></li>
              <li><Link to="/about">Board of Directors</Link></li>
              <li><Link to="/reports">Annual Reports</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/business">Business Opportunities</Link></li>
              <li><Link to="/tenders">Tenders</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/consultancy">Consultancy Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Transparency & Help */}
          <div className="footer-col links-col">
            <h4>TRANSPARENCY & HELP</h4>
            <ul>
              <li><Link to="/rti">RTI Portal</Link></li>
              <li><Link to="/vigilance">Vigilance</Link></li>
              <li><Link to="/gazette">Gazette & Orders</Link></li>
              <li><Link to="/data">Open Data</Link></li>
              <li><Link to="/help">Grievance Redressal</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/accessibility">Accessibility Statement</Link></li>
              <li><Link to="/sitemap">Site Map</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="copyright-text">
              &copy; 2026 Kochi Metro Rail Limited. All rights reserved.
            </span>
            <div className="footer-badges-list">
              <span className="badge-item">Hosted on AWS | Compliant with GIGW 3.0 | ISO 27001</span>
            </div>
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy">Privacy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>

      {/* Palm Frond Watermark */}
      <div className="footer-watermark">
        <svg viewBox="0 0 100 100" className="palm-watermark" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100 C30 80 10 50 20 20 C40 30 60 10 90 0 C80 30 70 60 50 100" fill="#0D2B22" />
          <path d="M50 100 C60 80 80 50 70 30 C50 40 30 20 10 10 C20 40 30 70 50 100" fill="#0D2B22" />
        </svg>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import './Help.css';

const FAQS = [
  { q: "What are the timings for Kochi Metro?", a: "First train departs at 6:00 AM; last train at 10:00 PM from both terminals." },
  { q: "How do I recharge my Kochi1 Smart Card?", a: "You can recharge your Kochi1 Card at any station ticket counter, via the official app, or through our online portal. Minimum recharge: ₹50." },
  { q: "Are pets allowed on the metro?", a: "Only guide dogs and assistance animals for differently-abled passengers are permitted." },
  { q: "Can I carry a bicycle on the metro?", a: "Folding bicycles are permitted in designated coaches during off-peak hours (before 8 AM and after 7 PM). Full-size bicycles are not permitted." },
  { q: "What is the luggage policy?", a: "Passengers may carry one suitcase (max 60cm x 40cm x 25cm) and one carry-on bag. Oversized, hazardous, or offensive items are prohibited." },
  { q: "Is there a student or senior citizen discount?", a: "Yes. Senior citizens get 15% discount with a valid Smart Card. Student Monthly Passes are available for ₹200 (Mon–Fri validity)." },
  { q: "How do I book parking at metro stations?", a: "Parking can be booked online through our parking portal or at station kiosks." },
  { q: "Can I use UPI for ticket payments?", a: "Yes, UPI, debit cards, credit cards, and the Kochi1 Smart Card are accepted." },
  { q: "Is the metro accessible for wheelchair users?", a: "Yes. All stations have lifts, ramps, tactile paths, and accessible toilets. Station staff are trained to assist differently-abled passengers." },
  { q: "What happens if I lose something?", a: "Report to the nearest station's Customer Service desk or call 1800-425-0355. Items are stored at Aluva Station's Lost & Found for 30 days." }
];

export default function Help() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="help-page">
      <section className="page-hero small-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Help & Contact</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            We're here to assist you. Find answers, submit a grievance, or get in touch.
          </p>
        </div>
      </section>

      <section className="help-content">
        <div className="container">
          
          <div className="help-grid">
            
            {/* Contact & FAQs */}
            <div className="help-main animate-on-scroll is-visible stagger-2">
              
              <div className="contact-cards">
                <div className="contact-card">
                  <Phone size={24} className="cc-icon" />
                  <h3>Toll-Free Helpline</h3>
                  <p className="cc-primary">1800-425-0355</p>
                  <span className="cc-sub">24/7 Commuter Assistance</span>
                </div>
                <div className="contact-card">
                  <Mail size={24} className="cc-icon" />
                  <h3>General Enquiries</h3>
                  <p className="cc-primary">contact@kmrl.co.in</p>
                  <span className="cc-sub">We reply within 24 hours</span>
                </div>
              </div>

              <div className="faq-section mt-5">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                  {FAQS.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    >
                      <div className="faq-q">
                        <h4>{faq.q}</h4>
                        {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                      <div className="faq-a">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Grievance Form & Office */}
            <div className="help-sidebar animate-on-scroll is-visible stagger-3">
              
              <div className="form-card">
                <h3><MessageSquare size={20} className="mr-2 inline" /> Submit a Grievance</h3>
                <form className="grievance-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select>
                      <option>Lost & Found</option>
                      <option>Ticketing / Refund Issue</option>
                      <option>Staff Behavior</option>
                      <option>Station Cleanliness</option>
                      <option>Other Feedback</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Describe your issue..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary full-width">Submit Query</button>
                </form>
              </div>

              <div className="office-card mt-4">
                <h3><MapPin size={20} className="mr-2 inline" /> Corporate Office</h3>
                <address>
                  <strong>Kochi Metro Rail Limited (KMRL)</strong><br/>
                  4th Floor, JLN Metro Station,<br/>
                  Kaloor, Kochi, Kerala - 682017<br/><br/>
                  <strong>Phone:</strong> 0484-2846700
                </address>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

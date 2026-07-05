import { useState } from 'react';
import { AlertTriangle, Mail, Phone, Shield } from 'lucide-react';
import { STATIONS } from '../data/stations';
import { useToast } from '../components/Toast/Toast';
import './Vigilance.css';

export default function Vigilance() {
  const { showToast } = useToast();
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.length < 100) {
      showToast('Description must be at least 100 characters.', 'error');
      return;
    }
    showToast('Your complaint has been registered. Reference ID: VIG-2025-XXXXXX. All submissions are encrypted and handled with strict confidentiality.', 'success');
    e.target.reset();
    setDesc('');
  };

  return (
    <div className="vigilance-page">
      <section className="page-hero small-hero transparency-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Vigilance & Integrity</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Committed to a corruption-free, transparent, and fair operational environment.
          </p>
        </div>
      </section>

      <section className="vig-content">
        <div className="container">
          
          <div className="vig-grid">
            
            <div className="vig-main animate-on-scroll is-visible stagger-2">
              <div className="vig-box">
                <h2>Message from CVO</h2>
                <p>
                  The Vigilance Department at Kochi Metro Rail Limited operates under the guidelines of the 
                  Central Vigilance Commission (CVC). Our primary objective is to ensure probity, transparency, 
                  and integrity in all KMRL processes. We encourage whistleblowers and citizens to report any 
                  suspected malpractices without fear.
                </p>
              </div>

              <div className="vig-box">
                <h2>Report an Issue</h2>
                <div className="alert-box warning mb-4">
                  <AlertTriangle size={24} className="alert-icon" />
                  <div>
                    <strong>Confidentiality Assured:</strong> The identity of the complainant will be kept strictly 
                    confidential under the Public Interest Disclosure and Protection of Informer (PIDPI) resolution.
                  </div>
                </div>

                <form className="vigilance-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label>Type of Complaint *</label>
                      <select required>
                        <option value="">Select Category...</option>
                        <option>Corruption</option>
                        <option>Misuse of Position</option>
                        <option>Financial Irregularity</option>
                        <option>Bribery</option>
                        <option>Misconduct</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group flex-1">
                      <label>Incident Date *</label>
                      <input type="date" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Location of Incident *</label>
                    <select required>
                      <option value="">Select Location...</option>
                      <option value="KMRL HQ">KMRL Headquarters</option>
                      <option value="Aluva Depot">Aluva Depot</option>
                      <optgroup label="Stations">
                        {STATIONS.map(s => <option key={s.id} value={s.id}>{s.name} Station</option>)}
                      </optgroup>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Description of Incident *</label>
                    <textarea 
                      rows="6" 
                      required 
                      placeholder="Provide detailed information (minimum 100 characters)..."
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <div className="char-counter" style={{ color: desc.length >= 100 ? 'var(--kerala-moss)' : 'var(--kerala-spice)' }}>
                      {desc.length} / minimum 100 characters
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label>Evidence Upload (Optional)</label>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                      <span className="help-text">Max 10MB. PDF, JPG, PNG only.</span>
                    </div>
                    <div className="form-group flex-1">
                      <label>Contact Email (Optional)</label>
                      <input type="email" placeholder="For follow-up updates" />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary mt-4">
                    <Shield size={18} className="mr-2" /> Submit Securely 🔒
                  </button>
                </form>

              </div>
            </div>

            <div className="vig-sidebar animate-on-scroll is-visible stagger-3">
              <div className="sidebar-card mb-4">
                <h3>Contact CVO</h3>
                <div className="contact-methods mt-4">
                  <div className="c-method">
                    <Mail size={24} className="cm-icon" />
                    <div>
                      <h4>Email Reporting</h4>
                      <p>cvo@kmrl.co.in</p>
                    </div>
                  </div>
                  <div className="c-method">
                    <Phone size={24} className="cm-icon" />
                    <div>
                      <h4>Direct Hotline</h4>
                      <p>0484-2846750</p>
                    </div>
                  </div>
                  <div className="c-method">
                    <Shield size={24} className="cm-icon" />
                    <div>
                      <h4>Postal Address</h4>
                      <p>Chief Vigilance Officer, KMRL HQ, 4th Floor, JLN Stadium, Kaloor, Kochi - 682017</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-card mb-4">
                <h3>Integrity Pledge</h3>
                <p className="text-sm">
                  KMRL is a signatory to the Integrity Pact for all major procurements, ensuring fair play and 
                  equal opportunity for all vendors.
                </p>
                <button className="btn-outline full-width mt-4">Download e-Pledge</button>
              </div>

              <div className="sidebar-card">
                <h3>Important Links</h3>
                <ul className="doc-links">
                  <li><a href="#">CVC Guidelines</a></li>
                  <li><a href="#">PIDPI Resolution</a></li>
                  <li><a href="#">KMRL Conduct Rules</a></li>
                  <li><a href="#">Annual Vigilance Report</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

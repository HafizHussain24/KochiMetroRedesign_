import { useState } from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { useToast } from '../components/Toast/Toast';
import './RTI.css';

export default function RTI() {
  const { showToast } = useToast();
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('RTI Application Submitted Successfully! Reference: RTI-2025-XXXX', 'success');
    e.target.reset();
    setDesc('');
  };

  return (
    <div className="rti-page">
      <section className="page-hero small-hero transparency-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Right to Information</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Transparency, Accountability, and Open Data at KMRL.
          </p>
        </div>
      </section>

      <section className="rti-content">
        <div className="container">
          
          <div className="rti-grid">
            
            <div className="rti-main animate-on-scroll is-visible stagger-2">
              
              <div className="rti-box">
                <h2>RTI Act, 2005</h2>
                <p>
                  Kochi Metro Rail Limited (KMRL) is committed to transparency and accountability in its functioning. 
                  In accordance with the Right to Information Act, 2005, we have appointed designated officers to assist 
                  citizens in obtaining information under the Act.
                </p>
                <div className="alert-box info mb-4">
                  <span className="alert-icon">ℹ️</span>
                  <div>
                    <strong>Filing Fee:</strong> ₹10 (DD/IPO/Cash). BPL Applicants are exempt from fees.
                  </div>
                </div>

                <h3>Online RTI Application</h3>
                <form className="rti-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label>Full Name *</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group flex-1">
                      <label>Contact Number *</label>
                      <input type="tel" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label>Email Address *</label>
                      <input type="email" required />
                    </div>
                    <div className="form-group flex-1">
                      <label>Type of Information *</label>
                      <select required>
                        <option value="">Select Type...</option>
                        <option>Financial</option>
                        <option>Operations</option>
                        <option>Procurement</option>
                        <option>HR</option>
                        <option>Infrastructure</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Residential Address *</label>
                    <textarea rows="3" required></textarea>
                  </div>

                  <div className="form-group">
                    <label>Description of Information Required *</label>
                    <textarea 
                      rows="5" 
                      required
                      maxLength={500}
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <div className="char-counter">{desc.length} / 500</div>
                  </div>

                  <div className="form-group">
                    <label>Preferred Format *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="format" value="Email" required /> Email (Digital Copy)</label>
                      <label><input type="radio" name="format" value="Physical" /> Physical Copy (By Post)</label>
                    </div>
                  </div>

                  <div className="form-group checkbox-group mt-4">
                    <label className="flex-align">
                      <input type="checkbox" required />
                      <span>I certify I am an Indian citizen and this request is not for commercial purposes.</span>
                    </label>
                  </div>

                  <button type="submit" className="btn-primary mt-4">Submit RTI Application</button>
                  <a href="https://rtionline.gov.in/" target="_blank" rel="noreferrer" className="btn-outline ml-2">
                    Govt RTI Portal <ExternalLink size={16} className="ml-2" />
                  </a>
                </form>
              </div>

              <div className="rti-box">
                <h2>Designated Officers</h2>
                <div className="officers-list">
                  
                  <div className="officer-card">
                    <span className="role-badge pio">Public Information Officer (PIO)</span>
                    <h3>Smt. Mini P.S.</h3>
                    <p className="o-designation">General Manager (HR & Admin)</p>
                    <div className="o-contact">
                      <span><strong>Email:</strong> pio@kmrl.co.in</span>
                      <span><strong>Phone:</strong> 0484-2846701</span>
                    </div>
                  </div>

                  <div className="officer-card">
                    <span className="role-badge faa">First Appellate Authority (FAA)</span>
                    <h3>Shri. K.R. Kumar</h3>
                    <p className="o-designation">Director (Finance)</p>
                    <div className="o-contact">
                      <span><strong>Email:</strong> faa@kmrl.co.in</span>
                      <span><strong>Phone:</strong> 0484-2846702</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className="rti-sidebar animate-on-scroll is-visible stagger-3">
              
              <div className="doc-box">
                <h3><FileText size={20} /> Proactive Disclosures</h3>
                <p className="doc-desc">Mandatory disclosures under Section 4(1)(b) of the RTI Act.</p>
                <ul className="doc-links">
                  <li><a href="#"><Download size={14} /> Organization Chart</a></li>
                  <li><a href="#"><Download size={14} /> Board of Directors</a></li>
                  <li><a href="#"><Download size={14} /> Rules, Regulations & Manuals</a></li>
                  <li><a href="#"><Download size={14} /> Statement of Board & Committees</a></li>
                  <li><a href="#"><Download size={14} /> Directory of Officers</a></li>
                  <li><a href="#"><Download size={14} /> Monthly Remuneration details</a></li>
                  <li><a href="#"><Download size={14} /> Budget & Expenditure</a></li>
                </ul>
              </div>

              <div className="doc-box">
                <h3>Annual Reports</h3>
                <ul className="doc-links">
                  <li><a href="#"><Download size={14} /> Annual Report 2023-24</a></li>
                  <li><a href="#"><Download size={14} /> Annual Report 2022-23</a></li>
                  <li><a href="#"><Download size={14} /> Annual Report 2021-22</a></li>
                </ul>
                <a href="#" className="view-all-link">View Archives →</a>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

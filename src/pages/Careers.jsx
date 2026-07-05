import { useState } from 'react';
import { CAREERS } from '../data/careers';
import { Briefcase, MapPin, GraduationCap, Clock, AlertTriangle, X } from 'lucide-react';
import { useToast } from '../components/Toast/Toast';
import './Careers.css';

export default function Careers() {
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [step, setStep] = useState(1);
  const { showToast } = useToast();

  const departments = ['All', ...new Set(CAREERS.map(job => job.department))];

  const filteredJobs = filter === 'All' 
    ? CAREERS 
    : CAREERS.filter(job => job.department === filter);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setStep(1);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
    } else {
      handleModalClose();
      showToast('Application received! Reference ID: KMRL-2025-XXXXX', 'success');
    }
  };

  return (
    <div className="careers-page">
      <div className="job-alert-banner">
        <div className="container">
          <AlertTriangle size={20} className="mr-2 inline" />
          ⚠️ KMRL does not collect fees for job applications. Report suspicious recruitment calls to vigilance@kochimetro.org
        </div>
      </div>

      <section className="page-hero small-hero careers-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Build the Future of Kochi</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Join KMRL and be part of the team redefining urban mobility in Kerala.
          </p>
        </div>
      </section>

      <section className="why-join">
        <div className="container">
          <div className="perks-grid animate-on-scroll is-visible stagger-2">
            <div className="perk-card">
              <div className="perk-icon">🌱</div>
              <h3>Impactful Work</h3>
              <p>Contribute to a sustainable, green, and integrated transport system that impacts millions daily.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon">📈</div>
              <h3>Career Growth</h3>
              <p>Continuous learning opportunities, skill development programs, and clear progression paths.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon">🤝</div>
              <h3>Inclusive Culture</h3>
              <p>An equal opportunity employer with a diverse workforce, including special initiatives for marginalized communities.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon">🏥</div>
              <h3>Comprehensive Benefits</h3>
              <p>Competitive compensation, health insurance, provident fund, and wellness programs for you and your family.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="jobs-section">
        <div className="container">
          <div className="jobs-header animate-on-scroll is-visible">
            <h2>Current Openings</h2>
            
            <div className="dept-filters">
              {departments.map(dept => (
                <button 
                  key={dept}
                  className={`dept-btn ${filter === dept ? 'active' : ''}`}
                  onClick={() => setFilter(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="jobs-list animate-on-scroll is-visible stagger-1">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <span className="job-id">{job.id}</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                  
                  <h3 className="job-title">{job.title}</h3>
                  
                  <div className="job-meta">
                    <div className="meta-item">
                      <Briefcase size={16} /> {job.department}
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} /> {job.location}
                    </div>
                    <div className="meta-item">
                      <Clock size={16} /> Exp: {job.experience}
                    </div>
                    <div className="meta-item">
                      <GraduationCap size={16} /> {job.qualification}
                    </div>
                  </div>
                  
                  <div className="job-footer">
                    <div className="job-date">Apply before: <strong>{job.lastDate}</strong></div>
                    <button className="btn-primary" onClick={() => handleApplyClick(job)}>View Details & Apply</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <p>No open positions found in this department currently.</p>
                <button className="btn-outline" onClick={() => setFilter('All')}>Clear Filter</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content application-modal">
            <button className="modal-close" onClick={handleModalClose}><X size={24} /></button>
            <h2>Apply for {selectedJob?.title}</h2>
            
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${(step / 5) * 100}%` }}></div>
            </div>
            <p className="step-indicator">Step {step} of 5</p>

            <form onSubmit={handleSubmit} className="application-form">
              {step === 1 && (
                <div className="form-step">
                  <h3>Personal Details</h3>
                  <div className="form-group"><label>Full Name</label><input type="text" required /></div>
                  <div className="form-group"><label>Date of Birth</label><input type="date" required /></div>
                  <div className="form-group"><label>Email Address</label><input type="email" required /></div>
                  <div className="form-group"><label>Phone Number</label><input type="tel" required /></div>
                </div>
              )}
              {step === 2 && (
                <div className="form-step">
                  <h3>Qualifications</h3>
                  <div className="form-group"><label>Highest Education</label><input type="text" required /></div>
                  <div className="form-group"><label>Upload Certificates (Optional)</label><input type="file" /></div>
                </div>
              )}
              {step === 3 && (
                <div className="form-step">
                  <h3>Experience</h3>
                  <div className="form-group"><label>Previous Employer</label><input type="text" /></div>
                  <div className="form-group"><label>Role / Designation</label><input type="text" /></div>
                  <div className="form-group"><label>Duration (Years)</label><input type="number" /></div>
                </div>
              )}
              {step === 4 && (
                <div className="form-step">
                  <h3>Document Upload</h3>
                  <div className="form-group"><label>Upload CV (PDF/DOCX)</label><input type="file" required /></div>
                  <div className="form-group"><label>Upload Photo (JPG/PNG)</label><input type="file" required /></div>
                </div>
              )}
              {step === 5 && (
                <div className="form-step">
                  <h3>Review & Submit</h3>
                  <p>Please review your details. By submitting this application, you confirm that the information provided is accurate.</p>
                </div>
              )}

              <div className="form-actions mt-4 flex gap-2">
                {step > 1 && <button type="button" className="btn-outline" onClick={() => setStep(step - 1)}>Back</button>}
                <button type="submit" className="btn-primary flex-1">{step < 5 ? 'Next Step' : 'Submit Application'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

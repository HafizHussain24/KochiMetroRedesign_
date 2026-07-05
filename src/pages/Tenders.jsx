import { useState } from 'react';
import { TENDERS } from '../data/tenders';
import { Search, Download, FileText, CheckCircle } from 'lucide-react';
import './Tenders.css';

export default function Tenders() {
  const [filter, setFilter] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTenders = TENDERS.filter(tender => {
    const matchesFilter = filter === 'all' || tender.status.includes(filter);
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tender.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="tenders-page">
      <section className="page-hero small-hero transparency-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Tenders & Contracts</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Open opportunities to partner with Kochi Metro Rail Limited.
          </p>
        </div>
      </section>

      <section className="tenders-content">
        <div className="container">
          
          {/* Controls */}
          <div className="tenders-controls animate-on-scroll is-visible stagger-2">
            <div className="search-box">
              <Search size={20} className="s-icon" />
              <input 
                type="text" 
                placeholder="Search by tender ID or keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              <button className={`f-tab ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active Tenders</button>
              <button className={`f-tab ${filter === 'closed' ? 'active' : ''}`} onClick={() => setFilter('closed')}>Archived</button>
              <button className={`f-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            </div>
          </div>

          {/* List */}
          <div className="tenders-list animate-on-scroll is-visible stagger-3">
            <div className="list-header">
              <div className="col-id">Tender No. / Details</div>
              <div className="col-dept">Department</div>
              <div className="col-dates">Important Dates</div>
              <div className="col-action">Action</div>
            </div>

            {filteredTenders.length > 0 ? (
              filteredTenders.map((tender) => (
                <div key={tender.id} className={`tender-row ${tender.status}`}>
                  
                  <div className="col-id">
                    <span className="t-id">{tender.id}</span>
                    <h3 className="t-title">{tender.title}</h3>
                    <div className="t-meta">
                      <span className="t-type">{tender.type}</span>
                      <span className="t-val">Est. Value: {tender.value}</span>
                    </div>
                  </div>
                  
                  <div className="col-dept">
                    <span className="mobile-label">Dept: </span>
                    {tender.department}
                  </div>
                  
                  <div className="col-dates">
                    <div className="date-item">
                      <span className="d-lbl">Published:</span>
                      <span className="d-val">{tender.published}</span>
                    </div>
                    <div className="date-item">
                      <span className="d-lbl">Closing:</span>
                      <span className="d-val highlight">{tender.closing}</span>
                    </div>
                  </div>
                  
                  <div className="col-action">
                    {tender.status !== 'closed' ? (
                      <button className="btn-outline download-btn">
                        <Download size={16} /> Download Doc
                      </button>
                    ) : (
                      <span className="closed-badge"><CheckCircle size={16} /> Closed</span>
                    )}
                  </div>
                  
                </div>
              ))
            ) : (
              <div className="no-tenders">
                <FileText size={48} className="empty-icon" />
                <h3>No Tenders Found</h3>
                <p>Try adjusting your search criteria.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { NEWS } from '../data/news';
import { MEDIA } from '../data/media';
import { PlayCircle, Image as ImageIcon, FileText } from 'lucide-react';
import './Media.css';

export default function Media() {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="media-page">
      <section className="page-hero small-hero media-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Media Centre</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Latest news, press releases, photos, and videos from KMRL.
          </p>
        </div>
      </section>

      <section className="media-content">
        <div className="container">
          
          {/* Tabs */}
          <div className="media-tabs animate-on-scroll is-visible stagger-2">
            <button 
              className={`m-tab ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              <FileText size={18} /> Latest News & PR
            </button>
            <button 
              className={`m-tab ${activeTab === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveTab('photos')}
            >
              <ImageIcon size={18} /> Photo Gallery
            </button>
            <button 
              className={`m-tab ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              <PlayCircle size={18} /> Videos
            </button>
          </div>

          <div className="media-tab-content animate-on-scroll is-visible stagger-3">
            
            {/* News & PR Tab */}
            {activeTab === 'news' && (
              <div className="news-pr-grid">
                
                <div className="news-col">
                  <h3 className="media-section-title">Latest News</h3>
                  <div className="news-list">
                    {NEWS.map(item => (
                      <div key={`news-${item.id}`} className="media-news-card">
                        <div className="mnc-date">{item.date}</div>
                        <h4>{item.title}</h4>
                        <span className="mnc-tag" style={{color: item.tagColor, backgroundColor: `${item.tagColor}15`}}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pr-col">
                  <h3 className="media-section-title">Press Releases</h3>
                  <div className="pr-list">
                    {MEDIA.pressReleases.map(pr => (
                      <div key={pr.id} className="pr-item">
                        <div className="pr-meta">
                          <span className="pr-date">{pr.date}</span>
                          <span className="pr-pdf">PDF</span>
                        </div>
                        <h4>{pr.title}</h4>
                        <a href="#" className="pr-link">Download Release →</a>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Photos Tab */}
            {activeTab === 'photos' && (
              <div className="photos-grid">
                {MEDIA.photos.map(photo => (
                  <div key={photo.id} className="photo-card">
                    <div className="photo-placeholder">
                      <ImageIcon size={40} className="placeholder-icon" />
                    </div>
                    <div className="photo-info">
                      <h4>{photo.title}</h4>
                      <span>{photo.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="videos-grid">
                {MEDIA.videos.map(video => (
                  <div key={video.id} className="video-card">
                    <div className="video-thumbnail">
                      <PlayCircle size={60} className="play-icon" />
                      <span className="video-duration">{video.duration}</span>
                    </div>
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <div className="video-meta">
                        <span>{video.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}

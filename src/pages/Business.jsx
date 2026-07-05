import { Briefcase, Building2, Store, HeartHandshake, Laptop, Bus, ArrowRight } from 'lucide-react';
import './Business.css';

export default function Business() {
  const opportunities = [
    {
      id: 'retail',
      icon: <Store size={32} />,
      title: 'Retail Spaces',
      desc: 'Prime commercial spaces available at all metro stations. Ideal for cafes, ATMs, convenience stores, and specialty retail.',
      cta: 'View Layouts'
    },
    {
      id: 'advertising',
      icon: <Briefcase size={32} />,
      title: 'Advertising Rights',
      desc: 'Reach millions of commuters daily through train wraps, station branding, digital screens, and pillar advertising.',
      cta: 'Media Kit'
    },
    {
      id: 'property',
      icon: <Building2 size={32} />,
      title: 'Property Development',
      desc: 'Partner with KMRL for large-scale commercial and residential real estate projects around metro corridors.',
      cta: 'Current Projects'
    },
    {
      id: 'csr',
      icon: <HeartHandshake size={32} />,
      title: 'CSR Partnerships',
      desc: 'Adopt-a-Station, Green Initiatives, Education Programs. Collaborate for sustainable urban development.',
      cta: 'Corporate Enquiry'
    },
    {
      id: 'tech',
      icon: <Laptop size={32} />,
      title: 'Technology Partnerships',
      desc: 'API integrations, digital solutions, smart city pilots — Contact: tech@kochimetro.org',
      cta: 'Partner With Us'
    },
    {
      id: 'transit',
      icon: <Bus size={32} />,
      title: 'Last Mile Integration',
      desc: 'Feeder service operators, e-rickshaw providers, parking operators. Connect the city to the metro.',
      cta: 'Register as Operator'
    }
  ];

  return (
    <div className="business-page">
      <section className="page-hero small-hero business-hero">
        <div className="container">
          <h1 className="page-title animate-on-scroll is-visible">Partner With Us</h1>
          <p className="page-subtitle animate-on-scroll is-visible stagger-1">
            Explore commercial and business opportunities with Kochi Metro.
          </p>
        </div>
      </section>

      <section className="business-content">
        <div className="container">
          
          <div className="opp-grid animate-on-scroll is-visible stagger-2">
            {opportunities.map(opp => (
              <div key={opp.id} className="opp-card">
                <div className="opp-icon">{opp.icon}</div>
                <h3>{opp.title}</h3>
                <p>{opp.desc}</p>
                <button className="btn-outline">{opp.cta}</button>
              </div>
            ))}
          </div>

          <div className="biz-cta animate-on-scroll is-visible mt-5">
            <div className="cta-content">
              <h2>Can't find what you're looking for?</h2>
              <p>For custom proposals and unique partnership opportunities, get in touch with our business development team.</p>
            </div>
            <a href="mailto:business@kmrl.co.in" className="btn-primary">
              Contact BD Team <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

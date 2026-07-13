import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Stations from './pages/Stations';
import StationDetail from './pages/StationDetail';
import Ticketing from './pages/Ticketing';
import Sustainability from './pages/Sustainability';
import Media from './pages/Media';
import Careers from './pages/Careers';
import Tenders from './pages/Tenders';
import RTI from './pages/RTI';
import Business from './pages/Business';
import Vigilance from './pages/Vigilance';
import Help from './pages/Help';
import About from './pages/About';
import { useScrollAnimations } from './hooks/useScrollAnimation';
import { ToastContainer } from './components/Toast/Toast';
import Chatbot from './components/Chatbot';
import { useEffect } from 'react';
import './styles/global.css';

function AppContent() {
  useScrollAnimations();
  const location = useLocation();

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-nav">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/stations/:id" element={<StationDetail />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/business" element={<Business />} />
          <Route path="/vigilance" element={<Vigilance />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

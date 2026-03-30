import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Practice from './pages/Practice';
import Agenda from './pages/Agenda';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/mentoria" element={<Navigate to="/practice" replace />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

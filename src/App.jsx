import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Mentoria from './pages/Mentoria';
import Agenda from './pages/Agenda';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

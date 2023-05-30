import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import ScrollToTop from './utils/scrollToTop';
import NotFound from './pages/NotFound';
import './App.css';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
        <Preloader />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </Router>
  );
}

export default App;

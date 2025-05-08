import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Etusivu from './pages/Etusivu';
import Kartta from './pages/Kartta';
import Polku from './pages/Polku';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Etusivu />} />
        <Route path="/kartta" element={<Kartta />} />
        <Route path="/polku" element={<Polku />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
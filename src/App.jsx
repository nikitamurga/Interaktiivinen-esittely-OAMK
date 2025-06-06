// Pääkomponentti. Hallitsee sivuston reitityksen sekä
// yhteiset komponentit kuten ylä- ja alatunniste.
// TODO: lisää kieliversiot (FI/EN) myöhemmin.
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Etusivu from './pages/Etusivu';
import Kartta from './pages/Kartta';
import Polku from './pages/Polku';
import Header from './components/Header';
import Footer from './components/Footer';

// Varsinainen sovelluskomponentti. Täällä määritellään
// mitä sivuja sovelluksessa on ja missä järjestyksessä ne näytetään.
function App() {
  return (
    <Router>
      {/* Yläpalkki näkyy kaikilla sivuilla */}
      <Header />
      <Routes>
        {/* Reitit eri sivuille */}
        <Route path="/" element={<Etusivu />} />
        <Route path="/kartta" element={<Kartta />} />
        <Route path="/polku" element={<Polku />} />
      </Routes>
      {/* Alatunniste yhteinen kaikille sivuille */}
      <Footer />
    </Router>
  );
}

export default App;
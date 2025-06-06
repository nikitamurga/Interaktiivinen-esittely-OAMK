// Etusivu toimii projektin aloitusnäkymänä.
// Täällä käyttäjä voi siirtyä kartalle tai opiskelijan polkuun.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Etusivu.css';

function Etusivu() {
  // React Routerin hook navigointiin
  const navigate = useNavigate();

  // Etusivun sankarikuva ja toimintapainikkeet
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Tervetuloa tutustumaan OAMK:iin!</h1>
        <p>Opiskelijan opas kampukselle ja Oulun elämään</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/kartta')}>
            Tutustu karttaan
          </button>
          <button onClick={() => navigate('/polku')}>
            Aloita opiskelijan polku
          </button>
        </div>
      </div>
    </div>
  );
}

export default Etusivu;

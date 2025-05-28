import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Etusivu.css';

function Etusivu() {
  const navigate = useNavigate();

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

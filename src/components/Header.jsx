import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <div className="logo">
  <Link to="/">
  </Link>
</div>
        <nav className="nav">
          <a href="#">Hae meille</a>
          <a href="#">Opiskelu</a>
          <a href="#">Tutkimus ja kehitys</a>
          <a href="#">Yrityksille ja yhteisöille</a>
          <a href="#">Tietoa meistä</a>
          <a href="#">Ajankohtaista</a>
        </nav>
        <div className="lang">
          <button>FI</button> | <button>EN</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
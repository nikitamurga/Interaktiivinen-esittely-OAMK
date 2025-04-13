import './Footer.css';

function Footer() {
  return (
    <footer className="oamk-footer">
      <div className="footer-columns">
        <div className="footer-column">
          <img src="/oamk-logo.png" alt="OAMK logo" className="footer-logo" />
          <p>p. 020 611 0200</p>
          <p>Yliopistokatu 9, 90570 Oulu</p>
          <a href="https://www.oamk.fi">Tilaa uutiskirje</a>
          <div className="social-icons">
            <span>🌐</span>
            <span>📷</span>
            <span>🎥</span>
            <span>🎧</span>
          </div>
        </div>
        <div className="footer-column">
          <h4>Hae opiskelijaksi</h4>
          <ul>
            <li>AMK-tutkinnot</li>
            <li>YAMK-tutkinnot</li>
            <li>Opettajakoulutus</li>
            <li>Avoin AMK</li>
            <li>Täydennyskoulutus</li>
            <li>Näin haet Oamkiin</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Lisätietoja</h4>
          <ul>
            <li>Yhteystiedot</li>
            <li>Laskutustiedot</li>
            <li>Opiskelu-osio</li>
            <li>Kirjasto</li>
            <li>Alasottolomake</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Tietosuoja</span>
        <span>Saavutettavuus</span>
        <span>Asiakirjajulkisuuskuvaus</span>
      </div>
    </footer>
  );
}

export default Footer;
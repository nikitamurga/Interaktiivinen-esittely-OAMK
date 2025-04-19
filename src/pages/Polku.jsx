import { useState } from 'react';
import './Polku.css';

const slides = [
  {
    title: 'Saapuminen Ouluun',
    category: 'Lentokenttä',
    image: '/images/oulu-lentokentta.jpg',
    content: (
      <>
        <h3>Etäisyys</h3>
        <ul>
          <li>Lentokenttä → Keskusta ~15 km</li>
          <li>Lentokenttä → OAMK ~21 km</li>
        </ul>
        <h3>Bussiyhteydet</h3>
        <ul>
          <li>Bussit 8 ja 9 kulkevat keskustaan</li>
          <li>Bussi 8 jatkaa OAMK:lle</li>
          <li>Matka keskustaan ~30 min</li>
          <li>Lippu maksaa 2,60 € lähimaksulla tai 5,00 € käteisellä</li>
        </ul>
        <h3>Huomio!</h3>
        <ul>
          <li>Bussit voivat olla etuajassa tai myöhässä</li>
          <li>Seuraa liikennettä: <a href="https://osl.fi" target="_blank">osl.fi</a> tai OSL-sovellus</li>
        </ul>
        <h3>Taksi</h3>
        <ul>
          <li>Hinta lentokentältä → keskustaan / OAMK:lle: n. 36–44 €</li>
          <li>Kesto: 15–20 min</li>
        </ul>
      </>
    )
  },
  {
    title: 'Saapuminen Ouluun',
    category: 'Rautatieasema',
    image: '/images/rautatieasema.jpg',
    content: (
      <>
        <p>Rautatieasemalta on hyvät yhteydet keskustaan ja OAMK:lle.</p>
        <ul>
          <li>Bussit: 1, 2, 5, 8, 15</li>
          <li>Taksiasema heti aseman edessä</li>
        </ul>
        <p>Käytä OSL-sovellusta tai <a href="https://osl.fi" target="_blank">osl.fi</a> nähdäksesi reitit ja aikataulut.</p>
      </>
    )
  },
  {
    title: 'Saapuminen Ouluun',
    category: 'Linja-autoasema',
    image: '/images/linja-autoasema.jpg',
    content: (
      <>
        <p>Linja-autoasema sijaitsee lähellä keskustaa.</p>
        <ul>
          <li>Lyhyt kävelymatka keskustan palveluihin</li>
          <li>Bussiyhteydet muualle Ouluun suoraan pysäkiltä</li>
          <li>Taksitolppa aseman läheisyydessä</li>
        </ul>
      </>
    )
  },
  {
    title: 'Saapuminen opiskelija-asuntoon',
    category: '',
    image: '/images/psoas.jpg',
    content: (
      <>
        <h3>Asuntolan vastaanotto ja avainten haku</h3>
        <ul>
          <li>Huoneiston tarkistus</li>
        </ul>
        <h4>Haasteita:</h4>
        <ul>
          <li>Avainten nouto voi olla hankalaa myöhään tai viikonloppuna</li>
          <li>Huoneiston kunto ei välttämättä vastaa odotuksia</li>
          <li>Ruokakaupan löytäminen</li>
        </ul>
        <h4>Tukipisteet:</h4>
        <ul>
          <li>PSOAS asiakaspalvelu (asukasasiat, huolto)</li>
        </ul>
        <h4>Ratkaisut:</h4>
        <ul>
          <li>Ota yhteyttä PSOASiin ajoissa, jos avainten nouto voi olla ongelma</li>
          <li>Huomauta vioista huoltoon heti kirjallisesti</li>
          <li>Tutustu alueen karttaan etukäteen, jotta löydät esim. lähimmän kaupan/apteekin tarvittaessa</li>
        </ul>
      </>
    )
  }
];

export default function Polku() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex(index - 1);
  const handleNext = () => setIndex(index + 1);

  const slide = slides[index];

  return (
    <div className="polku-wrapper">
      <h2>{slide.title} {slide.category && `– ${slide.category}`}</h2>
      <div className="slide">
        <div className="image-container">
          <img src={slide.image} alt={slide.category || slide.title} />
        </div>
        <div className="text-container">
          {slide.content}
        </div>
      </div>
      <div className="navigation">
        <button onClick={handlePrev} disabled={index === 0}>&larr;</button>
        <span>{index + 1} / {slides.length}</span>
        <button onClick={handleNext} disabled={index === slides.length - 1}>&rarr;</button>
      </div>
    </div>
  );
}

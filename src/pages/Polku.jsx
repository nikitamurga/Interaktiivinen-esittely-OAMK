// Tämä sivu esittää "opiskelijan polun" vaihe vaiheelta.
// Jokainen slide sisältää kuvia ja tekstiä.
import React, { useState } from 'react';
import './Polku.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Taulukko dia-sisällöistä. Tästä on helppo lisätä tai muokata vaiheita.
const slides = [
  {
    title: 'Saapuminen Ouluun',
    category: 'Lentokenttä',
    images: [
      'oulu_airport_outdoor_2.jpg',
      'lentokenttä ulkona pysäkki.JPG',
      'airport_kartta_EN.png'
    ],
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
          <li>Matka keskustaan/OAMK:lle ~30/~50 min</li>
          <li>Lippu maksaa 2,60 € lähimaksulla tai 5,00 € käteisellä</li>
        </ul>
        <h3>Huomio!</h3>
        <ul>
          <li>Bussit voivat olla etuajassa tai myöhässä</li>
          <li>
            Seuraa liikennettä:{' '}
            <a href="https://osl.fi" target="_blank" rel="noreferrer">
              osl.fi
            </a>{' '}
            tai OSL-sovellus
          </li>
        </ul>
        <h3>Taksi</h3>
        <ul>
          <li>Hinta lentokentältä → keskustaan/OAMK:lle: n. 35–45 €</li>
          <li>
            <strong>Suositus:</strong> OTAXI
          </li>
          <li>Myös Bolt ja muut sovellukset toimivat</li>
          <li>Kesto: 15–20 min</li>
        </ul>
      </>
    )
  },
{
  title: 'Saapuminen Ouluun',
  category: 'Rautatieasema',
  images: [
    'rautatieasema_ulkona.jpg',
    'Rautatieasema_kartta.jpg'
  ],
  content: (
    <>
      <h3>Etäisyys</h3>
      <ul>
        <li>Rautatieasema → Keskusta ~400 m (5 min)</li>
        <li>Rautatieasema → OAMK Linnanmaa ~6,5 km</li>
      </ul>

      <h3>Junamatkat ja liput</h3>
      <ul>
        <li>
          Osta liput:{' '}
          <a href="https://www.vr.fi" target="_blank" rel="noreferrer">
            vr.fi
          </a>
        </li>
        <li>
          Opiskelija-alennus, kun sinulla on VR:n hyväksymä opiskelijakortti
        </li>
      </ul>

      <h3>Junatiedot ja reaaliaikainen seuranta</h3>
      <ul>
        <li>
          Seuraa junien myöhästymisiä ja raiteen vaihtoja VR-sovelluksessa
        </li>
        <li>
          Katso reaaliaikaiset aikataulut: {' '}
          <a href="https://www.vr.fi/vr-matkalla" target="_blank" rel="noreferrer">
            api.vr.fi
          </a>
        </li>
      </ul>

      <h3>Bussiyhteydet</h3>
      <ul>
        <li>Bussit 1, 2, 5, 8, 15 OAMK:lle</li>
        <li>Lippu maksaa 2,60 € lähimaksulla tai 5,00 € käteisellä</li>
        <li>Matka kestää n. 25 min</li>
      </ul>

      <h3>Taksi</h3>
      <ul>
        <li>Taksitolppa aseman edessä</li>
        <li>
          <strong>Suositus:</strong> OTAXI
        </li>
        <li>Hinta ~15–20 €</li>
        <li>Kesto ~10–15 min</li>
      </ul>
    </>
  )
},
  {
    title: 'Saapuminen Ouluun',
    category: 'Linja-autoasema',
    images: [
      'Linja-autoasema_ulkona.jpg',
      'Linja-autoasema_pysäkki.JPG'
    ],
    content: (
      <>
        <h3>Etäisyys</h3>
        <ul>
          <li>Linja-autoasema → Keskusta ~600 m (7 min)</li>
          <li>Linja-autoasema → OAMK Linnanmaa ~6 km</li>
        </ul>
        <h3>Bussiyhteydet</h3>
        <ul>
          <li>Bussit 1, 2, 5, 8, 9</li>
          <li>Lippu maksaa 2,60 € lähimaksulla tai 5,00 € käteisellä</li>
          <li>Matka kestää n. 25 min</li>
        </ul>
        <h3>Taksi</h3>
        <ul>
          <li>Taksitolppa aseman edessä</li>
          <li>
            <strong>Suositus:</strong> OTAXI
          </li>
          <li>Hinta ~15–20 €</li>
          <li>Kesto ~10–15 min</li>
        </ul>
      </>
    )
  },
  {
  title: 'Saapuminen opiskelija-asuntoon',
  category: '',
  images: [
    'PSOAS 1.JPG',
    'PSOAS 2.JPG',
    'PSOAS 3.JPG',
    'PSOAS 4.JPG'
  ],
  content: (
    <>
      <h3>Asunnon hakeminen</h3>
      <ul>
        <li>
          Vaihtoehdot:{' '}
          <a href="https://www.psoas.fi" target="_blank" rel="noreferrer">
            PSOAS
          </a>
          , Vuokraovi, Oikotie, yksityiset vuokranantajat…
        </li>
      </ul>

      <h3>Avainten nouto</h3>
      <ul>
        <li>
          Avaimet noudetaan PSOASin ohjeiden mukaan</li>
        <li>PSOAS Lounge: ma–pe 9–16</li>
        <li>Osoite: Yliopistokatu 29, 90130 Oulu</li>
        <li>Puhelin: +358 44 715 5000</li>
        <li>
          Sähköposti:{' '}
          <a href="mailto:asuminen@psoas.fi">asuminen@psoas.fi</a>
        </li>
      </ul>

      <h3>Huoneistoon muuttaminen</h3>
      <ul>
        <li>Tarkista asunnon kunto saapuessasi</li>
        <li>Ilmoita vioista heti PSOASin huoltoon</li>
      </ul>

      <h3>Asumistuki & Opintotuki</h3>
      <ul>
        <li>
          <strong>Kela-asumistuki:</strong>{' '}
          <a
            href="https://www.kela.fi/asumistuki"
            target="_blank"
            rel="noreferrer"
          >
            kela.fi/asumistuki
          </a>
        </li>
        <li>
          <strong>Opintotuki:</strong>{' '}
          <a
            href="https://www.kela.fi/opintotuki"
            target="_blank"
            rel="noreferrer"
          >
            kela.fi/opintotuki
          </a>
        </li>
      </ul>
    </>
  )
},
{
  title: 'Ensimmäinen vierailu OAMK Linnanmaan kampukselle',
  category: '',
  images: [
    'OAMK-Linnanmaa_ulkona 2x.jpg',
    'OAMK-Linnanmaa_ulkona.jpg',
    'OAMK_2024_Linnamaan_koko_kampus_241011.png',
    'Campus_ruokala.webp',
    'info.JPG',
    'shop.JPG',
    'käytävä 4.JPG',
    'käytävä 6.JPG',
    'ruokala 1.JPG',
    'kirjasto 4.JPG',
    'käytävä 3.JPG',
    'käytävä 1.JPG'
  ],
  content: (
    <>
      <h3>Saapuminen kampukselle</h3>
      <ul>
        <li>OAMK sijaitsee Linnanmaalla (Yliopistokatu 9)</li>
        <li>Varaa aikaa tutustumiseen</li>
        <li>Info-piste pääsisäänkäynnin läheisyydessä</li>
      </ul>

      <h3>Tilat ja palvelut</h3>
      <ul>
        <li>Ravintolat, kahvilat ja kaupat kampuksella</li>
        <li>
          Käytä{' '}
          <a href="https://www.mazemap.com/" target="_blank" rel="noreferrer">
            MazeMap
          </a>{' '}
          ja{' '}
          <a href="https://www.tuudo.fi/" target="_blank" rel="noreferrer">
            Tuudo
          </a>
        </li>
        <li>
          <a
            href="https://www.oulu.fi/fi/yliopisto/kirjasto"
            target="_blank"
            rel="noreferrer"
          >
            Oulun yliopiston kirjasto
          </a>
        </li>
        <li>
          <a
            href="https://ict.oulu.fi/opiskelijoille/"
            target="_blank"
            rel="noreferrer"
          >
            ICT-ohjeet OAMK:n opiskelijoille
          </a>
        </li>
      </ul>

      <h3>Virtuaalikierros</h3>
      <div className="video-container" style={{ marginTop: '1rem' }}>
        <iframe
          src="https://www.youtube.com/embed/iKrJxxX6ucA"
          title="OAMK Linnanmaan virtuaalikierros"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
},
  {
    title: 'Virallisten asioiden hoitaminen',
    category: '',
    images: [
      'Kela.JPG',
      'DVV.JPG',
      'YTHS.JPG'
    ],
    content: (
      <>
        <h3>Kelan tuet</h3>
        <ul>
          <li>
            Ohjeita ja neuvoja:{' '}
            <a href="https://www.kela.fi/opiskelijat" target="_blank" rel="noreferrer">
              kela.fi/opiskelijat
            </a>
          </li>
        </ul>
        <h3>Väestörekisteri</h3>
        <ul>
          <li>
            Muuttoilmoitus:{' '}
            <a href="https://dvv.fi/muutto" target="_blank" rel="noreferrer">
              dvv.fi/muutto
            </a>
          </li>
        </ul>
        <h3>Terveyspalvelut</h3>
        <ul>
          <li>
            YTHS:<br/>
            <a href="https://www.yths.fi" target="_blank" rel="noreferrer">
              yths.fi
            </a>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Opiskelun aloittaminen',
    category: '',
    images: [
      'tilat 2.JPG',
      'tilat1.jpg',
      'tilat 3.JPG',
      'labra 2.webp',
      'labra 1.webp',
      'käytävä TIK 3.JPG',
      'keittiö 2.JPG',
      'käytävä TIK 1.JPG'
    ],
    content: (
      <>
        <h3>Ensimmäiset päivät</h3>
        <ul>
          <li>Älä epäröi kysyä apua tutor-opiskelijalta tai opettajalta</li>
        </ul>
        <h3>Opiskelun työkalut</h3>
        <ul>
          <li><strong>Moodle:</strong> tehtävät ja materiaali</li>
          <li><strong>Peppi:</strong> opintorekisteri</li>
          <li><strong>Tuudo:</strong> aikataulut ja kampuskartta</li>
          <li><strong>Microsoft 365:</strong> Office &amp; Teams</li>
        </ul>
      </>
    )
  },
  {
    title: 'Kaupunkiin tutustuminen',
    category: '',
    images: [
      'Oulu_Panorama-.jpg',
      'Oulu_2-1.jpg',
      'Policeman.avif',
      'Oulun-tuomiokirkko1920x1440-general.webp',
      'Finnkino_Plaza_Oulu_.jpg',
      'kauppakeskus_valkea.webp',
      'Oulun-Ideapark.jpg',
      'UniMove.JPG'
    ],
    content: (
      <>
        <h3>Ensiaskeleet</h3>
        <ul>
          <li>Hyödynnä OSL ja Google Maps</li>
          <li>
            <a href="https://www.ouka.fi/asiakasohjaus-ja-neuvonta" target="_blank" rel="noreferrer">
              Oulu10
            </a>
          </li>
        </ul>
        <h3>Liikunta ja tapahtumat</h3>
        <ul>
          <li>
            <a href="https://unimoveoulu.fi/" target="_blank" rel="noreferrer">
              Unimove
            </a>
          </li>
          <li>
            Seuraa kaupungin tapahtumakalenteria
          </li>
        </ul>
        <h3>Interaktiivinen kartta</h3>
        <ul>
          <li>
            <a href="/#/kartta" target="_blank">
              Avaa kartta
            </a>
          </li>
        </ul>
      </>
    )
  },
{
  title: 'Sosiaalinen verkostoituminen ja arjen asettuminen',
  category: '',
  images: [
    'oamk_kyltti-768x517.jpg',
    'OSAKO 1.jpg',
    'kv-jengi-768x512.jpg',
    'oamk_logo_outsidewebp.webp',
  ],
  content: (
    <>
      <h3>Opiskelijayhteisö</h3>
      <ul>
        <li>
          OSAKO:
          {' '}
          <a href="https://osakoweb.fi" target="_blank" rel="noreferrer">
            osakoweb.fi
          </a>
          ,&nbsp;
          <a href="https://www.facebook.com/studentunionosako/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          ,&nbsp;
          <a href="https://www.instagram.com/osakoweb/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
      </ul>

      <h3>Tapahtumat ja edut</h3>
      <ul>
        <li>
          Seuraa opiskelijatapahtumia:
          {' '}
          <a href="https://www.kide.app" target="_blank" rel="noreferrer">
            Kide.app
          </a>
          ,&nbsp;
          <a href="https://www.frank.fi" target="_blank" rel="noreferrer">
            Frank.fi
          </a>
        </li>
      </ul>

      <h3>Mentorointi & tutorointi</h3>
      <ul>
        <li>
          Tutor-ohjelma ja opiskelijakaverit:
          {' '}
          <a href="https://www.oamk.fi/opiskelu/tutorointi" target="_blank" rel="noreferrer">
            Lisätietoja
          </a>
        </li>
        <li>
          LinkedIn-verkostoituminen OAMK-ryhmässä:
          {' '}
          <a href="https://www.linkedin.com/groups/123456/" target="_blank" rel="noreferrer">
            LinkedIn-ryhmä
          </a>
        </li>
      </ul>
    </>
  )
},
];

// Slider-komponentti joka näyttää yhden vaiheen kerrallaan
export default function Polku() {
  // Nykyisen dian indeksi
  const [index, setIndex] = useState(0);
  // Datanäkymä nykyisestä diasta
  const slide = slides[index];

  // Kuvatiedostojen polku utils
  const getSrc = (file) =>
    `${import.meta.env.BASE_URL}photos/${encodeURI(file)}`;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setIndex((i) => Math.min(i + 1, slides.length - 1));

  // Rakennetaan karuselli ja navigointipainikkeet
  return (
    <div className="polku-wrapper">
      <h2>
        {slide.title}
        {slide.category && ` – ${slide.category}`}
      </h2>

      <div className="slide">
        <div className="image-container">
          {slide.images ? (
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {slide.images.map((file, i) => (
                <div key={i}>
                  <img
                    src={getSrc(file)}
                    alt={`${slide.category || slide.title} ${i + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          ) : null}
        </div>

        <div className="text-container">{slide.content}</div>
      </div>

      <div className="navigation">
        <button onClick={prev} disabled={index === 0}>
          ←
        </button>
        <span>
          {index + 1} / {slides.length}
        </span>
        <button
          onClick={next}
          disabled={index === slides.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
import { useState } from 'react';
import './Polku.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    title: 'Saapuminen Ouluun',
    category: 'Lentokenttä',
    images: [
      '/public/photos/oulu_airport_outdoor_2.jpg',
      '/public/photos/lentokenttä ulkona pysäkki.JPG',
      '/public/photos/airport_kartta_EN.png'
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
          <li>Seuraa liikennettä: <a href="https://osl.fi" target="_blank">osl.fi</a> tai OSL-sovellus</li>
        </ul>
        <h3>Taksi</h3>
        <ul>
          <li>Hinta lentokentältä → keskustaan/OAMK:lle: n. 35/45 €</li>
          <li><strong>Suositus:</strong> käytä OTAXI-palvelua (luotettava ja virallinen)</li>
          <li>Myös Bolt ja muut sovelluspohjaiset taksit toimivat Oulussa</li>
          <li>Kesto: 15–20 min</li>
        </ul>
      </>
    )
  },
  {
    title: 'Saapuminen Ouluun',
    category: 'Rautatieasema',
    images: [
      '/public/photos/rautatieasema_ulkona.jpg',
      '/public/photos/Rautatieasema_kartta.jpg',
    ],
    content: (
      <>
        <h3>Etäisyys</h3>
        <ul>
          <li>Rautatieasema → Keskusta ~400 m (kävellen 5 min)</li>
          <li>Rautatieasema → OAMK Linnanmaa ~6,5 km</li>
        </ul>
        <h3>Junamatkat ja liput</h3>
        <ul>
          <li>Junaliput voi ostaa helposti osoitteesta <a href="https://vr.fi" target="_blank">vr.fi</a> tai VR:n mobiilisovelluksesta</li>
          <li>Opiskelija-alennuslippuja saa, jos sinulla on VR:n hyväksymä opiskelijakortti – <a href="https://www.vr.fi/alennusta-junalipuista/opiskelija-alennus" target="_blank">Lue lisää</a></li>
        </ul>
        <h3>Bussiyhteydet</h3>
        <ul>
          <li>Bussit OAMK:lle: 1, 2, 5, 8, 15</li>
          <li>Pysäkit sijaitsevat aseman edessä ja viereisellä kadulla</li>
          <li>Lippu maksaa 2,60 € lähimaksulla tai 5,00 € käteisellä</li>
          <li>Matka OAMK:lle kestää n. ~25 minuuttia</li>
        </ul>
        <h3>Huomio!</h3>
        <ul>
          <li>Jos saavut myöhään, bussivuoroja voi olla vähemmän</li>
          <li>Katso reitit ja aikataulut: <a href="https://osl.fi" target="_blank">osl.fi</a> tai OSL-sovellus</li>
        </ul>
        <h3>Taksi</h3>
        <ul>
          <li>Taksitolppa sijaitsee suoraan aseman edessä</li>
          <li><strong>Suositus:</strong> käytä OTAXI-palvelua (luotettava ja virallinen)</li>
          <li>Myös Bolt ja muut sovelluspohjaiset taksit toimivat Oulussa</li>
          <li>Hinta OAMK:lle n. 15–20 €</li>
          <li>Kesto: 10–15 minuuttia</li>
        </ul>
      </>
    )
  },
  {
    title: 'Saapuminen Ouluun',
    category: 'Linja-autoasema',
    images: [
      '/public/photos/Linja-autoasema_ulkona.jpg',
      '/public/photos/Linja-autoasema_pysäkki.JPG',
    ],
    content: (
      <>
        <h3>Etäisyys</h3>
        <ul>
          <li>Linja-autoasema → Keskusta ~600 m (kävellen n. 7 min)</li>
          <li>Linja-autoasema → OAMK Linnanmaa ~6 km</li>
        </ul>

        <h3>Bussiyhteydet</h3>
        <ul>
          <li>Bussit OAMK:lle: 1, 2, 5, 8, 9</li>
          <li>Pysäkit löytyvät aivan aseman vierestä</li>
          <li>Lippu maksaa 2,60 € lähimaksulla tai 5,00 € käteisellä</li>
          <li>Matka OAMK:lle kestää n. ~25 minuuttia</li>
        </ul>

        <h3>Huomio!</h3>
        <ul>
          <li>Myöhään illalla tai viikonloppuna bussivuoroja on vähemmän</li>
          <li>Katso reitit ja aikataulut: <a href="https://osl.fi" target="_blank">osl.fi</a> tai OSL-sovellus</li>
        </ul>

        <h3>Taksipalvelut</h3>
        <ul>
          <li>Taksitolppa sijaitsee aseman edessä</li>
          <li><strong>Suositus:</strong> käytä OTAXI-palvelua (virallinen taksi Oulussa)</li>
          <li>Myös Bolt ja muut sovelluspohjaiset taksit toimivat</li>
          <li>Hinta OAMK:lle n. 15–20 €</li>
          <li>Kesto: 10–15 minuuttia</li>
        </ul>
      </>
    )
  },
  {
    title: 'Saapuminen opiskelija-asuntoon',
    category: '',
    images: [
      '/public/photos/PSOAS 1.JPG',
      '/public/photos/PSOAS 2.JPG',
      '/public/photos/PSOAS 3.JPG',
      '/public/photos/PSOAS 4.JPG'
    ],
    content: (
      <>
        <h3>Asunnon hakeminen</h3>
        <ul>
          <li>Hae asuntoa ajoissa – erityisesti syksyllä kysyntä on suurta</li>
          <li>Vaihtoehtoja: <a href="https://www.psoas.fi" target="_blank">PSOAS</a>, <a href="https://www.vuokraovi.com" target="_blank">Vuokraovi</a>, <a href="https://www.oikotie.fi" target="_blank">Oikotie</a>, yksityiset vuokranantajat ja puskaradio-ryhmät</li>
        </ul>
        <h3>Avainten nouto</h3>
        <ul>
          <li>Avaimet noudetaan PSOASin ohjeiden mukaan – tarkista aikataulut ajoissa</li>
          <li>Myöhäinen saapuminen tai viikonloppu voi aiheuttaa haasteita – sovi ennakkoon</li>
        </ul>
        <h3>Huoneistoon muuttaminen</h3>
        <ul>
          <li>Tarkista asunnon kunto saapuessasi</li>
          <li>Ilmoita vioista tai puutteista heti PSOASin huoltoon (mielellään kirjallisesti)</li>
          <li>Tutustu myös talon sääntöihin ja käytäviin palveluihin (jätehuolto, pesutupa, netti)</li>
        </ul>
        <h3>Lähiympäristö ja arjen järjestelyt</h3>
        <ul>
          <li>Etsi lähimmät ruokakaupat, apteekit ja pysäkit etukäteen</li>
          <li>Kysy neuvoja tutor-opiskelijalta tai PSOASin asiakaspalvelusta</li>
          <li>Suunnittele reitti kampukselle jo etukäteen (esim. <a href="https://osl.fi" target="_blank">osl.fi</a>)</li>
        </ul>
      </>
    )
  },
  {
    title: 'Ensimmäinen vierailu OAMK Linnanmaan kampukselle',
    category: '',
    images: [
      '/public/photos/OAMK-Linnanmaa_ulkona.jpg',
      '/public/photos/OAMK-Linnanmaa_ulkona 2x.jpg',
      '/public/photos/Campus_ruokala.webp',
      '/public/photos/info.JPG',
      '/public/photos/shop.JPG',
      '/public/photos/käytävä 4.JPG',
      '/public/photos/käytävä 6.JPG',
      '/public/photos/ruokala 1.JPG',
      '/public/photos/kirjasto 4.JPG',
      '/public/photos/käytävä 3.JPG',
      '/public/photos/käytävä 1.JPG',
    ],
    content: (
      <>
        <h3>Saapuminen kampukselle</h3>
        <ul>
          <li>OAMK sijaitsee Linnanmaalla, osoitteessa Yliopistokatu 9</li>
          <li>Saapumisen jälkeen kampus voi tuntua isolta — varaa aikaa tutustumiseen</li>
          <li>Pääsisäänkäynnin läheisyydessä on OAMK:n info-piste, josta voi kysyä neuvoa</li>
        </ul>
        <h3>Tilat ja palvelut</h3>
        <ul>
          <li>Kampuksella on paljon ravintoloita, kahviloita ja jopa kauppoja</li>
          <li>Kaikki tilat löytyvät helposti sovelluksilla <a href="https://www.mazemap.com/" target="_blank">MazeMap</a> ja <a href="https://www.tuudo.fi/" target="_blank">Tuudo</a></li>
          <li>Tuudosta löytyy mm. lukujärjestys, kampuskartta, ilmoittautumiset ja muut.</li>
          <li><a href="https://www.oulu.fi/fi/yliopisto/kirjasto" target="_blank">Oulun yliopiston kirjasto</a></li>
          <li><a href="https://ict.oulu.fi/opiskelijoille/" target="_blank">ict.oulu.fi/opiskelijoille</a> – OAMK:n tunnukset, verkot, tulostus ja muut IT-ohjeet</li>
        </ul>
      </>
    )
  }
  ,
  {
    title: 'Virallisten asioiden hoitaminen',
    category: '',
    images: [
      'public/photos/Kela.JPG',
      '/public/photos/DVV.JPG',
      '/public/photos/YTHS.JPG'
    ],
    content: (
      <>
        <h3>Kelan tuet</h3>
        <ul>
          <li>Voit hakea opintotukea ja asumistukea Kelalta</li>
          <li>Ohjeita ja neuvoja saat OAMK:n opiskelijapalveluista ja Kelan verkkosivuilta</li>
          <li><a href="https://www.kela.fi/opiskelijat" target="_blank">kela.fi/opiskelijat</a></li>
        </ul>

        <h3>Väestörekisteri ja muut viranomaiset</h3>
        <ul>
          <li>Jos muutat Ouluun toiselta paikkakunnalta tai ulkomailta, ilmoittaudu Digi- ja väestötietovirastoon</li>
          <li>Tarvitset virallisen osoitteen mm. Kelaa ja opiskelijaetujen saantia varten</li>
          <li><a href="https://dvv.fi/muutto" target="_blank">dvv.fi/muutto</a></li>
        </ul>

        <h3>Terveyspalvelut</h3>
        <ul>
          <li>Ylioppilaiden terveydenhoitosäätiö (YTHS) tarjoaa perusterveydenhuoltoa opiskelijoille</li>
          <li>Muista maksaa YTHS-maksu lukukauden alussa</li>
          <li><a href="https://www.yths.fi" target="_blank">yths.fi</a></li>
        </ul>
      </>
    )
  },
  {
    title: 'Opiskelun aloittaminen',
    category: '',
    images: [
      '/public/photos/tilat 2.JPG',
      '/public/photos/tilat1.jpg',
      '/public/photos/tilat 3.JPG',
      '/public/photos/labra 2.webp',
      '/public/photos/labra 1.webp',
      '/public/photos/käytävä TIK 3.JPG',
      '/public/photos/keittiö 2.JPG',
      '/public/photos/käytävä TIK 1.JPG'
    ],
    content: (
      <>
        <h3>Ensimmäiset päivät</h3>
        <ul>
          <li>Luentojen ja ryhmätöiden lisäksi tutustut käytäntöihin ja palveluihin</li>
          <li>Älä epäröi kysyä apua tutor-opiskelijalta tai opettajalta</li>
        </ul>

        <h3>Opiskelun työkalut</h3>
        <ul>
          <li><strong>Moodle:</strong> kurssimateriaalit ja tehtävät</li>
          <li><strong>Peppi:</strong> opintorekisteri</li>
          <li><strong>Tuudo:</strong> mobiilisovellus aikatauluihin, ruokaloihin, kampuskarttaan ja muuhun</li>
          <li><strong>Microsoft 365:</strong> sähköposti, Teams, Word, Excel jne.</li>
          <li><a href="https://oamk.fi/opiskelu/" target="_blank">oamk.fi/opiskelu</a></li>
        </ul>

        <h3>Opintojen eteneminen</h3>
        <ul>
          <li>Seuraa opintopisteitä Pepissä</li>
          <li>Voit hakea hyväksilukuja aiemmista opinnoista</li>
          <li>Tutustu myös ristiinopiskelun ja Courseran mahdollisuuksiin</li>
        </ul>
      </>
    )
  },
  {
    title: 'Kaupunkiin tutustuminen',
    category: '',
    images: [
      '/public/photos/Oulu_Panorama-.jpg',
      '/public/photos/Oulu_2-1.jpg',
      '/public/photos/Policeman.avif',
      '/public/photos/Oulun-tuomiokirkko1920x1440-general.webp',
      '/public/photos/Finnkino_Plaza_Oulu_.jpg',
      '/public/photos/kauppakeskus_valkea.webp',
      '/public/photos/Oulun-Ideapark.jpg',
      '/public/photos/UniMove.JPG',
    ],
    content: (
      <>
        <h3>Ensiaskeleet uudessa kaupungissa</h3>
        <ul>
          <li>Tutustu lähialueesi ruokakauppoihin, apteekkeihin ja muihin arjen palveluihin</li>
          <li>Hyödynnä sovelluksia kuten <a href="https://osl.fi" target="_blank"><strong>OSL</strong></a> (julkinen liikenne) ja <strong>Google Maps</strong> liikkumiseen</li>
          <li><a href="https://www.ouka.fi/asiakasohjaus-ja-neuvonta" target="_blank"><strong>Oulu10-palvelupiste</strong></a> keskustassa neuvoo viranomaisasioissa ja palveluissa</li>
          <li>Paikallinen kulttuuri ja tapahtumat tekevät arjesta viihtyisämpää – seuraa esimerkiksi <a href="https://tapahtumat.munoulu.fi/fi-FI" target="_blank"><strong>kaupungin tapahtumakalenteria</strong></a></li>
        </ul>

        <h3>Liikunta ja hyvinvointi</h3>
        <ul>
          <li>OAMK:n liikuntapalvelut ja <a href="https://unimoveoulu.fi/" target="_blank"><strong>Unimove</strong></a> tarjoavat monipuolista tekemistä</li>
          <li>Tutustu kampuksen ja keskustan liikuntamahdollisuuksiin jo alussa</li>
        </ul>

        <h3>Interaktiivinen kartta</h3>
        <ul>
          <li>Katso tärkeimmät paikat, kuten kampus, palvelut ja vapaa-ajan kohteet kartalla</li>
          <li><a href="/kartta" target="_blank">Avaa interaktiivinen kartta</a></li>
        </ul>
      </>
    )
  },
  {
    title: 'Sosiaalinen verkostoituminen ja arjen asettuminen',
    category: '',
    image: '/images/sosiaalinen.jpg',
    content: (
      <>
        <h3>Opiskelijayhteisöön liittyminen</h3>
        <ul>
          <li>Osallistu tapahtumiin ja ryhmätoimintaan – ne auttavat löytämään kavereita</li>
          <li>Tutustu OAMK:n opiskelijajärjestöihin ja kerhoihin (esim. <strong>OSAKO</strong>, alayhdistykset)</li>
          <li><a href="https://osakoweb.fi/" target="_blank">osako.fi</a></li>
        </ul>

        <h3>Tapahtumat ja edut</h3>
        <ul>
          <li>Seuraa opiskelijatapahtumia <a href="https://kide.app" target="_blank">Kide.app</a>:ssa</li>
          <li>Tilaa digitaalinen opiskelijakortti ja hyödynnä alennuksia: <a href="https://www.frank.fi" target="_blank">Frank.fi</a></li>
        </ul>

        <h3>Arki ja hyvinvointi</h3>
        <ul>
          <li>Rutiinien löytäminen (nukkuminen, syöminen, liikunta) auttaa jaksamaan opinnoissa</li>
          <li>Tutor-opiskelijat ja henkilökunta tukevat alkuvaiheessa</li>
          <li>Jos tunnet yksinäisyyttä tai kuormitusta, apua on saatavilla – älä jää yksin</li>
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
        {slide.images ? (
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {slide.images.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`Slide ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        ) : (
          <img src={slide.image} alt={slide.category || slide.title} />
        )}
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

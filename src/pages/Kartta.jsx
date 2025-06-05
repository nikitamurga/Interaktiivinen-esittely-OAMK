import React, { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './cluster.css';

import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';


function MapCleanup() {
  const map = useMap();
  useEffect(() => {
    return () => {
      const c = map.getContainer();
      map.remove();
      if (c && c._leaflet_id) c._leaflet_id = null;
    };
  }, [map]);
  return null;
}

const makeIcon = (filename) =>
  new L.Icon({
    iconUrl: `${import.meta.env.BASE_URL}${filename}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30],
  });

const LOCATIONS = [

  // Kauppakeskukset
  { name: 'Kauppakeskus Ideapark', position: [65.0765618, 25.4458810], icon: 'shopping-bag.svg', type: 'shopping', url: 'https://www.oulu.ideapark.fi/', media: { type: 'image', src: 'photos/Oulun-Ideapark.jpg', alt: 'Ideapark ulkoa' } },
  { name: 'Kauppakeskus Valkea', position: [65.0116215, 25.4725732], icon: 'shopping-bag.svg', type: 'shopping', url: 'https://www.kauppakeskusvalkea.fi', media: { type: 'image', src: 'photos/kauppakeskus_valkea.webp', alt: 'Valkea ulkoa' } },

  // Kulttuuri
  { name: 'Elokuvateatteri Star', position: [65.0246176, 25.4827237], icon: 'clapperboard.svg', type: 'vapaa-aika', url: 'https://www.elokuvateatteristar.fi/', media: { type: 'image', src: 'photos/Elokuvateatteri Star.jpeg', alt: 'Elokuvateatteri Star'} },
  { name: 'Finnkino Plaza', position: [65.0111442, 25.4654882], icon: 'clapperboard.svg', type: 'vapaa-aika', url: 'https://www.finnkino.fi/ohjelmisto/plaza-oulu', media: { type: 'image', src: 'photos/Finnkino_Plaza_Oulu_.jpg', alt: 'Finnkino'} },
  { name: 'Kulttuuritalo Valve', position: [65.01413350333846, 25.47054100849657], icon: 'art.svg', type: 'vapaa-aika', url: 'https://www.kulttuurivalve.fi/', media: { type: 'image', src: 'photos/Valve.jpg', alt: 'Valve'} },
  { name: 'Oulun Sinfonia (Madetojan sali)', position: [65.00319041352526, 25.480251494916185], icon: 'music.svg', type: 'vapaa-aika', url: 'https://www.oulunmusiikkikeskus.fi/madetojan-sali.html', media: { type: 'image', src: 'photos/Madetojan_sali.jpg', alt: 'Madetojan_sali'} },
  { name: 'Oulun taidemuseo', position: [65.01888092939876, 25.482604217259727], icon: 'art.svg', type: 'vapaa-aika', url: 'https://ouluntaidemuseo.fi/', media: { type: 'image', src: 'photos/oulun-taidemuseo.jpg', alt: 'oulun-taidemuseo'} },
  { name: 'Oulun teatteri', position: [65.0145481, 25.4625148], icon: 'drama.svg', type: 'vapaa-aika', url: 'https://oulunteatteri.fi/', media: { type: 'image', src: 'photos/Oulun teatteri.avif', alt: 'Oulun teatteri'} },
  { name: 'Pekurin kirjasto', position: [65.0118443, 25.4684133], icon: 'book-open-text.svg', type: 'vapaa-aika', url: 'https://outi.finna.fi/OrganisationInfo/Home#85365', media: { type: 'image', src: 'photos/Pekurin-kirjasto.jpg', alt: 'Pekurin kirjasto'} },
  { name: 'Pohjois-Pohjanmaan museo', position: [65.01771226834494, 25.475426623340393], icon: 'museum.svg', type: 'vapaa-aika', url: 'https://pohjoispohjanmaanmuseo.fi/', media: { type: 'image', src: 'photos/Pohjois-Pohjanmaan museo.avif', alt: 'Pohjois-Pohjanmaan museo'} },
  { name: 'Tiedekeskus Tietomaa', position: [65.01831770672858, 25.485210034411743], icon: 'atom.svg', type: 'vapaa-aika', url: 'https://tietomaa.fi/', media: { type: 'image', src: 'photos/Tietomaa.jpg', alt: 'Tietomaa'} },

  // Liikenne
  { name: 'Linja-autoasema', position: [65.0092342, 25.4834660], icon: 'bus.svg', type: 'transport', url: 'https://www.osl.fi/', media: { type: 'image', src: 'photos/Oulu_Bus_Station.jpg', alt: 'Oulu linja-autoasema'} },
  { name: 'Oulun lentoasema', position: [64.9287213, 25.3739536], icon: 'plane.svg', type: 'transport', url: 'https://www.finavia.fi/fi/lentoasemat/oulu', media: { type: 'image', src: 'photos/oulu_airport_outdoor_2.jpg', alt: 'Oulu Airport'} },
  { name: 'Oulun rautatieasema', position: [65.0114002, 25.4839354], icon: 'train-front.svg', type: 'transport', url: 'https://www.vr.fi', media: { type: 'image', src: 'photos/rautatieasema_ulkona.jpg', alt: 'Oulu rautatieasema'} },

  // Iltamenot
  { name: '1bar', position: [65.01270616834637, 25.467423240495393], icon: 'beer.svg', type: 'iltamenot', url: 'https://1bar.fi/', media: { type: 'image', src: 'photos/1bar.webp', alt: '1bar'} },
  { name: '45 Special', position: [65.0106654092159, 25.46972761714795], icon: 'party.svg', type: 'iltamenot', url: 'https://www.45special.com/', media: { type: 'image', src: 'photos/45 Special.jpg', alt: '45 Special'} },
  { name: 'Café Kuluma', position: [65.01286825649956, 25.466783525950273], icon: 'beer.svg', type: 'iltamenot', url: 'https://kuluma.fi/', media: { type: 'image', src: 'photos/Café Kuluma.jpg', alt: 'Café Kuluma'} },
  { name: 'Cocktail Company', position: [65.01342017027312, 25.47365196813835], icon: 'cocktail.svg', type: 'iltamenot', url: 'https://www.cocktailcompany.fi/', media: { type: 'image', src: 'photos/Cocktail-Company.jpg', alt: 'Cocktail Company'} },
  { name: 'Heidi’s Bier Bar', position: [65.01113656140794, 25.468959923432433], icon: 'beer.svg', type: 'iltamenot', url: 'https://heidisbierbar.fi/oulu', media: { type: 'image', src: 'photos/Heidi’s Bier Bar.jpg', alt: 'Heidi’s Bier Bar'} },
  { name: 'Ilona', position: [65.0109571270327, 25.466692418626184], icon: 'party.svg', type: 'iltamenot', url: 'https://www.ilonaoulu.fi/', media: { type: 'image', src: 'photos/Ilona.jpg', alt: 'Ilona'} },
  { name: 'Kaarlenholvi', position: [65.01270244890975, 25.466575988910137], icon: 'beer.svg', type: 'iltamenot', url: 'https://jumpru.fi/', media: { type: 'image', src: 'photos/Kaarlenholvi.avif', alt: 'Kaarlenholvi'} },
  { name: 'Mango Discobar', position: [65.01011692824626, 25.47139371816021], icon: 'party.svg', type: 'iltamenot', url: 'https://mangodiscobar.fi/', media: { type: 'image', src: 'photos/Mango Discobar.jpg', alt: 'Mango Discobar'} },
  { name: 'Snooker Time', position: [65.0117915510633, 25.481710896287783], icon: 'snooker.svg', type: 'iltamenot', url: 'https://snookertime.net/', media: { type: 'image', src: 'photos/Snooker Time.avif', alt: 'Snooker Time'} },
  { name: 'St. Michael', position: [65.01284999893767, 25.47514805982332], icon: 'beer.svg', type: 'iltamenot', url: 'https://www.stmichael.fi/', media: { type: 'image', src: 'photos/St. Michael.jpg', alt: 'St. Michael'} },
  { name: 'Teerenpeli', position: [65.01226883166746, 25.46784034250793], icon: 'beer.svg', type: 'iltamenot', url: 'https://www.teerenpeli.com/fi/Ravintolat/Oulu-Teerenpeli', media: { type: 'image', src: 'photos/Teerenpeli.jpg', alt: 'Teerenpeli'} },

  // OAMK
  { name: 'OAMK Kontinkankaan kampus', position: [65.0086590, 25.5104969], icon: 'graduation-cap.svg', type: 'education', url: 'https://www.oamk.fi', media: { type: 'image', src: 'photos/kontinkangaskampus.webp', alt: 'OAMK Kontimkangas ulkoa' } },
  { name: 'OAMK Linnanmaan kampus', position: [65.0611315, 25.4670378], icon: 'graduation-cap.svg', type: 'education', url: 'https://www.oamk.fi', media: { type: 'image', src: 'photos/oamk-campus.webp', alt: 'OAMK Linnanmaa ulkoa'} },

  // PSOAS
  { name: 'PSOAS Lounge', position: [65.0578532, 25.4672972], icon: 'house.svg', type: 'housing', url: 'https://www.psoas.fi', media: { type: 'image', src: 'photos/PSOAS Lounge.jpg', alt: 'PSOAS Lounge' } },
  { name: 'PSOAS Studio', position: [65.0171439, 25.4786574], icon: 'house.svg', type: 'housing', url: 'https://www.psoas.fi', media: { type: 'image', src: 'photos/PSOAS Studio.JPG', alt: 'PSOAS Studio' } },

  // Terveys
  { name: 'OYS', position: [65.0093087, 25.5193510], icon: 'hospital.svg', type: 'terveys', url: 'https://oys.fi/', media: { type: 'image', src: 'photos/oys.jpg', alt: 'OYS'} },
  { name: 'YTHS Oulu', position: [65.0577908, 25.4712727], icon: 'hospital.svg', type: 'terveys', url: 'https://www.yths.fi/', media: { type: 'image', src: 'photos/YTHS.JPG', alt: 'YTHS'} },

  // Turvallisuus
  { name: 'Oulun poliisiasema', position: [65.0126883, 25.4718853], icon: 'shield-question.svg', type: 'turvallisuus', url: 'https://poliisi.fi/oulun-poliisilaitos-toimipisteet', media: { type: 'image', src: 'photos/Police_station.jpg', alt: 'Oulu pokiisiasema'} },

  // Urheilu
  { name: 'Easymove Linnanmaa', position: [65.0587913, 25.4538337], icon: 'dumbbell.svg', type: 'urheilu', url: 'https://easymove.fi/kuntosali-linnanmaa-oulu/', media: { type: 'image', src: 'photos/easymove.jpg', alt: 'kuntosalli'} },
  { name: 'Linnanmaan jäähalli', position: [65.0522999, 25.4592561], icon: 'volleyball.svg', type: 'urheilu', url: 'https://www.ouka.fi/sisaliikuntapaikat/linnanmaan-jaahalli', media: { type: 'image', src: 'photos/linnanmaan_jäähalli.jpg', alt: 'jäähalli'} },
  { name: 'Linnanmaan liikuntahalli', position: [65.0551937, 25.4723698], icon: 'volleyball.svg', type: 'urheilu', url: 'https://www.ouka.fi/sisaliikuntapaikat/linnanmaan-liikuntakeskus', media: { type: 'image', src: 'photos/linnanmaan_liikuntahalli.jpg', alt: 'liikuntakeskus'} },
  { name: 'Linnanmaan uimahalli', position: [65.0547379, 25.4721012], icon: 'waves-ladder.svg', type: 'urheilu', url: 'https://www.ouka.fi/uimahallit/linnanmaan-uimahalli?accordion=accordion-64735', media: { type: 'image', src: 'photos/linnanmaan_liikuntakeskus.jpg', alt: 'uimahalli'} },
  { name: 'Ouluhalli', position: [65.00798714528456, 25.50140229248771], icon: 'volleyball.svg', type: 'urheilu', url: 'https://www.ouka.fi/ouluhalli', media: { type: 'image', src: 'photos/Ouluhalli.jpg', alt: 'Ouluhalli'} },
  { name: 'Raatin uimahalli', position: [65.01989835705676, 25.464421656539734], icon: 'waves-ladder.svg', type: 'urheilu', url: 'https://www.ouka.fi/uimahallit/raatin-uimahalli', media: { type: 'image', src: 'photos/Raatin uimahalli.jpg', alt: 'Raatin uimahalli'} },

  // Viranomaiset ja palvelut
  { name: 'DVV', position: [65.0181923, 25.5058947], icon: 'info.svg', type: 'palvelut', url: 'https://dvv.fi/henkiloasiakkaat', media: { type: 'image', src: 'photos/DVV.JPG', alt: 'DVV'} },
  { name: 'Kela', position: [65.0092022, 25.4670466], icon: 'info.svg', type: 'palvelut', url: 'https://www.kela.fi/henkiloasiakkaat', media: { type: 'image', src: 'photos/Kela.JPG', alt: 'Kela'} },
  { name: 'Oulu10', position: [65.0138308, 25.4696721], icon: 'info.svg', type: 'palvelut', url: 'https://www.ouka.fi/asiakasohjaus-ja-neuvonta', media: { type: 'image', src: 'photos/Oulu10.jpg', alt: 'Oulu10'} }
];


function ClusterLayer({ locations }) {
  const map = useMap();
  useEffect(() => {
    const cluster = L.markerClusterGroup();
    locations.forEach(loc => {
      const marker = L.marker(loc.position, { icon: makeIcon(loc.icon) });
      let html = '<div style="min-width:180px">';
      if (loc.media?.type === 'image') {
        html += `
          <img
            src="${import.meta.env.BASE_URL}${loc.media.src}"
            alt="${loc.media.alt || loc.name}"
            style="width:100%;border-radius:4px;margin-bottom:8px"
          />
        `;
      }
      html += `
        <strong>${loc.name}</strong><br/>
        <a href="${loc.url}" target="_blank">Lue lisää</a>
      </div>`;
      marker.bindPopup(html);
      cluster.addLayer(marker);
    });
    map.addLayer(cluster);
    return () => map.removeLayer(cluster);
  }, [map, locations]);
  return null;
}

function SovitaRajat({ locations }) {
  const map = useMap();
  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = L.latLngBounds(locations.map(l => l.position));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, locations]);
  return null;
}

function OmaSijainti({ aktiivinen }) {
  const map = useMap();
  useEffect(() => {
    if (!aktiivinen || !navigator.geolocation) return;
    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const latlng = [coords.latitude, coords.longitude];
        if (!map._omaMerkki) {
          map._omaMerkki = L.marker(latlng).addTo(map);
          map._omaKierto = L.circle(latlng, { radius: coords.accuracy }).addTo(map);
          map.setView(latlng, 14);
        } else {
          map._omaMerkki.setLatLng(latlng);
          map._omaKierto.setLatLng(latlng).setRadius(coords.accuracy);
        }
      },
      () => {},
      { enableHighAccuracy: true, maximumAge: 30000 }
    );
    return () => {
      navigator.geolocation.clearWatch(watchId);
      if (map._omaMerkki) {
        map.removeLayer(map._omaMerkki);
        map._omaMerkki = null;
      }
      if (map._omaKierto) {
        map.removeLayer(map._omaKierto);
        map._omaKierto = null;
      }
    };
  }, [map, aktiivinen]);
  return null;
}

const FILTERS = [
  { value: 'all', label: 'Kaikki' },
  { value: 'shopping', label: 'Kauppakeskukset' },
  { value: 'vapaa-aika', label: 'Kultturi' },
  { value: 'transport', label: 'Liikenne' },
  { value: 'iltamenot', label: 'Iltamenot' },
  { value: 'education', label: 'OAMK' },
  { value: 'housing', label: 'PSOAS' },
  { value: 'terveys', label: 'Terveys' },
  { value: 'turvallisuus', label: 'Turvallisuus' },
  { value: 'urheilu', label: 'Urheilu' },
  { value: 'palvelut', label: 'Viranomaiset ja palvelut' },
];

export default function Kartta() {
  const [layer, setLayer]       = useState('osm');
  const [filter, setFilter]     = useState('all');
  const [locateAkt, setLocateAkt] = useState(false);

  const counts = useMemo(() => {
    const c = { all: LOCATIONS.length };
    LOCATIONS.forEach(loc => {
      c[loc.type] = (c[loc.type] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () => filter === 'all' ? LOCATIONS : LOCATIONS.filter(l => l.type === filter),
    [filter]
  );

  const tileUrls = {
    osm:       'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  };

  return (
    <div className="map-wrapper">
      <h2 style={{ textAlign: 'center' }}>Interaktiivinen kartta</h2>
      <div
        className="controls"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
          background: '#fff',
          padding: '0.5rem',
          borderRadius: '4px'
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          Karttataso:
          <select value={layer} onChange={e => setLayer(e.target.value)}>
            <option value="osm">OpenStreetMap</option>
            <option value="satellite">Satelliitti</option>
          </select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          Suodatus:
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            {FILTERS.map(f => (
              <option key={f.value} value={f.value}>
                {f.label} ({counts[f.value] || 0})
              </option>
            ))}
          </select>
        </label>
        <button
          style={{
            backgroundColor: '#f7941D',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={() => setLocateAkt(true)}
        >
          Missä olen?
        </button>
      </div>
      <MapContainer
        center={[65.0131, 25.4712]}
        zoom={12}
        scrollWheelZoom
        style={{ height: '70vh', width: '100%' }}
      >
        <MapCleanup />
        <TileLayer
        key={layer}
        url={tileUrls[layer]}
        attribution="© OpenStreetMap contributors"
        />

        <SovitaRajat locations={filtered} />
        <ClusterLayer locations={filtered} />
        <OmaSijainti aktiivinen={locateAkt} />
      </MapContainer>
    </div>
  );
}
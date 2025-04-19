import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './cluster.css';

const createIcon = (iconUrl) =>
  new L.Icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

const locations = [
  {
    name: 'OAMK Linnanmaan kampus',
    position: [65.06113152238834, 25.467037820251747],
    icon: 'graduation-cap.svg',
    type: 'education',
    url: 'https://www.oamk.fi'
  },
  {
    name: 'OAMK Kontinkankaan kampus',
    position: [65.0086590050682, 25.510496917824717],
    icon: 'graduation-cap.svg',
    type: 'education',
    url: 'https://www.oamk.fi'
  },
  {
    name: 'PSOAS Studio',
    position: [65.01714396007036, 25.47865741235439],
    icon: 'house.svg',
    type: 'housing',
    url: 'https://www.psoas.fi'
  },
  {
    name: 'PSOAS Lounge',
    position: [65.05785324847481, 25.467297165715443],
    icon: 'house.svg',
    type: 'housing',
    url: 'https://www.psoas.fi'
  },
  {
    name: 'Kauppakeskus Valkea',
    position: [65.01162146051004, 25.47257317412376],
    icon: 'shopping-bag.svg',
    type: 'shopping',
    url: 'https://www.kauppakeskusvalkea.fi'
  },
  {
    name: 'Kauppakeskus Ideapark',
    position: [65.07656183558692, 25.44588096557384],
    icon: 'shopping-bag.svg',
    type: 'shopping',
    url: 'https://www.oulu.ideapark.fi/'
  },
  {
    name: 'Oulun lentoasema',
    position: [64.92872133716725, 25.373953583513735],
    icon: 'plane.svg',
    type: 'transport',
    url: 'https://www.finavia.fi/fi/lentoasemat/oulu'
  },
  {
    name: 'Oulun rautatieasema',
    position: [65.01140021778842, 25.483935360696353],
    icon: 'train-front.svg',
    type: 'transport',
    url: 'https://www.vr.fi'
  },
  {
    name: 'Linja-autoasema',
    position: [65.00923422105085, 25.483466009634572],
    icon: 'bus.svg',
    type: 'transport',
    url: 'https://www.osl.fi/'
  },
  
  {
    name: 'Elokuvateatteri Star',
    position: [65.02461755971902, 25.48272367596612],
    icon: 'clapperboard.svg',
    type: 'vapaa-aika',
    url: 'https://www.elokuvateatteristar.fi/'
  },
  {
    name: 'Finnkino Plaza',
    position: [65.01114424291575, 25.46548820249102],
    icon: 'clapperboard.svg',
    type: 'vapaa-aika',
    url: 'https://www.finnkino.fi/ohjelmisto/plaza-oulu'
  },
  {
    name: 'Oulun teatteri',
    position: [65.0145480612731, 25.462514814262033],
    icon: 'drama.svg',
    type: 'vapaa-aika',
    url: 'https://oulunteatteri.fi/'
  },
  {
    name: 'Pekurin kirjasto (Oulun pääkirjasto)',
    position: [65.01184431880917, 25.46841328853877],
    icon: 'book-open-text.svg',
    type: 'vapaa-aika',
    url: 'https://outi.finna.fi/OrganisationInfo/Home#85365'
  },


  {
    name: 'Oulun poliisiasema',
    position: [65.01268830543981, 25.471885257677663],
    icon: 'shield-question.svg',
    type: 'turvallisuus',
    url: 'https://poliisi.fi/oulun-poliisilaitos-toimipisteet'
  },


  {
    name: 'YTHS Oulu',
    position: [65.05779075879168, 25.471272655052502],
    icon: 'hospital.svg',
    type: 'terveys',
    url: 'https://www.yths.fi/'
  },
  {
    name: 'OYS',
    position: [65.00930872828503, 25.51935095340119],
    icon: 'hospital.svg',
    type: 'terveys',
    url: 'https://oys.fi/'
  },


  {
    name: 'Linnanmaan liikuntakeskus',
    position: [65.05519366387848, 25.472369751628804],
    icon: 'volleyball.svg',
    type: 'urheilu',
    url: 'https://www.ouka.fi/sisaliikuntapaikat/linnanmaan-liikuntakeskus'
  },
  {
    name: 'Linnanmaan uimahalli',
    position: [65.05473790326197, 25.47210115813448],
    icon: 'waves-ladder.svg',
    type: 'urheilu',
    url: 'https://www.ouka.fi/uimahallit/linnanmaan-uimahalli?accordion=accordion-64735'
  },
  {
    name: 'Linnanmaan jäähalli',
    position: [65.0522999225265, 25.459256123036536],
    icon: 'volleyball.svg',
    type: 'urheilu',
    url: 'https://www.ouka.fi/sisaliikuntapaikat/linnanmaan-jaahalli'
  },
  {
    name: 'Easymove Linnanmaa',
    position: [65.05879134768162, 25.453833663032476],
    icon: 'dumbbell.svg',
    type: 'urheilu',
    url: 'https://easymove.fi/kuntosali-linnanmaa-oulu/'
  },


  {
    name: 'Oulu10 (Keskustan asiointipiste)',
    position: [65.01383083675692, 25.46967208077501],
    icon: 'info.svg',
    type: 'palvelut',
    url: 'https://www.ouka.fi/asiakasohjaus-ja-neuvonta'
  },
  {
    name: 'Kela',
    position: [65.00920221335039, 25.46704662788941],
    icon: 'info.svg',
    type: 'palvelut',
    url: 'https://www.kela.fi/henkiloasiakkaat'
  },
  {
    name: 'Digi- ja väestötietovirasto',
    position: [65.01819230388426, 25.505894691443803],
    icon: 'info.svg',
    type: 'palvelut',
    url: 'https://dvv.fi/henkiloasiakkaat'
  }
];

export default function Kartta() {
  const [filter, setFilter] = useState('all');
  const [tileLayer, setTileLayer] = useState('osm');

  const tileLayers = {
    osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  };

  const filteredLocations =
    filter === 'all' ? locations : locations.filter((loc) => loc.type === filter);

  return (
    <div className="map-wrapper">
      <h2 style={{ textAlign: 'center' }}>Interaktiivinen kartta</h2>

      <div className="controls">
        <label>Karttataso:</label>
        <select onChange={(e) => setTileLayer(e.target.value)}>
          <option value="osm">OpenStreetMap</option>
          <option value="satellite">Satelliitti</option>
        </select>

        <label>Suodatus:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Kaikki</option>
          <option value="education">OAMK</option>
          <option value="housing">Asuminen</option>
          <option value="shopping">Ostoskeskukset</option>
          <option value="transport">Liikenne</option>
          <option value="vapaa-aika">Vapaa-aika</option>
          <option value="turvallisuus">Turvallisuus</option>
          <option value="terveys">Terveys</option>
          <option value="urheilu">Urheilu</option>
          <option value="palvelut">Palvelupisteet</option>
        </select>
      </div>

      <MapContainer
        center={[65.0131, 25.4712]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '70vh', width: '100%' }}
      >
        <TileLayer
          url={tileLayers[tileLayer]}
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Tiles &copy; Esri'
        />

<MarkerClusterGroup>
  {filteredLocations.map(({ name, position, icon, url }) => (
    <Marker key={name} position={position} icon={createIcon(`/${icon}`)}>
      <Popup>
        <div style={{ maxWidth: '200px' }}>
          <h4>{name}</h4>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Lue lisää
            </a>
          </p>
        </div>
      </Popup>
    </Marker>
  ))}
</MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

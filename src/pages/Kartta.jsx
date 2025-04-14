import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-cluster';
import { useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Kartta.css';

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
];

export default function Kartta() {
  const [filter, setFilter] = useState('all');
  const [tileLayer, setTileLayer] = useState('osm');
  const mapRef = useRef();

  const tileLayers = {
    osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  };

  const filteredLocations =
    filter === 'all' ? locations : locations.filter((loc) => loc.type === filter);

  const flyToMarker = (position) => {
    const map = mapRef.current;
    if (map) {
      map.flyTo(position, 15);
    }
  };

  return (
    <div className="map-wrapper" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
      <div className="location-list" style={{ flex: '1 1 250px', maxWidth: '300px' }}>
        <h3>Kohteet</h3>
        <ul>
          {filteredLocations.map(({ name, position }) => (
            <li key={name}>
              <button onClick={() => flyToMarker(position)}>{name}</button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: '3 1 700px', minWidth: '300px' }}>
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
          </select>
        </div>

        <MapContainer
          center={[65.0131, 25.4712]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: '70vh', width: '100%' }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            url={tileLayers[tileLayer]}
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Tiles &copy; Esri'
          />

          <MarkerClusterGroup chunkedLoading>
            {filteredLocations.map(({ name, position, icon, url }) => (
              <Marker key={name} position={position} icon={createIcon(`/${icon}`)}>
                <Popup>
                  <div style={{ maxWidth: '200px' }}>
                    <h4>{name}</h4>
                    <img
                      src={`/images/${icon.replace('.svg', '.jpg')}`}
                      alt={name}
                      style={{ width: '100%', borderRadius: '4px' }}
                    />
                    <p>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
    </div>
  );
}

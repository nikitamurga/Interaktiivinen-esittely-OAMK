import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Kartta.css';

// Кастомные иконки
const createIcon = (iconUrl) =>
  new L.Icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

const locations = [
  {
    name: 'OAMK Linnanmaa',
    position: [65.06113152238834, 25.467037820251747],
    icon: 'graduation-cap.svg',
  },
  {
    name: 'PSOAS Studio',
    position: [65.01714396007036, 25.47865741235439],
    icon: 'house.svg',
  },
  {
    name: 'PSOAS Lounge',
    position: [65.05785324847481, 25.467297165715443],
    icon: 'house.svg',
  },
  {
    name: 'Kauppakeskus Valkea',
    position: [65.01162146051004, 25.47257317412376],
    icon: 'shopping-bag.svg',
  },
  {
    name: 'Kauppakeskus Ideapark',
    position: [65.07656183558692, 25.44588096557384],
    icon: 'shopping-bag.svg',
  },
  {
    name: 'Oulun lentoasema',
    position: [64.92872133716725, 25.373953583513735],
    icon: 'plane.svg',
  },
  {
    name: 'Oulun rautatieasema',
    position: [65.01140021778842, 25.483935360696353],
    icon: 'train-front.svg',
  },
  {
    name: 'Linja-autoasema',
    position: [65.00923422105085, 25.483466009634572],
    icon: 'bus.svg',
  },
];

export default function Kartta() {
  return (
    <div className="map-wrapper">
      <h2 style={{ textAlign: 'center' }}>Interaktiivinen kartta</h2>
      <MapContainer
        center={[65.0131, 25.4712]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '70vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(({ name, position, icon }) => (
          <Marker key={name} position={position} icon={createIcon(`/${icon}`)}>
            <Popup>{name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ContactInfo from "../ContactInfo/ContactInfo";

export default function Map() {
  const position = [52.220231, 21.018407];
  return (
    <section className={styles.section}>
      <div className={styles.mapContainer}>
        <ContactInfo />
        <MapContainer
          style={{ width: "100%", height: "50vh" }}
          zoom={15}
          center={position}
          scrollWheelZoom={false}
          fadeAnimation={true}
          markerZoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

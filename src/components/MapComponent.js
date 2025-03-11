import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = () => {
  // กำหนดพิกัดเริ่มต้น
  const position = [16.1211960, 104.3232271]; // ไม่มีการใช้ type annotations
  const customIcon = new L.Icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Icone_Vermelho.svg/1024px-Icone_Vermelho.svg.png', // ไอคอน (สามารถใช้ URL ไอคอนที่คุณต้องการ)
    iconSize: [25, 25], // ขนาดของไอคอน
    iconAnchor: [12, 24], // ตำแหน่งการยึดไอคอน
    popupAnchor: [0, -24], // ตำแหน่งที่ Popup จะแสดงเมื่อคลิกที่ Marker
  });

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        {/* ใช้ TileLayer เพื่อโหลดแผนที่จาก OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* ใช้ Marker พร้อมไอคอนที่กำหนดเอง */}
        <Marker position={position} icon={customIcon}>
          <Popup>
           <b> Slopy Innovat Smart GEN </b><br /> 227 หมู่ 21 ตำบลกุดชุม อำเภอกุดชุม จังหวัดยโสธร 35140
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

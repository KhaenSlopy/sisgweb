// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // นำเข้า Routes และ Route จาก react-router-dom
import Navbar from './NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import 'leaflet/dist/leaflet.css';
import Design from './pages/subpages/design';
import IoTPage from './pages/subpages/iotpage';
import DesktopApp from './pages/subpages/DesktopApp';
import MobileApp from './pages/subpages/mobileapp';
import Database from './pages/subpages/database';


const App = () => {
  return (
    <div>
      <Navbar /> {/* นำเข้า Navbar */}
      <Routes>  {/* ใช้ Routes แทน Switch ใน react-router-dom v6 */}
        <Route path="/" element={<Home />} />
        <Route path="/react-app" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/web-design" element={<Design />} />
        <Route path="/services/iot-design" element={<IoTPage />} />
        <Route path="/services/desktop-design" element={<DesktopApp />} />
        <Route path="/services/mobile-design" element={<MobileApp />} />
        <Route path="/services/database-design" element={<Database />} />
      </Routes>
    </div>
  );
};

export default App;

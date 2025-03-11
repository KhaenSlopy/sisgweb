// // src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';  // ไฟล์ CSS ที่ใช้ Tailwind
// import App from './App';  // ไฟล์ App.js ที่เป็นหน้าเริ่มต้นของโปรเจ็กต์

// // เริ่มต้นแอป React โดยการเรนเดอร์ App component ที่ root div ใน index.html
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')  // ใช้ element id "root" ที่กำหนดใน index.html
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // นำเข้า BrowserRouter
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

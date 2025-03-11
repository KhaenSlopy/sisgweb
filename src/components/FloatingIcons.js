import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaLine, FaTimes } from "react-icons/fa";

const FloatingIcons = () => {
  const [isVisible, setIsVisible] = useState(true); // สถานะเปิด/ปิด

  const handlePhoneClick = () => {
    window.location.href = "tel:0651151973"; // เปลี่ยนหมายเลขโทร
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@slopy.in.th"; // เปลี่ยนอีเมล
  };

  const handleLineClick = () => {
    window.open("https://line.me/R/ti/p/@015ltnxw", "_blank"); // เปลี่ยนเป็นลิงก์ไลน์ของคุณ
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1U5yszdyTr/?mibextid=wwXIfr", "_blank"); // เปลี่ยนเป็นลิงก์ Facebook ของคุณ
  };

  return (
    <div>
      {/* ปุ่ม Toggle เปิด/ปิด */}
      <button
        className="fixed bottom-0 right-0 m-4 bg-blue-800 text-white w-12 h-12 rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition-all flex items-center justify-center"
        onClick={() => setIsVisible(!isVisible)}
        title="Toggle Icons"
      >
        {isVisible ? <FaTimes size={20} /> : "+"}
      </button>

      {/* แสดงไอคอนเมื่อ isVisible === true */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 flex flex-col gap-3 sm:flex">
          {/* ไอคอนโทรศัพท์ */}
          <div
            className="flex items-center justify-center bg-green-500 text-white w-12 h-12 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all"
            onClick={handlePhoneClick}
            title="โทร:0651151973"
          >
            <FaPhone size={20} />
          </div>

          {/* ไอคอนอีเมล */}
          <div
            className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all"
            onClick={handleEmailClick}
            title="Email"
          >
            <FaEnvelope size={20} />
          </div>

          {/* ไอคอนไลน์ */}
          <div
            className="flex items-center justify-center bg-green-400 text-white w-12 h-12 rounded-full shadow-lg cursor-pointer hover:bg-green-500 transition-all"
            onClick={handleLineClick}
            title="Line"
          >
            <FaLine size={20} />
          </div>

          {/* ไอคอน Facebook */}
          <div
            className="flex items-center justify-center bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all"
            onClick={handleFacebookClick}
            title="Facebook"
          >
            <FaFacebook size={20} />
            <br/>
          </div>
          <br/>
        </div>

      )}
    </div>
  );
};

export default FloatingIcons;

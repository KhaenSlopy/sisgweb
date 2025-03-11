import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LOGO from "./asset/png/logosss.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  // เมื่อเมาส์ออกจากปุ่มหรือเมนู
  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };
  const styleGETSTARTED = {
    backgroundColor: '#007EF2',
    padding: '12px',
  }

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo or Title */}
          <div className="flex items-center justify-center sm:justify-start">
            <div className="text-2xl font-semibold"><img src={LOGO} width={80}></img></div>
           
            <Link
              to="/"
              className="text-2xl font-semibold"
            >
              Slopy Innovat Smart GEN
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
          <div className="hidden sm:block">
          <div className="flex space-x-4">
            <Link
              to="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              หน้าแรก
            </Link>

            {/* บริการ Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                บริการ
              </button>
              {isServicesOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/services/web-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      บริการออกแบบและพัฒนาเว็บ
                    </Link>
                    <Link
                      to="/services/iot-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      บริการออกแบบและพัฒนาระบบIoT
                    </Link>
                    <Link
                      to="/services/desktop-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Desktop Application
                    </Link>
                    <Link
                      to="/services/mobile-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      โมบายแอพพลิเคชัน
                    </Link>
                    <Link
                      to="/services/database-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      ออกแบบและจัดการระบบฐานข้อมูล
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              ติดต่อ
            </Link>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
            <Link
              to="/"
              className="text-1xl font-semibold" style={styleGETSTARTED}
            >
              GET STARTED
            </Link>
          </div>
          
        </div>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              หน้าแรก
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                บริการ
              </button>
              {isServicesOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/services/web-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      บริการออกแบบและพัฒนาเว็บ
                    </Link>
                    <Link
                      to="/services/iot-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      บริการออกแบบและพัฒนาระบบIoT
                    </Link>
                    <Link
                      to="/services/desktop-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                     Desktop Application
                    </Link>
                    <Link
                      to="/services/mobile-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                    โมบายแอพพลิเคชัน
                    </Link>
                    <Link
                      to="/services/database-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      ออกแบบและจัดการระบบฐานข้อมูล
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ติดต่อ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

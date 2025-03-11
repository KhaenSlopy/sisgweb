import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/png/logosss.png";
import { FaMapMarkerAlt } from "react-icons/fa"; // นำเข้าไอคอน Location
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLine } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  const handleLineClick = () => {
    window.open("https://line.me/R/ti/p/@015ltnxw", "_blank"); // เปลี่ยนเป็นลิงก์ไลน์ของคุณ
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1U5yszdyTr/?mibextid=wwXIfr", "_blank"); // เปลี่ยนเป็นลิงก์ Facebook ของคุณ
  };
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* ข้อความ */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-semibold mb-2">
              <img src={logo} width={60} alt="" /> Slopy Innovat Smart GEN
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              สโลปี้ อินโนเวท สมาร์ทเจน บริการออกแบบและพัฒนาเว็บแอพพลิเคชั่น{" "}
              <br />
              รองรับการใช้งานทุกอุปกรณ์ (Responsive) <br />
              บริการโมบายแอพพลิเคชั่น วินโดว์แอพพลิเคชั่น <br />{" "}
              ออกแบบและจัดการระบบฐานข้อมูล <br />
              ระบบIoT (Internet of Things) ระบบSmartFarm ระบบSmartHome <br />
              และบริการด้านงานIT <br /> โดยมีค่าใช้จ่ายงบประมาณที่พึงพอใจ
              <br /> &nbsp;
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-lg sm:text-xl font-semibold mb-2">
              บริการของเรา
            </p>
            <Link
              to="/services/web-design"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ออกแบบและพัฒนาเว็บ
            </Link>
            <Link
              to="/services/iot-design"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ออกแบบและพัฒนาระบบIoT
            </Link>
            <Link
              to="/services/database-design"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ออกแบบและจัดการระบบฐานข้อมูล
            </Link>
            <Link
              to="/services/mobile-design"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              โมบายแอพพลิเคชั่น
            </Link>
            <Link
              to="/services/desktop-design"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              วินโดว์แอพพลิเคชั่น
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              สอบถามบริการอื่นๆ
            </Link>
          </div>

          {/* ลิงค์ */}
          <div className="mt-4 sm:mt-0">
            <p className="text-lg sm:text-xl font-semibold mb-2">ติดต่อเรา</p>
            <div className="flex items-center text-center sm:text-left">
              <FaMapMarkerAlt className=" text-2xl mr-2" />
              <p className="text-lg ">
                : สโลปี้ ซอฟต์ โซลูชัน <br /> 227 หมู่ 21 ตำบลกุดชุม อำเภอกุดชุม
                จังหวัดยโสธร 35140
              </p>
            </div>
            <div className="pt-1 rounded-lg shadow-lg">&nbsp;</div>
            <div className="flex items-center text-center sm:text-left">
              <BsFillTelephoneFill className=" text-2xl mr-2" />
              <p className="text-lg ">: 0651151973</p>
            </div>
            <div className="flex items-center text-center sm:text-left">
              <IoIosMail className=" text-2xl mr-2" />
              <p className="text-lg ">: slopysloft@slopy.in.th</p>
            </div>
            <div className="flex items-center text-center sm:text-left">
              <FaLine className=" text-2xl mr-2" />
              <p className="text-lg ">: @015ltnxw</p>
            </div>
            <div className="pt-3 rounded-lg shadow-lg">&nbsp;</div>
            <p className="text-lg sm:text-xl font-semibold mb-2">ติดตามเรา</p>
            <div className="flex items-center text-center sm:text-left">
              <div onClick={handleLineClick} title="Line">
                <FaLine className=" text-4xl mr-2" />
              </div>
              <div
                onClick={handleFacebookClick}
                            title="Facebook"
                          >
                          <FaFacebook className=" text-4xl mr-2" />
              </div>
              
            </div>
            <div className="pt-3 rounded-lg shadow-lg">&nbsp;</div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white ">
        <div className="container mx-auto text-center">
          <div className="flex  md:flex-row justify-center items-center gap-4">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Slopy Soft. All rights reserved.
            </p>
            {/* <a
              href="/terms"
              className="text-blue-400 hover:text-blue-300 text-sm md:text-base"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="text-blue-400 hover:text-blue-300 text-sm md:text-base"
            >
              Privacy Policy
            </a> */}
          </div>
        </div>
      </footer>
    </footer>
  );
}
export default Footer;

import React from "react";
import contactpng from "../asset/png/contact.png";
import FloatingIcons from "../components/FloatingIcons";
import Footer from "../components/Footer";
import { FaMapMarked } from "react-icons/fa";
import { IoIosMail, IoIosCalculator } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import MapComponent from "../components/MapComponent";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaFacebook, FaLine, FaInstagram } from "react-icons/fa";

function Contact() {
  const designweb = {
    fontSize: "35px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  const subtext = {
    fontSize: "30px",
    fontweight: "bold",

    fontfamily: "Monospace",
  };

  return (
    <div className="pt-16 rounded-lg shadow-lg">
      <FloatingIcons />
      <div>
        <img src={contactpng} className="w-full h-auto object-cover " alt="" />
      </div>
      <div className="flex items-center justify-center ">
        <div className="p-4 pt-16 rounded-lg">
          <h2 className="text-2xl font-bold" style={designweb}>
            ติดต่อเรา
          </h2>
          &nbsp;
        </div>
      </div>
      <div className="text-center" style={subtext}>
        <p>ติดต่อกับทีมงานฝ่ายขายและ ฝ่ายSupport</p>
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4">
        {/* Form Section */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-4 mb-2 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">ให้เราติดต่อคุณ</h2>
          <ContactForm />
        </div>

        {/* Cards Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Card 1: Contact */}
          <div className="bg-white border-2 border-green-500 shadow-lg rounded-2xl p-6 flex flex-col">
            <h1 className="text-lg font-semibold mb-2">
              <FaMapMarked /> ติดต่อเรา
            </h1>
            <p className="text-gray-600">
            สโลปี้ อินโนเวท สมาร์ทเจน 227 หมู่ 21 ตำบลกุดชุม อำเภอกุดชุม
              จังหวัดยโสธร 35140 <br />
              <span className="flex items-center">
                <IoIosMail className="mr-2" /> : info@slopy.in.th
              </span>
              <span className="flex items-center">
                <IoCall className="mr-2" /> : 0651151973
              </span>
            </p>
          </div>

          {/* Card 2: About */}
          <div className="bg-white border-2 border-green-500 shadow-lg rounded-2xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              <RiCustomerService2Fill /> ติดต่อฝ่ายขาย
            </h3>
            <p className="text-gray-600">
              <span className="flex items-center">
                <IoIosMail className="mr-2" /> : sale@slopy.in.th
              </span>
              <span className="flex items-center">
                <IoCall className="mr-2" /> : 
              </span>
            </p>
          </div>

          {/* Card 3: Service */}
          <div className="bg-white border-2 border-green-500 shadow-lg rounded-2xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              <MdSupportAgent /> ติดต่อฝ่ายSupport
            </h3>
            <p className="text-gray-600">
              <span className="flex items-center">
                <IoIosMail className="mr-2" /> : support@slopy.in.th
              </span>
              <span className="flex items-center">
                <IoCall className="mr-2" /> : 0651151973
              </span>
            </p>
          </div>
          <div className="bg-white border-2 border-green-500 shadow-lg rounded-2xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              <IoIosCalculator /> ติดต่อฝ่ายบัญชี
            </h3>
            <p className="text-gray-600">
              <span className="flex items-center">
                <IoIosMail className="mr-2" /> : account@slopy.in.th
              </span>
              <span className="flex items-center">
                <IoCall className="mr-2" /> :
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* รูปภาพ */}
        <div className="flex justify-center space-x-8 mt-6">
          {/* Line */}
          <div className="flex flex-col items-center">
            <a
              href="https://line.me/R/ti/p/@015ltnxw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-4xl hover:text-green-600"
            >
              <FaLine />
            </a>
            <span className="mt-2 text-gray-600 text-sm">@slopy</span>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/share/12EUuYHJ5cZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-4xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <span className="mt-2 text-gray-600 text-sm">Slopy Innovat Smart GEN</span>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/slopy.in.th/?igsh=MW40dW41MWkzMDI4ZA%3D%3D#"
              target="_blank" // เพิ่ม target="_blank" เพื่อเปิดในแท็บใหม่
              rel="noopener noreferrer" // เพิ่ม rel เพื่อเพิ่มความปลอดภัย
              className="text-pink-500 text-4xl hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <span className="mt-2 text-gray-600 text-sm">slopy.in.th</span>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <a
              href="tel:+66651151973"
              className="text-green-500 text-4xl hover:text-green-600"
            >
              <FaPhone />
            </a>
            <span className="mt-2 text-gray-600 text-sm">0651151973</span>
          </div>
        </div>
        <div className="border-l border-gray-300 h-10"></div>
        <div className="flex justify-center space-x-8 mt-6">
          <div className="flex flex-col items-center">
            <a
              href="https://line.me/R/ti/p/@733svvbq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-4xl hover:text-green-600"
            >
              <FaLine />
            </a>
            <span className="mt-2 text-gray-600 text-sm">ฝ่ายขาย</span>
            <span className="mt-2 text-gray-600 text-sm">@733svvbq</span>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://line.me/R/ti/p/@718rueew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-4xl hover:text-green-600"
            >
              <FaLine />
            </a>
            <span className="mt-2 text-gray-600 text-sm">ฝ่าย Support</span>
            <span className="mt-2 text-gray-600 text-sm">@718rueew</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">แผนที่ของเรา</h2>
        <div className="border rounded-lg shadow-lg">
          <MapComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

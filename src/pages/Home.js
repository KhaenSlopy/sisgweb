import React from "react";
import p1 from "../asset/png/p1.png";
import { Link } from "react-router-dom";
import iotp1 from "../asset/png/iotp1.png";
import web1 from "../asset/png/webp1.png";
import Footer from "../components/Footer";
import adwinapp from "../asset/png/winapp2.png";
import mdapp from "../asset/png/mbapp1.png";
import dbapp from "../asset/png/dbapp1.png";
import Card from "../components/Card";
import FloatingIcons from "../components/FloatingIcons";
import webdes from "../asset/png/webdes.png";
import responsive from "../asset/png/responsive.png";
import service from "../asset/png/service.png"
import iots2 from "../asset/png/iots2.png";
import iots3 from "../asset/png/iots3.png";
import iots4 from "../asset/png/iots4.png";

function Home() {
  const head1 = {
    fontSize: "40px",
    fontfamily: "Monospace",
  };
  const subhead1 = {
    fontSize: "20px",
  };
  const designweb = {
    fontSize: "25px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  const styleGETSTARTED = {
    backgroundColor: "#007EF2",
    padding: "10px",
  };
  return (
    <div className="pt-16 rounded-lg shadow-lg">
      <FloatingIcons />
      <div>
        <img src={p1} className="w-full h-auto object-cover " alt="" />
      </div>

      <div className="flex items-center justify-center bg-gray-100">
        <div className="p-4 pt-16 rounded-lg">
          <h2 className="text-2xl font-bold" style={head1}>
            รับทําเว็บไซต์
          </h2>
          &nbsp;
        </div>
      </div>
      <div className="text-center">
        <p style={subhead1}>
          สโลปี้ ซอฟต์ โซลูชั่น เรามีบริการออกแบบและพัฒนาเว็บไซต์ต่างๆ
          และบริการดูแลจัดการระบบฐานข้อมูล <br />
          ระบบInternet of Things (IoT) โมบายแอพพลิเคชั่น
          ที่เหมาะแก่ธุรกิจขนาดเล็กไปจนถึงขนาดกลาง <br />
          เว็บบริษัท | ธุรกิจขนาดเล็ก | ธุรกิจขนาดกลาง | องค์กรต่างๆ | วัด |
          โรงเรียน | มูลนิธิ | ร้านค้าออนไลน์ | เว็บอื่นๆ |
        </p>
      </div>

      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={web1}
            className="p-4 w-full md:w-2/3 lg:w-auto object-cover"
            alt="Web Design"
          />
        </div>

        {/* ข้อความ */}
        <div className="text-center lg:text-left">
          <strong
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"
            style={designweb}
          >
            บริการออกแบบและพัฒนาเว็บ
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            บริการออกแบบและพัฒนาเว็บ <br />
            เว็บแอพพลิเคชัน โมบายแอพพลิเคชัน <br />
            เว็บบล๊อก เว็บแนะนำสถานที่ เว็บหน่วยงาน <br />
            ระบบจัดการงาน และอื่นๆ...
          </p>
          <br />
          <Link
            to="/"
            className="text-1xl mt-4 inline-block font-semibold  text-black-600 hover:text-white hover:bg-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg px-4 py-2"
            style={styleGETSTARTED}
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* ข้อความ */}
        <div className="text-center lg:text-left">
          <strong
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"
            style={designweb}
          >
            บริการออกแบบและพัฒนาระบบIoT
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            บริการออกแบบและพัฒนาระบบIoT <br />
            ระบบSmartFarm ระบบSmartHome <br />
            เก็บค่าข้อมูลจากSensor ระบบควบคุมอัตโนมัติ <br />
            และอื่นๆ...
          </p>
          <br />
          <Link
            to="/"
            className="text-1xl mt-4 inline-block font-semibold  text-black-600 hover:text-white hover:bg-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg px-4 py-2"
            style={styleGETSTARTED}
          >
            อ่านเพิ่มเติม
          </Link>
        </div>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={iotp1}
            className="p-4 w-full md:w-2/3 lg:w-auto object-cover"
            alt="Web Design"
          />
        </div>
      </div>
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={adwinapp}
            className="p-4 w-full md:w-2/3 lg:w-auto object-cover"
            alt="Web Design"
          />
        </div>

        {/* ข้อความ */}
        <div className="text-center lg:text-left">
          <strong
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"
            style={designweb}
          >
            Desktop Application
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            บริการออกแบบและพัฒนา Desktop Application <br />
            สำหรับบุคคล องค์กรหรือหน่วยงานต่างๆ <br />
            ไมาว่าจะเป็น ระจัดการคลัง ระบบจัดการขาย แดชบอร์ดรายงาน
            <br />
            ระบบเพื่อการศึกษา E-Leaning และอื่นๆ...
          </p>
          <br />
          <Link
            to="/"
            className="text-1xl mt-4 inline-block font-semibold  text-black-600 hover:text-white hover:bg-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg px-4 py-2"
            style={styleGETSTARTED}
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* ข้อความ */}
        <div className="text-center lg:text-left">
          <strong
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"
            style={designweb}
          >
            โมบายแอพพลิเคชัน
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            บริการออกแบบและพัฒนาแอพพลิเคชันสำหรับมือถือ
            <br />
            ระบบควบคุมSmartFarm แอพสำหรับการขนส่ง <br />
            แอพเพื่อการศึกษา แอพจัดการคลัง <br />
            และอื่นๆ...
          </p>
          <br />
          <Link
            to="/"
            className="text-1xl mt-4 inline-block font-semibold  text-black-600 hover:text-white hover:bg-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg px-4 py-2"
            style={styleGETSTARTED}
          >
            อ่านเพิ่มเติม
          </Link>
        </div>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={mdapp}
            className="p-4 w-full md:w-2/3 lg:w-auto object-cover"
            alt="Web Design"
          />
        </div>
      </div>
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={dbapp}
            className="p-4 w-full md:w-2/3 lg:w-auto object-cover"
            alt="Web Design"
          />
        </div>

        {/* ข้อความ */}
        <div className="text-center lg:text-left">
          <strong
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"
            style={designweb}
          >
            บริการออกแบบและจัดการระบบฐานข้อมูล
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            บริการออกแบบและจัดการระบบฐานข้อมูล <br />
            ดูแลความปลอดภัยระบบฐานข้อมูล <br />
            วิดเคราะห์ให้ดูง่าย ปลอดภัย และมีประสิทธิภาพในการใช้งาน <br />
          </p>
          <br />
          <Link
            to="/"
            className="text-1xl mt-4 inline-block font-semibold  text-black-600 hover:text-white hover:bg-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg px-4 py-2"
            style={styleGETSTARTED}
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-8">ทำไมต้องทำเว็บกับเรา?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="สวยงามและทันสมัย"
            content="ด้วยทีมงาน ออกแบบเว็บไซต์ แอพพลิเคชั่น ให้ตรงตามจุดประสงค์ สวยงาม ทันสมัย และทำให้เว็บไซต์ของคุณมีความน่าเชื่อถือ"
            logo={<img src={webdes} alt="Loading..." />}
          />
          <Card
            title="Responsive Website"
            content="ออกแบบและพัฒนาให้สามารถปรับตัวและแสดงผลได้อย่างเหมาะสมกับหน้าจอทุกขนาด ไม่ว่าจะเป็น มือถือ , แท็บเล็ต , หรือ คอมพิวเตอร์  โดยไม่สูญเสียประสบการณ์การใช้งาน และสามารถใช้งานได้สะดวกทุกที่ ทุกเวลา"
            logo={<img src={responsive} alt="Loading..." />}
          />
          <Card
            title="การดูแลและสนับสนุนหลังการขาย"
            content="เราให้การดูแลเว็บไซต์ของคุณตลอดเวลา หากมีปัญหาหรือข้อสงสัย ทีมงานของเราพร้อมให้การสนับสนุนและแก้ไขปัญหาให้ทันที เพื่อให้ธุรกิจของคุณไม่สะดุดและดำเนินไปได้อย่างราบรื่น"
            logo={<img src={service} alt="Loading..." />}
          />
        </div>
      </div>

      <div className="flex flex-col   bg-gray-50 p-16">
        <h1 className="flex text-3xl font-bold mb-8 items-center justify-center">
          เลือกใช้บริการ Internet of Things
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="เชื่อมต่อทุกสิ่งอย่างอย่างไร้ขีดจำกัด"
            content="เรามีความเชี่ยวชาญในการเชื่อมต่ออุปกรณ์ต่างๆ ในระบบ IoT ทำให้ธุรกิจของคุณสามารถรวบรวมข้อมูลจากอุปกรณ์หลายประเภท ไม่ว่าจะเป็นเซ็นเซอร์ต่างๆ, เครื่องมือ, หรืออุปกรณ์อัจฉริยะ และนำข้อมูลเหล่านั้นมาวิเคราะห์เพื่อปรับปรุงกระบวนการทำงานได้อย่างมีประสิทธิภาพ"
            logo={<img src={iotp1} alt="Loading..." />}
          />
          <Card
            title=" การจัดการข้อมูลที่มีประสิทธิภาพ"
            content="ด้วยเทคโนโลยี IoT ของเรา คุณจะสามารถเก็บและจัดการข้อมูลที่ได้รับจากอุปกรณ์ต่างๆ ได้อย่างปลอดภัยและมีประสิทธิภาพ เราช่วยให้คุณสามารถตรวจสอบข้อมูลแบบเรียลไทม์และทำการตัดสินใจทางธุรกิจได้อย่างแม่นยำ"
            logo={<img src={iots2} alt="Loading..." />}
          />
          <Card
            title="เพิ่มความสามารถในการควบคุมและอัตโนมัติ"
            content="ระบบ IoT ของเราช่วยให้ธุรกิจของคุณสามารถควบคุมอุปกรณ์ต่างๆ ได้จากระยะไกล และสามารถตั้งค่าให้ทำงานอัตโนมัติ เช่น การควบคุมระบบเครื่องจักรในโรงงาน หรือการเปิด/ปิดไฟในอาคารได้โดยไม่ต้องอยู่ในสถานที่จริง เพิ่มความสะดวกและลดข้อผิดพลาดจากการทำงานด้วยตนเอง"
            logo={<img src={iots3} alt="Loading..." />}
          />
           <Card
            title="โซลูชัน IoT ที่ใช้งานง่ายและประหยัดค่าใช้จ่าย"
            content="เราเข้าใจดีถึงข้อจำกัดของทีมขนาดเล็กและธุรกิจที่ต้องการโซลูชันที่ไม่ซับซ้อนและประหยัดค่าใช้จ่าย ทีมของเราพร้อมนำเสนอเทคโนโลยี IoT ที่ใช้งานง่าย ไม่ซับซ้อน และช่วยให้คุณสามารถลดต้นทุนการดำเนินงาน รวมทั้งเพิ่มประสิทธิภาพการทำงานในระยะยาว"
            logo={<img src={iots4} alt="Loading..." />}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 ">
        {/* ปุ่ม 1 */}
        <Link
          to="/contact" // เส้นทางไปหน้าแรก
          className="w-full sm:w-1/3 bg-blue-500 text-white text-xl font-bold py-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all text-center"
        >
         ติดต่อเรา
        </Link>

        {/* ปุ่ม 2 */}
        <Link
          to="/contact" // เส้นทางไปหน้าที่สอง
          className="w-full sm:w-1/3 bg-green-500 text-white text-xl font-bold py-6 rounded-lg shadow-lg hover:bg-green-600 transition-all text-center"
        >
          ให้เราติดต่อคุณ
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

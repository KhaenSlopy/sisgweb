import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FloatingIcons from "../components/FloatingIcons";
import logo from "../asset/png/logosss.png";
import thinglogo from "../asset/png/thing.png";

function About() {
  const designweb = {
    fontSize: "25px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  
  return (
    <div className="pt-16 rounded-lg shadow-lg">
      <FloatingIcons />
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* หัวข้อ */}
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={logo}
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
            เกี่ยวกับเรา
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            <b> สโลปี้ อินโนเวท สมาร์ทเจน (Slopy Innovat Smart GEN)</b> <br />
            ถูกก่อตั้งขึ้นเมื่อปี 2567 เพื้อช่วยให้ผู้ประกอบการ
            เข้าถึงการสร้างเว็บไซต์ ระบบร้านค้า ร้านค้าออนไลน์
            และผู้ประกอบการด้านงานเกษตร สะดวก รวดเร็ว ค่าใช้จ่ายต่ำ
            ทำระบบให้ครบวงจร ไม่ว่าจะเป็นผู้ประกอบการส่วนตัว ธุรกิจขนากเล็ก
            ธุรกิจขนาดกลาง และหน่วยงานต่างๆ <br />
            ด้วยการพัฒนาเทคโนโลยีสารสนเทศอย่างต่อเนื่อง
            ทั้งให้คำแนะนำให้แก่ผู้ประกอบการให้เข้าใจ ในการใช้ระบบ
            <br />
            พัฒนาระบบให้ผู้ประกอบการจัดการระบบให้ง่ายยิ่งขึ้น ในงบราคาประหยัด
            <br />
            เราหวังว่าจะได้รับความไว้วางจากท่าน ในการรับทำเว็บไซต์แก่ท่าน
            ไม่ว่าจะเป็นเว็บไซต์บริษัทหรือเว็บไซต์
            หรือบริการอื่นๆที่เราให้บริการ
          </p>
          <br />
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
            วัฒนธรรมองค์กร
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            <b> ความยืดหยุ่นและการทำงานแบบ WFH 100% </b>
            เราสนับสนุนการทำงานจากที่บ้านเต็มรูปแบบ (Work From Home 100%)
            เพื่อเพิ่มความสะดวกสบาย ลดความเครียดจากการเดินทาง
            และช่วยให้ทีมสามารถโฟกัสกับงานในบรรยากาศที่เหมาะสมที่สุดสำหรับตัวเอง
            <br />
            <b>เปิดรับไอเดียใหม่และการสร้างนวัตกรรม </b>
            เราให้ความสำคัญกับความคิดสร้างสรรค์และไอเดียใหม่ๆ ของทุกคนในทีม
            ไม่ว่าจะเป็นการออกแบบเว็บไซต์ โมบายแอปพลิเคชัน IoT หรือระบบฐานข้อมูล
            เราเปิดโอกาสให้ทีมงานทุกคนมีส่วนร่วมในการพัฒนาและสร้างนวัตกรรมที่ตอบโจทย์โลกธุรกิจ{" "}
            <br />
            <b>ความสัมพันธ์ที่อบอุ่นและเป็นกันเอง</b> ถึงแม้เราจะเป็นทีมขนาดเล็ก
            แต่เราสร้างความสัมพันธ์ที่ดีในทีม ด้วยการสนับสนุนซึ่งกันและกัน
            ช่วยเหลือในทุกขั้นตอนของการทำงาน
            และส่งเสริมบรรยากาศการทำงานที่เป็นกันเอง <br />
            <b> พัฒนาตัวเองอย่างต่อเนื่อง </b>
            ทีมของเรามุ่งมั่นที่จะเรียนรู้และพัฒนาทักษะใหม่ๆ อยู่เสมอ
            ไม่ว่าจะเป็นเทคโนโลยีใหม่ แนวคิดการออกแบบ
            หรือกระบวนการพัฒนาซอฟต์แวร์
            เพื่อให้ทีมเติบโตอย่างต่อเนื่องไปพร้อมกับโลกเทคโนโลยี <br />
           <b> ทำงานด้วยความรับผิดชอบและยืดหยุ่น </b>
            แม้ว่าเรายังไม่ได้จดทะเบียนเป็นบริษัทหรือเสียภาษี
            แต่ทุกโปรเจกต์ที่เราทำ เราใส่ใจในคุณภาพและส่งมอบงานด้วยความรับผิดชอบ
            ทีมของเรายึดมั่นในคำพูดและความเชื่อมั่นที่ลูกค้ามีให้
          </p>
        </div>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={thinglogo}
            className="p-4 w-full md:w-2/3 lg:w-auto object-cover"
            alt="Web Design"
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

export default About;

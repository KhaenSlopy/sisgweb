import React from "react";
import { Link } from "react-router-dom";
import FloatingIcons from "../../components/FloatingIcons";
import Footers from "../../components/Footer";
import designlogo from "../../asset/png/iotp1.png";

function iotpage() {
  const designweb = {
    fontSize: "25px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  const cards = [
    {
      title: "IoT-Starter Package",
      description:
        "✅Wiring diagram \n✅รายการอุปกรณ์ \n ✅สะดวก ทันสมัย",
      price: "500.- (ราคาเริ่มต้น)",
    },
    {
      title: "IoT-Database Package",
      description: `✅ออกแบบระบบฐานข้อมูล \n✅จัดการระบบฐานข้อมูล \n✅โปรโตคอลการสื่อสารของ IoT \n✅ปลอดภัย \n ✅Report Data`,
      price: "2,500.-(ราคาเริ่มต้น)",
    },

    {
      title: "IoT-Selver Package",
      description:
        "✅Wiring diagram \n✅รายการอุปกรณ์ \n✅Code คำสั่งอุปกรณ์ ",
      price: "1,000.- (ราคาเริ่มต้น)",
    },
    {
      title: "IoT-Premium Package",
      description:
        "✅Wiring diagram \n✅รายการอุปกรณ์ \n✅จัดการระบบฐานข้อมูล \n✅โปรโตคอลการสื่อสารของ IoT \n✅ระบบReport \n ✅ระบบควบคุมผ่าน Mobile \n ✅เก็บข้อมูลและวิเคราะห์",
      price: "1,500.-(ราคาเริ่มต้น)",
    },
  ];

 

  const Card = ({ title, description, price }) => {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-5 text-center border-2 border-blue-500">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="text-gray-600 whitespace-pre-wrap mb-4">
          {description}
        </div>
        <h4 className="text-xl font-bold mb-2 text-red-600">{price}</h4>
        <Link
          to="/contact" // เปลี่ยน URL ตามที่ต้องการ
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center block"
        >
          สอบถามบริการ
        </Link>
      </div>
    );
  };
  
  return (
    <div className="pt-16 rounded-lg shadow-lg">
      <FloatingIcons />
      <div className="pt-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-8">
        <h2 className="text-2xl font-bold">&nbsp; &nbsp;</h2>

        {/* รูปภาพ */}
        <div className="flex-shrink-0">
          <img
            src={designlogo}
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
            บริการออกแบบและพัฒนาระบบIoT
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            เรามีความรู้ความสามารถในการออกแบบและพัฒนาระบบ Internet of Things (IoT)
            ที่เชื่อมต่อโลกของอุปกรณ์ต่างๆ
            เพื่อเพิ่มประสิทธิภาพในการทำงานและความสะดวกสบายให้กับธุรกิจของคุณ <br/>✅
            ออกแบบและพัฒนาระบบ IoT ที่เหมาะสมกับธุรกิจทุกประเภท <br/>✅
            เชื่อมต่ออุปกรณ์ เช่น เซ็นเซอร์, เครื่องมือ, และระบบต่างๆ
            ได้อย่างสมบูรณ์ <br/>✅ รองรับการควบคุมจากระยะไกล ผ่านมือถือหรือเว็บไซต์
            <br/>✅ เก็บข้อมูลและวิเคราะห์
            เพื่อเพิ่มประสิทธิภาพและการตัดสินใจที่แม่นยำ <br/>✅ ระบบปลอดภัย
            พร้อมการเชื่อมต่อที่มั่นคงและมีประสิทธิภาพ
          </p>
          <br />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-bold text-blue-600">
          แพคเกจระบบIoT
        </h1>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-center ">
        <p className="text-1xl  text-red-600">
          *ราคาไม่รวม VAT7% <br /> *ราคาอาจผันตามอุปกรณ์IoT ที่ต้องการ <br />
          *ราคาอาจมีการเปลี่ยนแปลงหากต้องการเพิ่มเติมนอกPackage
          <br /> <br />
        </p>
      </div>
      <Footers />
    </div>
  );
}

export default iotpage;

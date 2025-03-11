import React from "react";
import { Link } from "react-router-dom";
import FloatingIcons from "../../components/FloatingIcons";
import Footers from "../../components/Footer";
import designlogo from "../../asset/png/dbapp1.png";

function database() {
  const designweb = {
    fontSize: "25px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  const cards = [
    {
      title: "Database-Starter Package",
      description: "✅ออกแบบ \n✅ดูแลระบบฐานข้อมูล \n ✅ไม่เกิน 2 Database",
      price: "1,000.- (ราคาเริ่มต้น)/เดือน",
    },
    

    {
      title: "Database-Selver Package",
      description: "✅ออกแบบ \n✅ดูแลระบบฐานข้อมูล \n ✅ไม่เกิน 5 Database  \n ✅SSL ",
      price: "2,500.- (ราคาเริ่มต้น)/เดือน",
    },
    {
      title: "Database-Premium Package",
      description:
        "✅ออกแบบ \n✅ดูแลระบบฐานข้อมูล \n ✅ไม่เกิน 10 Database  \n ✅SSL",
      price: "3,500.-(ราคาเริ่มต้น)",
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
            บริการออกแบบและจัดการระบบฐานข้อมูล
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            เรามีความรู้ความสามารถในการออกแบบและจัดการ ระบบฐานข้อมูล
            ที่มีความเสถียรและประสิทธิภาพสูง
            เพื่อรองรับการทำงานและการขยายตัวของธุรกิจในทุกๆ ด้าน <br/>✅
            ออกแบบฐานข้อมูลที่ตอบโจทย์ธุรกิจ
            รองรับข้อมูลจำนวนมากและการทำงานที่มีประสิทธิภาพ <br/>✅
            ระบบจัดการฐานข้อมูล (DBMS) เช่น MySQL, SQL Server, PostgreSQL หรือ
            NoSQL <br/>✅ การออกแบบโครงสร้างฐานข้อมูล ที่ใช้งานง่ายและเป็นระเบียบ <br/>✅
            เพิ่มประสิทธิภาพการทำงาน ด้วยการปรับปรุงและจัดการดัชนี
            การจัดเรียงข้อมูล และการสำรองข้อมูล <br/>✅ รองรับการบูรณาการระบบต่างๆ
            เช่น ERP, CRM หรือระบบอื่นๆ ภายในองค์กร
          </p>
          <br />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-bold text-blue-600">แพคเกจระบบฐานข้อมูล</h1>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <p className="text-1xl  text-red-600">
          *ราคาไม่รวม VAT7% <br /> *ราคาไม่รวม Host และ Domain <br />
          *ราคาอาจมีการเปลี่ยนแปลงหากต้องการเพิ่มเติมนอกPackage
          <br /> <br />
        </p>
      </div>
      <Footers />
    </div>
  );
}

export default database;

import React from "react";
import { Link } from "react-router-dom";
import FloatingIcons from "../../components/FloatingIcons";
import Footers from "../../components/Footer";
import designlogo from "../../asset/png/mbapp1.png";

function mobileapp() {
  const designweb = {
    fontSize: "25px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  const cards = [
    {
      title: "โมบายแอพพลิเคชัน OnePage",
      description:
        "✅ไม่เกิน 1 Page \n✅รูปภาพไม่เกิน 20 ภาพ \n ✅ใส่สินค้าได้ 10 รายการ \n ✅ความสวยงาม ทันสมัย",
      price: "1,500.-",
    },
    {
      title: "Mobile-Basicdesign Package",
      description: `✅ไม่เกิน 25 Page \n✅รูปภาพไม่เกิน 30 ภาพ \n✅ใส่สินค้าได้ 20 รายการ \n✅ความสวยงาม ทันสมัย `,
      price: "2,500.-",
    },

    {
      title: "Mobile-Premium Package",
      description:
        "✅ไม่เกิน 25 Page \n✅รูปภาพไม่เกิน 20 ภาพ \n✅ใส่สินค้าได้ 20 รายการ \n✅ความสวยงาม ทันสมัย ",
      price: "3,500.-",
    },
    {
      title: "Mobile-Ecommerce Package",
      description:
        "✅ไม่เกิน 50 Page \n✅รูปภาพไม่เกิน 100 ภาพ \n✅ระบบตะกร้าสินค้า ระบบสั่งซื้อออนไลน์ \n✅ความสวยงาม ทันสมัย  \n✅เพิ่มเติมได้",
      price: "6,000.-",
    },
  ];

  const cradDev = [
    {
      title: "Mobile-Basic Package",
      description:
        "✅ไม่เกิน 1 Page \n✅รูปภาพไม่เกิน 20 ภาพ \n✅ปลอดภัย\n ✅ใส่สินค้าได้ 10 รายการ \n ✅ความสวยงาม ทันสมัย \n ✅Android \n ✅web",
      price: "8,000.-",
    },
    {
      title: "Mobile-Business Package",
      description:
        "✅ไม่เกิน 20 Page \n✅รูปภาพไม่เกิน 50 ภาพ \n ✅ปลอดภัย \n ✅ความสวยงาม ทันสมัย \n✅เพิ่มเติมได้ \n ✅Android \n✅IOS \n ✅web",
      price: "18,500.-",
    },
    {
      title: "Mobile-Ecommerce Package",
      description:
        "✅ไม่เกิน 50 Page \n✅รูปภาพไม่เกิน 100 ภาพ \n✅ระบบตะกร้าสินค้า ระบบสั่งซื้อออนไลน์ \n✅ความสวยงาม ทันสมัย  \n✅เพิ่มเติมได้ \n ✅Android \n✅IOS \n ✅web",
      price: "22,500.-",
    },
    {
      title: "Mobile-Custom Package",
      description:
        "✅ระบบตามความต้องการ \n✅พร้อมออกแบบ \n✅ความสวยงาม ทันสมัย  \n✅เพิ่มเติมได้ \n ✅Android \n✅IOS \n ✅web",
      price: "28,500.- (ราคาเริ่มต้น)",
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
  const CardDevs = ({ title, description, price }) => {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-5 text-center border-2 border-green-500">
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
            บริการพัฒนาโมบายแอพพลิเคชัน
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            เราคือผู้เชี่ยวชาญในการออกแบบและพัฒนา โมบายแอพพลิเคชัน
            ที่ตอบโจทย์ทุกความต้องการของธุรกิจคุณ
            ทั้งในด้านการใช้งานที่สะดวกสบาย และประสิทธิภาพที่สูงสุด <br/>✅ พัฒนาแอพฯ
            สำหรับทั้ง iOS และ Android พร้อมดีไซน์ที่สวยงามและใช้งานง่าย <br/>✅
            ระบบที่รวดเร็วและปลอดภัย รองรับการเชื่อมต่อและการทำงานแบบไร้รอยต่อ
            <br/>✅ แอพพลิเคชันที่ปรับตัวได้ รองรับการขยายตัวของธุรกิจในอนาคต <br/>✅
            ฟีเจอร์ครบครัน เช่น ระบบจัดการข้อมูล, ระบบการชำระเงินออนไลน์,
            และการเชื่อมต่อกับระบบต่างๆ <br/>✅
            ออกแบบเพื่อประสบการณ์ผู้ใช้ที่ดีที่สุด (UX/UI)
          </p>
          <br />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-bold text-blue-600">
          แพคเกจออกแบบโมบายแอพพลิเคชัน
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
        <h1 className="text-4xl font-bold text-green-600">
          แพคเกจพัฒนาโมบายแอพพลิเคชัน
        </h1>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cradDev.map((card, index) => (
            <CardDevs key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-1xl  text-red-600">
          *ราคาไม่รวม VAT7% <br /> *ราคาไม่รวม Domain และ Hosting <br />
          *ราคาอาจมีการเปลี่ยนแปลงหากต้องการเพิ่มเติมนอกPackage
          <br /> <br />
        </p>
      </div>
      <Footers />
    </div>
  );
}

export default mobileapp;

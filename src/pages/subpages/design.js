import React from "react";
import { Link } from "react-router-dom";
import FloatingIcons from "../../components/FloatingIcons";
import Footers from "../../components/Footer";
import designlogo from "../../asset/png/webp1.png";

function design() {
  const designweb = {
    fontSize: "25px",
    fontweight: "bold",
    color: "#338dff",
    fontfamily: "Monospace",
  };
  const cards = [
    {
      title: "เว็บไซต์หน้าเดียว OnePage",
      description:
        "✅ไม่เกิน 1 Page \n✅รูปภาพไม่เกิน 20 ภาพ \n ✅ใส่สินค้าได้ 10 รายการ \n ✅ความสวยงาม ทันสมัย",
      price: "1,500.-",
    },
    {
      title: "Basic Package",
      description: `✅ไม่เกิน 25 Page \n✅รูปภาพไม่เกิน 30 ภาพ \n✅ใส่สินค้าได้ 20 รายการ \n✅ความสวยงาม ทันสมัย \n ✅รองรับทุกจอ`,
      price: "2,500.-",
    },

    {
      title: "Premium Package",
      description:
        "✅ไม่เกิน 25 Page \n✅รูปภาพไม่เกิน 20 ภาพ \n✅ใส่สินค้าได้ 20 รายการ \n✅ความสวยงาม ทันสมัย \n ✅รองรับทุกจอ",
      price: "3,500.-",
    },
    {
      title: "Ecommerce Package",
      description:
        "✅ไม่เกิน 50 Page \n✅รูปภาพไม่เกิน 100 ภาพ \n✅ระบบตะกร้าสินค้า ระบบสั่งซื้อออนไลน์ \n✅ความสวยงาม ทันสมัย \n ✅รองรับทุกจอ \n✅เพิ่มเติมได้",
      price: "6,000.-",
    },
  ];

  const cradDev = [
    {
      title: "เว็บไซต์หน้าเดียว OnePage",
      description:
        "✅ไม่เกิน 1 Page \n✅รูปภาพไม่เกิน 20 ภาพ \n✅ปลอดภัย\n ✅ใส่สินค้าได้ 10 รายการ \n ✅ความสวยงาม ทันสมัย \n ✅รองรับทุกจอ",
      price: "8,000.-",
    },
    {
      title: "Business Package",
      description:
        "✅ไม่เกิน 20 Page \n✅รูปภาพไม่เกิน 50 ภาพ \n ✅ปลอดภัย \n ✅ความสวยงาม ทันสมัย \n✅เพิ่มเติมได้ \n ✅รองรับทุกจอ",
      price: "12,500.-",
    },
    {
      title: "Ecommerce Package",
      description:
        "✅ไม่เกิน 50 Page \n✅รูปภาพไม่เกิน 100 ภาพ \n✅ระบบตะกร้าสินค้า ระบบสั่งซื้อออนไลน์ \n✅ความสวยงาม ทันสมัย  \n✅เพิ่มเติมได้ \n ✅รองรับทุกจอ",
      price: "15,000.-",
    },
    {
      title: "Custom Package",
      description:
        "✅ระบบตามความต้องการ \n✅พร้อมออกแบบ \n✅ความสวยงาม ทันสมัย  \n✅เพิ่มเติมได้ \n ✅รองรับทุกจอ",
      price: "22,000.- (ราคาเริ่มต้น)",
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
            บริการออกแบบและพัฒนาเว็บไซต์
          </strong>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            เราคือผู้ออกแบบและพัฒนาเว็บไซต์
            ที่พร้อมช่วยให้ธุรกิจของคุณโดดเด่นและเติบโตในโลกออนไลน์ ไม่ว่าจะเป็น
            เว็บไซต์บริษัท, ร้านค้าออนไลน์ (E-Commerce), เว็บแอปพลิเคชัน หรือ
            เว็บไซต์เฉพาะทาง เราพร้อมให้บริการแบบครบวงจร <br /> ✅ ออกแบบสวย
            ทันสมัย ตามเอกลักษณ์ของธุรกิจคุณ <br />✅ พัฒนาเว็บไซต์มาตรฐานสูง
            รองรับทุกอุปกรณ์ (Responsive Design) <br />✅ ระบบใช้งานง่าย ปลอดภัย
            รองรับ SEO <br />✅ รองรับการขยายตัวของธุรกิจ
            พร้อมฟังก์ชันที่ปรับแต่งได้ตามต้องการ
          </p>
          <br />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-bold text-blue-600">
          แพคเกจออกแบบเว็บไซต์
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
          แพคเกจพัฒนาเว็บไซต์
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

export default design;

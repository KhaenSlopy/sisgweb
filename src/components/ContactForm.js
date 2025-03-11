import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      title,
      message,
    };

    // URL ของ Discord Webhook ที่คุณคัดลอกมา
    const discordWebhookURL =
      "https://discordapp.com/api/webhooks/1334166282974793789/ouDWj-lXhXhEXp4Us6DBvn2VthkxKKam_2J4lt8tnWkIhpFP-xW1pXzEdp000A9r6wpK";

    const discordMessage = {
      content: `**Slopy Innovat Smart GEN Contact**\n
      **Name**: ${formData.name}\n
      **Email**: ${formData.email}\n
      **Phone**: ${formData.phone}\n
      **Title**: ${formData.title}\n
      **Message**: ${formData.message}`,
    };

    try {
      // ส่งข้อมูลไปที่ Discord Webhook
      const response = await fetch(discordWebhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        // ใช้ SweetAlert2 เมื่อส่งข้อความสำเร็จ
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        // ใช้ SweetAlert2 เมื่อส่งข้อความไม่สำเร็จ
        Swal.fire({
          title: "Error!",
          text: "Failed to send message.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while sending the message.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">
          ชื่อ
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="ชื่อ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          อีเมล (Email Address)
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="อีเมล (Email Address)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium">
          มือถือ
        </label>
        <input
          type="phone"
          id="phone"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="เบอร์มือถือ"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium">
          หัวข้อ
        </label>
        <textarea
          id="title"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="หัวข้อ"
          rows="4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium">
          ข้อความ
        </label>
        <textarea
          id="message"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="ข้อความ(ถ้ามี)"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

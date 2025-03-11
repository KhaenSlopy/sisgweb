import React from "react";

function Card({ title, content, logo }) {
  return (
    <div className="group p-8 rounded-2xl shadow-lg bg-white hover:bg-blue-100 transition-colors duration-300 flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-2">{logo}</div>
      <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
      <p className="text-black-600">{content}</p>
    </div>
  );
}
export default Card;

import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative text-center w-full px-5 bg-[#8A226F] rounded-[90px] text-white py-2 font-[500] font-sans bg-gradient-to-t from-[#FE2C5533] to-purple-500"
    >
      {children}
      {/* Bottom Gradient Shadow */}
      <span className="absolute inset-x-0 -bottom-3 h-3 bg-gradient-to-b from-[#FE2C55]/80 bg-red-300 to-transparent blur-lg"></span>
    </button>
  );
}

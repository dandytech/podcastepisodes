import React from "react";

export default function InputBox({ placeholder, type }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        className="border shadow-sm  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl"
      />
    </div>
  );
}

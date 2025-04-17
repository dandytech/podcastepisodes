import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ViewAll() {
  return (
    <div>
      <button className="flex gap-2 items-center px-3 text-[#9747FF] font-[500] text-[15px] py-1 border mr-10 rounded-2xl border-[#9747FF] ">
        <span>View All</span>
        <span>
          <IoIosArrowRoundForward />
        </span>{" "}
      </button>
    </div>
  );
}

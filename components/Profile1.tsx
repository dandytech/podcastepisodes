import React from "react";
import InputBox from "./InputBox";

import MyButton from "./MyButton";

// Define the props type for the component
interface Details1Props {
  handleTabClick: (tab: number) => void; // handleTabClick expects a function that takes a number and returns void
}

const Details1: React.FC<Details1Props> = ({ handleTabClick }) => {
  return (
    <div className="flex flex-col ">
      <div>
        <p className="text-[#000000E5] font-[500] font-sans text-[24px]">
          Enter your phone number or email to get started
        </p>
        <p className="text-[#00000099] font-[400] font-s text-[14px] mt-3">
          We will send you a verification code for confirmation
        </p>
        <div className="w-full mt-10">
          <InputBox placeholder="Enter phone number or email" type="email" />
        </div>
      </div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>

      <div className="mt-10">
        <hr className="h-2" />
        <div className="mt-3">
          <MyButton onClick={() => handleTabClick(2)}>Continue</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Details1;

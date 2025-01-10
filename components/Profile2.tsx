import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import instagram from "../public/instagram.png";
import tiktok from "../public/tiktok.png";
import google from "../public/google-1.png";

import Image from "next/image";

// Define the props type for the component
interface Details2Props {
  handleTabClick: (tab: number) => void; // handleTabClick expects a function that takes a number and returns void
}

const Details2: React.FC<Details2Props> = ({ handleTabClick }) => {
  return (
    <div className="flex flex-col ">
      <div>
        <p className="text-[#000000E5] font-[500] font-sans text-[24px]">
          Complete profile setup
        </p>
        <p className="text-[#00000099] font-[400] font-s text-[14px] mt-3">
          Connect your socials for quick setup
        </p>

        <div className="flex justify-between gap-1 items-center mt-5">
          <button className="bg-[#00000008] rounded-xl border p-5 w-[30%] items-center flex justify-center">
            <Image
              src={instagram}
              quality={0}
              className="object-cover object-top"
              alt="instagram icon"
            />
          </button>
          <button className="bg-[#00000008] rounded-xl border p-5 w-[30%] items-center flex justify-center">
            <Image
              src={tiktok}
              quality={0}
              className="object-cover object-top"
              alt="tiktok icon"
            />
          </button>
          <button className="bg-[#00000008] rounded-xl border p-5 w-[30%] items-center flex justify-center">
            <Image
              src={google}
              quality={0}
              className="object-cover object-top"
              alt="google icon"
            />
          </button>
        </div>
        <div className="w-full mt-10">
          <InputBox placeholder="Full name" type="text" />
        </div>
        <div className="w-full mt-3">
          <InputBox placeholder="Username" type="text" />
        </div>
        <div className="w-full mt-3">
          <InputBox placeholder="Phone number" type="text" />
        </div>
        <div className="w-full mt-3">
          <InputBox placeholder="Email" type="email" />
        </div>
      </div>

      <div className="mt-20">
        <hr className="h-2" />
        <div className="mt-3">
          <Button onClick={() => handleTabClick(3)}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Details2;

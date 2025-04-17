import Image from "next/image";
import React from "react";
import gift from "@/public/icons/gift.png";
import share from "@/public/icons/share.png";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Make onClick optional
}

const ShareButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="flex gap-1 items-center">
      {" "}
      <button className="p-3 rounded-full  w-[50px] h-[50px]">
        <Image
          src={share}
          quality={100}
          className="object-cover object-top w-full"
          alt="logo"
        />
      </button>
      <button className="p-3 rounded-full  w-[50px] h-[50px]">
        <Image
          src={gift}
          quality={100}
          className="object-cover object-top w-full"
          alt="logo"
        />
      </button>
    </div>
  );
};

export default ShareButton;

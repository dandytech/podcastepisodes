import Image from "next/image";
import React from "react";
import gift from "@/public/icons/gift.png";
import share from "@/public/icons/share.png";

interface ButtonProps {
  onClick?: () => void; // Make onClick optional
}

const ShareButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="flex gap-1 items-center">
      <button className="p-3 rounded-full w-[50px] h-[50px]" onClick={onClick}>
        <Image
          src={share}
          quality={100}
          className="object-cover object-top w-full"
          alt="Share"
        />
      </button>
      <button className="p-3 rounded-full w-[50px] h-[50px]" onClick={onClick}>
        <Image
          src={gift}
          quality={100}
          className="object-cover object-top w-full"
          alt="Gift"
        />
      </button>
    </div>
  );
};

export default ShareButton;

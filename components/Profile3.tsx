import Image from "next/image";
import React from "react";
import pic from "../public/pic.png";
import InputBox from "./InputBox";
import Button from "./Button";
import Link from "next/link";
// Define the props type for the component
interface Details3Props {
  handleTabClick: (tab: number) => void; // handleTabClick expects a function that takes a number and returns void
}

const Details3: React.FC<Details3Props> = ({ handleTabClick }) => {
  return (
    <div>
      <div className="border flex flex-col w-full items-center py-5 rounded-xl">
        <p>
          <span className="rounded-full">
            <Image
              src={pic}
              quality={0}
              className="object-cover object-top"
              alt="tiktok icon"
            />
          </span>
        </p>
        <p className="font-[400] text-[12px] text-[#00000066]">
          Upload store logo
        </p>
      </div>
      <div className="mt-3">
        <InputBox placeholder="Store name" type="text" />
      </div>
      <div className="mt-3">
        <InputBox placeholder="Store tag name" type="text" />
      </div>
      <div className="mt-3">
        <InputBox placeholder="Store phone number" type="text" />
      </div>
      <div className="mt-3">
        <InputBox placeholder="Store email" type="text" />
      </div>
      <div className="mt-3">
        <InputBox placeholder="Category" type="text" />
      </div>
      <div className="mt-10">
        <Button>
          <Link href="/productDetails">Continue</Link>
        </Button>
      </div>
    </div>
  );
};

export default Details3;

import Image from "next/image";
import React from "react";
import shopimg from "@/public/shopimg.png";

import check_circle from "@/public/check_circle.png";

import Link from "next/link";
import MyButton from "@/components/MyButton";
const homedata = [
  {
    icon: check_circle,
    id: 1,
    text: "Reach Millions of Shoppers",
  },
  {
    icon: check_circle,
    id: 2,
    text: "Easy Product Listing",
  },
  {
    icon: check_circle,
    id: 3,
    text: "Secure and Fast Payments",
  },
  {
    icon: check_circle,
    id: 4,
    text: "Boost Your Visibility",
  },
];
function index() {
  return (
    <div className="p-5 flex items-center flex-col justify-center">
      <div>
        {" "}
        <Image
          src={shopimg}
          quality={70}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
        />
      </div>
      <div className="relative mt-10 w-full">
        <p className="w-[700] font-sans text-[36px] text-center">Welcome</p>
        <p className="font-sans text-[14px] justify-center text-center w-[500] text-[#000000E5]">
          The safest platfrom to shop from social media vendors
        </p>
      </div>

      <div className="bg-[#FFEAFA] border rounded-xl p-5 mt-10 border-[##FE2C5533] w-full">
        {homedata.map((textData) => (
          <p className="flex gap-2 space-y-2 items-center" key={textData.id}>
            <span>
              <Image
                src={textData.icon}
                //fill
                // placeholder="blur"
                quality={70}
                className="object-cover object-top"
                alt="store image"
              />
            </span>
            <span className="text-[#00000] text-[14px] font-sans">
              {textData.text}
            </span>
          </p>
        ))}
      </div>

      <div className="w-full px-5 mt-10">
        <Link href="/profile">
          <MyButton onClick={() => {}}>Get started</MyButton>
        </Link>
      </div>
    </div>
  );
}

export default index;

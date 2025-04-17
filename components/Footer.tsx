import React from "react";
import logo2 from "@/public/images/logo2.png";
import instagram from "@/public/icons/inst.png";
import facebook from "@/public/icons/fb.png";
import x from "@/public/icons/x.png";
import info from "@/public/icons/info.png";
import indeed from "@/public/icons/indeed.png";

import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-[url('/images/footerbg.png')] bg-cover bg-center bg-no-repeat overflowX">
      <div className="lg:p-10 p-5 py-5 md:text-center flex flex-col gap-10">
        {/* logo section */}
        <div className="px-5">
          <Image
            src={logo2}
            quality={100}
            className="object-cover object-top"
            alt="logo2"
          />
        </div>

        {/* menu section */}
        <div className="lg:flex flex-wrap items-center justify-start gap-12">
          <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2">
            HOME
          </button>
          <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2 border-l border-l-white">
            ABOUT US
          </button>
          <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2 border-l border-l-white">
            CONTACT US
          </button>
          <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2 border-l border-l-white">
            ALL PODCAST
          </button>

          <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2 border-l border-l-white">
            ADVERTISE
          </button>
          <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2 border-l border-l-white">
            RESOURCES
          </button>
          <div className="flex items-center gap-3">
            <button className="text-[#C9C9C9] font-[700] text-[16px] px-5 py-2 border-l border-l-white">
              CONNECT WITH ABR
            </button>
            <button>
              <Image
                src={instagram}
                quality={100}
                className="object-cover object-top"
                alt="logo2"
              />
            </button>
            <button>
              <Image
                src={facebook}
                quality={100}
                className="object-cover object-top"
                alt="logo2"
              />
            </button>
            <button>
              <Image
                src={x}
                quality={100}
                className="object-cover object-top"
                alt="logo2"
              />
            </button>
            <button>
              <Image
                src={info}
                quality={100}
                className="object-cover object-top"
                alt="logo2"
              />
            </button>
            <button>
              <Image
                src={indeed}
                quality={100}
                className="object-cover object-top"
                alt="logo2"
              />
            </button>
          </div>
        </div>

        {/* Copy wright section */}
        <div className="lg:flex flex-wrap justify-start gap-10 items-center text-white font-[500] text-[14px] px-5">
          <div>. © Copyright 2021. All Rights Reserved. </div>
          <button>Terms & conditions </button>
          <button>Privacy policy</button>
        </div>
      </div>
    </div>
  );
}

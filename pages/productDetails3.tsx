import Link from "next/link";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import image from "@/public/lady.png";
import love from "@/public/love.png";
import arrow from "@/public/arrow.png";
import star from "@/public/star.png";
import star2 from "@/public/star2.png";
import gucci from "@/public/gucci.png";
import Image from "next/image";
import group from "@/public/group.png";
import star3 from "@/public/star3.png";
import eclipse from "@/public/eclipse.png";

import ReadMore from "@/components/ReadMore";
import TruncatedText from "@/components/TruncatedText";

import MyButton from "@/components/MyButton";
export default function productDetails3() {
  const text =
    "For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, quam eu fringilla consectetur, justo elit suscipit metus, eu consequat eros dolor at ligula.";

  const vendorDescription =
    "Vendor description: You can track your parcel on the following website using your tracking number: www.17track.net. Please ensure you have the correct tracking number before proceeding.";

  return (
    <div>
      <p className="flex items-center justify-between">
        <button className="flex items-center gap-2">
          <Link href="/productDetails2">
            <IoArrowBack />
          </Link>
          <span className="text-[#000000E5] font-[500] text-[16px] font-sans">
            Product details
          </span>
        </button>
        <button>
          <FaEllipsisVertical />
        </button>
      </p>

      <div className="relative w-full mt-3">
        <Image
          src={image}
          quality={80}
          className="object-cover object-top  w-full"
          alt=" icon"
        />
      </div>

      <div className="flex gap-2 mt-3 ">
        <span>Gucci bag – the epitome of luxury and sophistication</span>
        <span className="rounded-full bg-[#0000000D] flex items-center justify-center h-[40px] w-[50px] p-2">
          <Image
            src={arrow}
            quality={80}
            className="object-cover object-top"
            alt=" icon"
          />
        </span>
        <span className="rounded-full bg-[#0000000D] flex items-center justify-center h-[40px] w-[50px] p-2">
          <Image
            src={love}
            quality={80}
            className="object-cover object-top"
            alt=" icon"
          />
        </span>
      </div>

      <div className="flex gap-2 mt-3  justify-between items-center">
        <div className="flex gap-1 items-center">
          <span className="font-[500] text-[#3B3B3B] font-san text-[20px]">
            ₦18.0
          </span>
          <span className="font-[500] text-[#ACACAC] text-[12px] font-sans">
            ₦28.0
          </span>
          <span className="font-[400] text-[#FFFFFF] text-[10px] font-san bg-[#8A226F] px-3 py-1 rounded-full">
            25% OFF
          </span>
        </div>
        <div className="flex gap-1 items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index} // Use index as key since the content is static
              src={star}
              quality={80}
              className="object-cover object-top"
              alt="icon"
            />
          ))}
          <Image
            src={star2}
            quality={80}
            className="object-cover object-top"
            alt=" icon"
          />
          <span className="font-[500] text-[#ACACAC] text-[12px] font-sans">
            (5 sold)
          </span>
        </div>
      </div>

      <div className="mt-7">
        <p className="text-[#000000] font-[500] text-[14px] font-sans">
          Select variants
        </p>

        <div className="mt-2">
          <p>
            <span className="text-[#00000099] text-[10px] font-sans font-[500]">
              Size: SMALL
            </span>
          </p>
          <p className="flex gap-1 flex-wrap">
            <button className="bg-[#000000E5] rounded-full px-3 py-1 text-white text-[12px] fonr-[400] font-sans ">
              Filter
            </button>
            {[...Array(5)].map((_, index) => (
              <button className="bg-gray-200 rounded-full px-3 py-1 text-[11px] fonr-[400] font-sans">
                Filter
              </button>
            ))}
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="text-[#00000099] text-[10px] font-sans font-[500]">
              Color: White
            </span>
          </p>
          <p className="flex gap-1 flex-wrap">
            {[...Array(3)].map((_, index) => (
              <button className="bg-gray-200 rounded-full px-3 py-1 text-[11px] fonr-[400] font-sans">
                Filter
              </button>
            ))}
          </p>
        </div>
      </div>

      <div>
        <p className="flex items-center justify-between mt-5 border-t pt-5">
          <span className="text-[##000000] text-[14px] font-sans font-[500]">
            Product description
          </span>

          <button className=" text-[12px] font-[500] font-sans text-xl">
            ⌄
          </button>
        </p>
        <div>
          <ReadMore text={text} maxLength={97} />
        </div>
      </div>

      <div>
        <p className="flex items-center justify-between mt-5 border-t pt-5">
          <span className="text-[##000000] text-[14px] font-sans font-[500]">
            About this vendor
          </span>

          <button className=" text-[12px] font-[500] font-sans text-xl">
            ⌄
          </button>
        </p>

        <div className="flex justify-between mt-3">
          <div className="flex gap-2 items-center">
            <div className="rounded-full p-1 shadow-sm h-[50px] w-[50px] flex items-center justify-center border relative">
              <Image
                src={gucci}
                fill
                quality={100}
                className="object-cover object-top"
                alt="icon"
              />
            </div>
            <div>
              <div className="text-[#000000E5] font-[500] text-[12px] font-sans">
                Gucci Store
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00000066] text-[12px] font-sans font-[400]">
                  Fashion
                </span>
                <span>
                  <Image
                    src={eclipse}
                    quality={100}
                    className="object-cover object-top"
                    alt="icon"
                  />
                </span>

                <div className="flex gap-1 items-center">
                  <span>
                    <Image
                      src={star3}
                      quality={100}
                      className="object-cover object-top"
                      alt="icon"
                    />
                  </span>
                  <span className="font-[400] font-sans text-[10px] text-[#00000066]">
                    5.4
                  </span>
                </div>

                <span>
                  <Image
                    src={eclipse}
                    quality={100}
                    className="object-cover object-top"
                    alt="icon"
                  />
                </span>

                <div className="flex gap-1 items-center">
                  <span>
                    <Image
                      src={group}
                      quality={100}
                      className="object-cover object-top"
                      alt="icon"
                    />
                  </span>
                  <span className="font-[400] font-sans text-[10px] text-[#00000066]">
                    100k
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#8A226F] font-[500] text-[12px] font-sans">
            Follow
          </div>
        </div>
        <div className="mt-3">
          <TruncatedText text={vendorDescription} maxLength={109} />
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-2">
            <span className="text-[#000000E5] font-[400] font-sans text-[10px] bg-gray-200 px-3 rounded-full py-1">
              Quality goods
            </span>
            <span className="text-[#000000E5] font-[400] font-sans text-[10px] bg-gray-200 px-3 rounded-full py-1">
              Nice designs
            </span>
            <span className="text-[#000000E5] font-[400] font-sans text-[10px] bg-gray-200 px-3 rounded-full py-1">
              Quality goods
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#000000E5] font-[400] font-sans text-[10px] bg-gray-200 px-3 rounded-full py-1">
              Nice designs
            </span>
            <span className="text-[#000000E5] font-[400] font-sans text-[10px] bg-gray-200 px-3 rounded-full py-1">
              Quality goods
            </span>
            <span className="text-[#000000E5] font-[400] font-sans text-[10px] bg-gray-200 px-3 rounded-full py-1">
              Nice designs
            </span>
          </div>
        </div>

        <div className="pt-5 border-t mt-7">
          <MyButton onClick={() => {}}>
            <Link href="/ssgproduct">Publish</Link>
          </MyButton>
        </div>
      </div>
    </div>
  );
}

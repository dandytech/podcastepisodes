import Link from "next/link";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import good from "@/public/good.png";

import Image from "next/image";

import Button from "@/components/Button";
import image from "@/public/productimg.png";
import imageicon from "@/public/imageicon.png";
import { FaEllipsisH } from "react-icons/fa";

const productimage = [
  {
    id: 1,
    img: image,
    name: "logo.Img",
  },
  {
    id: 2,
    img: image,
    name: "logo.Img",
  },
  {
    id: 3,
    img: image,
    name: "logo.Img",
  },
  {
    id: 4,
    img: image,
    name: "logo.Img",
  },
];

export default function productDetails() {
  return (
    <div>
      <p className="flex items-center justify-between">
        <button className="flex items-center gap-2">
          <Link href="/productDetails">
            <IoArrowBack />
          </Link>
          <span className="text-[#000000E5] text-[16px] font-sans">
            Product details
          </span>
        </button>
        <button>
          <FaEllipsisVertical />
        </button>
      </p>

      <p className="flex items-center justify-between mt-3">
        <button className="flex items-center gap-1 rounded-full px-3  py-1 border">
          <span className="text-[12px] w-[400] font-sans"> Draft</span>
          <span className="text-[#000000E5] text-[16px] font-sans">
            {" "}
            <Image
              src={good}
              quality={0}
              className="object-cover object-top"
              alt=" icon"
            />
          </span>
        </button>
        <button className="text-[#8A226F] text-[12px] font-[500] font-sans">
          Preview product
        </button>
      </p>

      <p className="flex items-center justify-between mt-5 border-t pt-2">
        <span className="text-[##000000] text-[14px] font-sans font-[500]">
          Basic Details
        </span>

        <button className=" text-[12px] font-[500] font-sans text-xl">⌄</button>
      </p>

      <div className="border shadow-sm mt-5  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl">
        <p className="text-[#00000099] font-[400] text-[10px] font-sans">
          Product Title
        </p>
        <p className="font-[500] text-[14px] font-sans text-[#000000E5]">
          Place holder
        </p>
      </div>

      <div className="border shadow-sm mt-5  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl">
        <p className="text-[#00000099] font-[400] text-[10px] font-sans">
          Product description
        </p>
        <p className="font-[500] text-[14px] font-sans text-[#000000E5]">
          Place holder
        </p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="border shadow-sm mt-5  border-[#00000033] px-5 py-3 h-full text-[14px] w-[45%]  rounded-xl">
          <p className="text-[#00000099] font-[400] text-[10px] font-sans">
            Price
          </p>
          <p className="font-[500] text-[14px] font-sans text-[#000000E5]">
            Place holder
          </p>
        </div>
        <div className="border shadow-sm mt-5 w-[45%]  border-[#00000033] px-5 py-3 h-full text-[14px]  rounded-xl">
          <p className="text-[#00000099] font-[400] text-[10px] font-sans">
            Old price
          </p>
          <p className="font-[500] text-[14px] font-sans text-[#000000E5]">
            Place holder
          </p>
        </div>
      </div>

      <div className="border shadow-sm mt-5  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl">
        <p className="text-[#00000099] font-[400] text-[10px] font-sans">
          Product description
        </p>
        <div className="flex justify-start items-center gap-5 mt-1">
          <div className="font-[500] text-[14px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Collection</span>
            <span>x</span>
          </div>
          <div className="font-[500] text-[14px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Interests</span>
            <span>x</span>
          </div>
        </div>
        <p className="text-[#00000099] text-[12px] font-[500] font-sans mt-3">
          Search or create collection
        </p>
      </div>

      <div className="border shadow-sm mt-5  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl">
        <p className="text-[#00000099] font-[400] text-[10px] font-sans">
          Inventory stocks
        </p>
        <p className="font-[500] text-[14px] font-sans text-[#000000E5]">50</p>
      </div>

      <p className="flex items-center justify-between mt-5 border-t pt-5">
        <span className="text-[##000000] text-[14px] font-sans font-[500]">
          Product images
        </span>

        <button className=" text-[12px] font-[500] font-sans text-xl">⌄</button>
      </p>

      {productimage.map((product) => (
        <div
          className="flex justify-between items-center gap-2 mt-3"
          key={product.id}
        >
          <div className=" flex gap-2 items-center">
            <span>
              {" "}
              <Image
                src={product.img}
                quality={0}
                className="object-cover object-top"
                alt=" icon"
              />
            </span>
            <span>{product.name}</span>
          </div>
          <div className=" flex items-center gap-2">
            <button>
              <FaEllipsisH />
            </button>
            <button>
              <input
                type="radio"
                className="appearance-none bg-[#8A226F] w-10 h-5 rounded-full border border-gray-300 checked:bg-[#8A226F] checked:border-[#8A226F] relative transition-all duration-200
  before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:bg-white before:rounded-full checked:before:translate-x-5"
              />
            </button>
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 bg-gray-50 w-full rounded-full px-5 py-1 mt-3 justify-center text-[#8A226F]">
        <span>Add image</span>
        <span>
          {" "}
          <Image
            src={imageicon}
            quality={0}
            className="object-cover object-top"
            alt="image icon"
          />
        </span>
      </button>

      <div>
        <p className="font-[500] font-sans text-[14px] text-[#000000] mt-3  border-t pt-3">
          Inventory variations
        </p>

        <p className="flex items-center gap-2 mt-3">
          <span>
            <input
              type="checkbox"
              checked
              className="appearance-none bg-[#8A226F] w-5 h-5 rounded border border-gray-300 checked:bg-[#8A226F] checked:border-[#8A226F] checked:after:content-['✓'] checked:after:text-white checked:after:text-center checked:after:font-bold checked:after:block checked:after:relative checked:after:top-0.5 items-center flex justify-center"
            />
          </span>
          <span className="text-[#00000099] text-[14px] font-[400] font-sans">
            This product is variable; has different colors, sizes, weight,
            materials, etc.
          </span>
        </p>
      </div>

      <div className="border p-5 rounded-xl mt-5">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[#00000099] font-[400] text-[10px] font-sans">
              Option 1
            </span>
            <span>Color</span>
          </div>

          <div>
            <FaEllipsisH />
          </div>
        </div>

        <div className="flex justify-start items-center gap-2 mt-3">
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Red</span>
            <span>x</span>
          </div>
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>White</span>
            <span>x</span>
          </div>
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Black</span>
            <span>x</span>
          </div>
        </div>

        <p className="text-[Enter values] font-[500] text-[12px] font-sans mt-3">
          <button>Enter values</button>
        </p>
      </div>

      <div className="border p-5 rounded-xl mt-2">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[#00000099] font-[400] text-[10px] font-sans">
              Option 2
            </span>
            <span>Size</span>
          </div>

          <div>
            <FaEllipsisH />
          </div>
        </div>

        <div className="flex justify-start items-center gap-2 mt-3">
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Large</span>
            <span>x</span>
          </div>
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Small</span>
            <span>x</span>
          </div>
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>XL</span>
            <span>x</span>
          </div>
        </div>

        <p className="text-[Enter values] font-[500] text-[12px] font-sans mt-3">
          <button>Enter values</button>
        </p>
      </div>
      <div className="border p-5 rounded-xl mt-2">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[#00000099] font-[400] text-[10px] font-sans">
              Option 3
            </span>
            <span>Size</span>
          </div>

          <div>
            <FaEllipsisH />
          </div>
        </div>

        <div className="flex justify-start items-center gap-2 mt-3">
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Large</span>
            <span>x</span>
          </div>
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>Small</span>
            <span>x</span>
          </div>
          <div className="font-[400] text-[12px] font-sans text-[#000000E5] flex gap-2 items-center px-3 py-1 round-full bg-gray-100 rounded-full ">
            <span>XL</span>
            <span>x</span>
          </div>
        </div>

        <p className="text-[Enter values] font-[500] text-[12px] font-sans mt-3">
          <button>Enter values</button>
        </p>
      </div>

      <button className="flex items-center gap-2 bg-gray-50 w-full rounded-full px-5 py-1 mt-5 justify-center text-[#8A226F]">
        <span>+</span>
        <span>Add new option</span>
      </button>

      <div>
        <p className="flex items-center justify-between mt-5 border-t pt-5">
          <span className="text-[##000000] text-[14px] font-sans font-[500]">
            Shipping
          </span>

          <button className=" text-[12px] font-[500] font-sans text-xl">
            ⌄
          </button>
        </p>

        <p className="flex items-center justify-between pt-5">
          <span className="text-[##000000] text-[12px] font-sans font-[500]">
            Self shipping
          </span>

          <span>
            <input
              type="checkbox"
              checked
              className="appearance-none bg-[#8A226F] w-5 h-5 rounded border border-gray-300 checked:bg-[#8A226F] checked:border-[#8A226F] checked:after:content-['✓'] checked:after:text-white checked:after:text-center checked:after:font-bold checked:after:block checked:after:relative checked:after:top-0.5 items-center flex justify-center"
            />
          </span>
        </p>
        <p className="flex items-center justify-between mt-3">
          <span className="text-[##000000] text-[12px] font-sans font-[500]">
            InstaShop shipping
          </span>

          <span>
            <input
              type="checkbox"
              checked
              className="appearance-none bg-[#8A226F] w-5 h-5 rounded border border-gray-300 checked:bg-[#8A226F] checked:border-[#8A226F] checked:after:content-['✓'] checked:after:text-white checked:after:text-center checked:after:font-bold checked:after:block checked:after:relative checked:after:top-0.5 items-center flex justify-center"
            />
          </span>
        </p>

        <div className="border shadow-sm mt-5  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl">
          <p className="text-[#00000099] font-[400] text-[10px] font-sans">
            Inventory stocks
          </p>
          <p className="font-[500] text-[14px] font-sans text-[#000000E5]">
            50
          </p>
        </div>
      </div>

      <div className="border-t pt-3 flex items-center justify-between gap-2 mt-7  ">
        <button className="text-center  px-5 bg-[#fff] rounded-[90px] py-2 font-[500] font-sans border border-[#8A226F] text-[#8A226F] w-[45%]">
          <Link href="/productDetails">Cancel</Link>
        </button>
        <span className="w-[45%]">
          <Button onClick={() => {}}>
            <Link href="/productDetails3">Save</Link>
          </Button>
        </span>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import good from "@/public/good.png";
import imageicon from "@/public/imageicon.png";
import Image from "next/image";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
export default function productDetails() {
  return (
    <div>
      <p className="flex items-center justify-between">
        <button className="flex items-center gap-2">
          <Link href="/">
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

        <button className=" text-[12px] font-[500] font-sans">⌄</button>
      </p>

      <div className="mt-3">
        <InputBox type="text" placeholder="Product Title" />
      </div>
      <div className="mt-3">
        <textarea
          placeholder="Product description"
          className="border shadow-sm  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl"
        />
      </div>
      <div className="mt-3 flex justify-between items-center gap-5">
        <span className="w-[45%]">
          <InputBox type="text" placeholder="Price" />
        </span>
        <span className="w-[45%]">
          <InputBox type="text" placeholder="Old price" />
        </span>
      </div>

      <div className="mt-3">
        <textarea
          placeholder="Product collection"
          className="border shadow-sm  border-[#00000033] px-5 py-3 h-full text-[14px] w-full rounded-xl"
        />
      </div>
      <div className="mt-3">
        <InputBox type="text" placeholder="Inventory stocks" />
      </div>

      <p className="flex items-center justify-between mt-5 border-t pt-5">
        <span className="text-[##000000] text-[14px] font-sans font-[500]">
          Product images
        </span>

        <button className=" text-[12px] font-[500] font-sans">⌄</button>
      </p>

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

      <p className="font-[500] font-sans text-[14px] text-[#000000] mt-5">
        Inventory variations
      </p>

      <p className="flex items-center gap-2 mt-3">
        <span>
          <input type="checkbox" />
        </span>
        <span className="text-[#00000099] text-[14px] font-[400] font-sans">
          This product is variable; has different colors, sizes, weight,
          materials, etc.
        </span>
      </p>

      <div>
        <p className="flex items-center justify-between mt-5 border-t pt-5">
          <span className="text-[##000000] text-[14px] font-sans font-[500]">
            Shipping
          </span>

          <button className=" text-[12px] font-[500] font-sans">⌄</button>
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
      </div>

      <div className="mt-3">
        <InputBox type="text" placeholder="Inventory stocks" />
      </div>

      <div className="border-t pt-3 flex items-center justify-between gap-2 mt-7  ">
        <button className="text-center  px-5 bg-[#fff] rounded-[90px] py-2 font-[500] font-sans border border-[#8A226F] text-[#8A226F] w-[45%]">
          <Link href="/profile">Cancel</Link>
        </button>
        <span className="w-[45%]">
          <Button onClick={() => {}}>
            <Link href="/productDetails2">Save</Link>
          </Button>
        </span>
      </div>
    </div>
  );
}

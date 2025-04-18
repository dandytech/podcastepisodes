import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import youtube from "@/public/icons/youtube.png";
import schedule from "@/public/icons/schedule.png";
import latestnews from "@/public/icons/latestnews.png";
import newepisode from "@/public/icons/newepisode.png";
import ourservice from "@/public/icons/ourservice.png";
import allproducts from "@/public/icons/allproducts.png";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const homeLink = "/";

  return (
    <div>
      <div className="lg:relative bg-[#FCFCFC] overflowX  ">
        <div className="lg:flex justify-between items-center py-5 lg:px-20 hidden">
          {/* Logo */}
          <div>
            <Link href={homeLink}>
              <Image
                src={logo}
                quality={100}
                className="object-cover object-top"
                alt="logo"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="">
            <ul className="flex gap-10 text-[#282828]  items-center relative font-[700]text-[15px]">
              <li>
                <Link href={homeLink}>Home</Link>
              </li>

              <li className="flex items-center justify-center">
                <span className="cursor-pointer">Company</span>
                <span className="text-lg cursor-pointer">
                  <RiArrowDropDownLine />
                </span>
              </li>

              <li>
                <Link href={homeLink}>Resources</Link>
              </li>
              <li>
                <Link href={homeLink}> Contact us</Link>
              </li>
              <li>
                <Link href={homeLink}> Advertise</Link>
              </li>

              {/* Search */}
              <li className="px-3 py-1 items-center text-white flex">
                <span className="text-xl pl-2 py-1 bg-[#00000052] rounded-l-xl">
                  <IoIosSearch />
                </span>
                <input
                  placeholder="Search"
                  className="bg-[#00000052] text-white placeholder-white text-lg rounded-r-xl pr-3"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:hidden flex justify-between font-bold bg-white text-3xl rounded-full px-2 shadow:4xl mb-10 pt-5">
          {/* Logo */}
          <div className="lg:hidden">
            <Link href={homeLink}>
              <Image
                src={logo}
                quality={100}
                className="object-cover object-top"
                alt="logo"
              />
            </Link>
          </div>
          <button onClick={handleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="bg-[url('/images/headbg.png')] bg-cover bg-center  bg-no-repeat md:flex hidden  py-5 ">
          <div className="flex items-center justify-between p-5 gap-10 lg:gap-10">
            <div className="lg:flex hidden">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    console.log("Button clicked");
                  }}
                >
                  <Image
                    src={youtube}
                    quality={100}
                    className="object-cover object-top"
                    alt="youtube-icon"
                  />
                </button>
                <span>
                  <p className="font-[800] text-[18px] text-white">
                    Listen to ABR Live Radio
                  </p>
                  <p className="font-[700] text-[13px] text-[#9CCC65]">
                    ON AIR
                  </p>
                </span>
              </div>
            </div>

            <div className="md:mr-10 lg:mr-0">
              {" "}
              <div className="flex items-center justify-between gap-2">
                <span>
                  {" "}
                  <Image
                    src={schedule}
                    quality={100}
                    className="object-cover object-top"
                    alt="youtube-icon"
                  />
                </span>
                <span className="text-white text-[13px] font-[600]">
                  <Link href={homeLink}>View schedules</Link>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between lg:gap-40 md:gap-5 border-l lg:px-20">
              <div className="flex items-center justify-between gap-2 md:ml-10 lg:ml-0">
                <span>
                  {" "}
                  <Image
                    src={latestnews}
                    quality={100}
                    className="object-cover object-top"
                    alt="youtube-icon"
                  />
                </span>
                <span className="text-white text-[13px] font-[600]">
                  <Link href={homeLink}> Latest News</Link>
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span>
                  {" "}
                  <Image
                    src={newepisode}
                    quality={100}
                    className="object-cover object-top"
                    alt="youtube-icon"
                  />
                </span>
                <span className="text-white text-[13px] font-[600]">
                  <Link href={homeLink}>New Episodes</Link>
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span>
                  {" "}
                  <Image
                    src={ourservice}
                    quality={100}
                    className="object-cover object-top"
                    alt="youtube-icon"
                  />
                </span>
                <span className="text-white text-[13px] font-[600]">
                  <Link href={homeLink}>Our Services</Link>
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span>
                  {" "}
                  <Image
                    src={allproducts}
                    quality={100}
                    className="object-cover object-top"
                    alt="youtube-icon"
                  />
                </span>
                <span className="text-white text-[13px] font-[600]">
                  <Link href="/podcast">All Products</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div
        className={`absolute top-20 z-50 bg-white w-[80%] md:w-[50%] lg:hidden ${
          !show ? "hidden" : ""
        }`}
      >
        <div className="flex  border  m-5 shadow-sm flex-col justify-between items-center py-5 px-20">
          {/* Navigation */}
          <div>
            <ul className="flex flex-col gap-10 text-[#282828]  items-center relative font-[700]text-[15px]">
              <li>
                <Link href="/" onClick={handleMenu}>
                  Home
                </Link>
              </li>

              <li className="flex items-center justify-center">
                <span className="cursor-pointer">Company</span>
                <span className="text-lg cursor-pointer">
                  <RiArrowDropDownLine />
                </span>
              </li>

              <li>
                <Link href="/" onClick={handleMenu}>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleMenu}>
                  {" "}
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleMenu}>
                  {" "}
                  Advertise
                </Link>
              </li>

              {/* Search */}
              <li className="px-3 py-1 items-center text-white flex">
                <span className="text-xl pl-2 py-1 bg-[#00000052] rounded-l-xl">
                  <IoIosSearch />
                </span>
                <input
                  placeholder="Search"
                  className="bg-[#00000052] text-white placeholder-white text-lg rounded-r-xl pr-3"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

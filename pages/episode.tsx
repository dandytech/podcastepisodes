import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import React from "react";
import ep1 from "@/public/images/ep1.png";
import music from "@/public/images/music.png";
import youtube from "@/public/icons/youtube.png";
import playicon from "@/public/icons/playicon.png";
import pimg1 from "@/public/images/pimg1.png";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { RiForward10Fill } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";
import { FiInfo } from "react-icons/fi";

export default function podcastdetails() {
  return (
    <div>
      <section>
        <div className="bg-[url('/images/pdbg.png')] bg-cover bg-center bg-no-repeat pb-10 px-5 lg:px-10">
          <p className="py-5 text-white text-[16px] font-[600]">
            <Link href="/podcast" className="flex items-center gap-3">
              <span>﹤ Back to podcast</span>
            </Link>
          </p>
          <div className="flex gap-3 py-5">
            <div className="lg:w-[30%]">
              <Image
                src={ep1}
                width={100}
                height={100}
                alt="Partner logo"
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-[#828282] font-[700] text-[13px]">
                <span>SEPT 3, 2023</span>
                <span className="text-lg">
                  <GoDotFill />
                </span>
                <span>28 MINS</span>
              </p>
              <p className="text-white font-[700] text-[20px]">
                The Funeral Experience - the Good, the Bad, and the Ugly
              </p>
              <p className="text-white font-[500] lg:w-[70%] text-[15px] text-justify">
                The struggles of a widow begin immediately when her husband
                dies; she is immediately made to go through various traditional
                rites, disregarding her pain and process of grieving.Most people
                in Africa, argue that those rituals are intended to protect
                widows and not to harm them. This doesn't appear to be the case
                as some of these practices and beliefs tend to dehumanise the
                very essence of their womanhood.In this episode, we will talk
                about these rites and possible solutions to the bad sides and
                even how to manage the ugly sides.The guest on this episode is
                Ms Grace Udodong.
              </p>

              <div className="py-5">
                <Image
                  src={playicon}
                  width={300}
                  height={200}
                  alt="Partner logo"
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex gap-3 justify-between items-center">
                <div className="flex items-center gap-3">
                  <button className="text-white text-xl">
                    <GrBackTen />
                  </button>
                  <button>
                    {" "}
                    <Image
                      src={youtube}
                      width={300}
                      height={200}
                      alt="Partner logo"
                      className="object-contain w-full h-auto"
                    />
                  </button>
                  <button className="text-white text-xl">
                    <RiForward10Fill />
                  </button>
                </div>
                <div>
                  {" "}
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Episode section */}
      <section>
        <div className="px-5 lg:px-10 pt-10 ">
          <p className="text-[#5A5A5A] font-[800] text-[14px] py-3 border-b border-b-[#DCDCDC]">
            NEXT EPISODES IN QUEUE
          </p>
          <div className="flex flex-wrap gap-3 space-y-5 lg:space-y-0 py-10">
            <div className="flex flex-col w-full  lg:w-[400px] gap-5 bg-white  ">
              <div className="w-[50%]">
                <Link href="/categories">
                  <Image
                    src={pimg1}
                    quality={100}
                    className="object-cover object-top w-full "
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex gap-2 items-center ">
                <button className="w-[5%] ">
                  {" "}
                  <Image
                    src={youtube}
                    quality={100}
                    height={100}
                    width={100}
                    className="object-cover object-top w-full"
                    alt="logo"
                  />
                </button>

                <div className="text-[#282828] font-[600] text-[18px] lg:w-[50%] ">
                  The Future of Work: Embracing Remote and Hybrid Workforces
                </div>
              </div>
              <div className="text-[#282828]  flex gap-3 font-[500] text-[13px] px-5 pb-5">
                <span>Sept 7, 2023</span>
                <span>35 mins</span>
              </div>
            </div>

            <div className="flex flex-col lg:w-[400px]  w-full gap-5 bg-white ">
              <div className="w-[50%]">
                <Image
                  src={pimg1}
                  quality={100}
                  className="object-cover object-top w-full "
                  alt="logo"
                />
              </div>
              <div className="flex gap-2 items-center ">
                <button className="w-[5%] ">
                  <Image
                    src={youtube}
                    quality={100}
                    height={100}
                    width={100}
                    className="object-contain object-top w-full "
                    alt="logo"
                  />
                </button>

                <div className="text-[#282828] font-[600] text-[18px] lg:w-[50%]">
                  Compatibility in Relationship
                </div>
              </div>
              <div className="text-[#282828]  flex gap-3 font-[500] text-[13px] px-5 pb-5">
                <span>Sept 5, 2023</span>
                <span>35 mins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Never stop listening! Section */}
      <section className="bg-[url('/images/musicbg.png')] bg-cover bg-center bg-no-repeat w-full lg:p-10 mb-10 lg:mb-20">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[25%] w-full ">
            <p className="text-[#282828] font-[800] text-[32px]">
              Never stop listening!
            </p>
            <p className="font-[500] text-[#282828] text-[24px]">
              Every episodes is a journey you don't wanna miss out on.{" "}
            </p>
            <p className="text-[#282828] text-[16px] font-[500] mt-10">
              Get the latest headlines and unique ABR stories, sent every
              weekday.
            </p>
            <div className="flex items-center gap-1 mt-3 w-full">
              <span className="bg-[#D9D9D9] w-full">
                {" "}
                <input
                  className="w-full px-3 py-2 bg-[#D9D9D9]"
                  placeholder="Enter your email"
                />
              </span>
              <span className="w-full flex items-center gap-2">
                <button className="bg-red-500 px-3 py-2 text-white">
                  Get me in
                </button>
                <span>
                  <FiInfo />
                </span>
              </span>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            {" "}
            <Image
              src={music}
              width={300} // or whatever size fits your layout
              height={200}
              alt="news image"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

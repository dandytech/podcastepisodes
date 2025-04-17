import Image from "next/image";
import React, { useState } from "react";
import pimage1 from "@/public/images/pimg1.png";
import picon1 from "@/public/icons/picon1.png";
import picon2 from "@/public/icons/picon2.png";
import picon3 from "@/public/icons/picon3.png";
import picon4 from "@/public/icons/picon4.png";
import youtube from "@/public/icons/youtube.png";
import epicon5 from "@/public/icons/epicon5.png";
import ep1 from "@/public/images/ep1.png";
import ep2 from "@/public/images/ep2.png";
import ep3 from "@/public/images/ep3.png";
import { CiShare2 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import ShareButton from "@/components/ShareButton";
import Link from "next/link";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import { useGetPodcasts } from "./api/useapi/useGetPodcats";
import Loader from "@/util/Loader";
import ReadMore from "@/components/ReadMore";
import { removeHtmlTags } from "@/util/removeHtmlTags";
import { formatDate } from "@/util/dateFormater";

// const podcasts = [
//   {
//     id: 1,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 2,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 3,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 4,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 5,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 6,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
// ];
export default function podcast() {
  const itemsPerPage = 3; // Change to desired number
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetPodcasts(currentPage, itemsPerPage);
  console.log(data);

  const [currentData] = useState(data);

  const totalPages = Math.ceil(currentData?.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < data?.total / itemsPerPage)
      setCurrentPage((prev) => prev + 1);
  };

  if (isLoading)
    return (
      <p className="flex items-center justify-center h-full py-10">
        <Loader />
      </p>
    );

  return (
    <div>
      {/* Banner section */}
      <section>
        <div className="bg-[url('/images/podbg.png')] bg-cover bg-center bg-no-repeat p-10 relative pb-10">
          <div className="lg:flex gap-5 items-center justify-between">
            <div className="w-[30%] pb-10 lg:mb-0">
              {" "}
              <Image
                src={pimage1}
                width={300}
                height={200}
                alt="Partner logo"
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[#BFBFBF] font-[800] text-[14px]">
                PODCAST
              </div>
              <div className="lg:w-[45%]">
                <p className="text-white font-[800] text-[28px]">
                  Hope For the Widow
                </p>
                <p className="text-white font-[500] text-[16px] text-justify">
                  The show aims to shed light on the challenges faced by less
                  privileged widows, providing support and a platform to promote
                  a better life. Join us in making a difference.
                  #EmpoweringWidows #SupportingWidows.
                </p>
              </div>
              <div>
                <p className="text-[#BFBFBF] font-[600] text-[14px]">
                  Available on
                </p>
                <p className="flex gap-2 items-center mt-2">
                  <button>
                    {" "}
                    <Image
                      src={picon1}
                      height={100}
                      width={100}
                      alt="Partner logo"
                      className="object-contain w-[20px] h-auto"
                    />
                  </button>
                  <button>
                    {" "}
                    <Image
                      src={picon2}
                      height={100}
                      width={100}
                      alt="Partner logo"
                      className="object-contain w-[20px] h-auto"
                    />
                  </button>
                  <button>
                    {" "}
                    <Image
                      src={picon3}
                      height={100}
                      width={100}
                      alt="Partner logo"
                      className="object-contain w-[20px] h-auto"
                    />
                  </button>
                  <button>
                    {" "}
                    <Image
                      src={picon4}
                      height={100}
                      width={100}
                      alt="Partner logo"
                      className="object-contain w-[70px] h-auto"
                    />
                  </button>
                </p>
              </div>
            </div>
            <div className="">
              <button className="absolute top-10 right-20 text-white text-2xl">
                {" "}
                <CiShare2 />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Episode Section */}
      <section className="lg:flex pt-5 gap-5 lg:gap-20 justify-between px-5 lg:px-10 pb-10 lg:pb-20">
        <div className="">
          <p className="py-5">
            <span className="text-[#5A5A5A] font-[500] text-[14px]">
              ALL EPISODES{" "}
            </span>
            <span className="text-[#5A5A5A] text-[14px] font-[500]">
              ({data?.total} AVAILABLE)
            </span>
          </p>

          {data?.data?.map((podcast) => (
            <div key={podcast.id} className="flex gap-3 border-t border-b py-5">
              <div className="lg:w-[20%]">
                <Link href="/podcastdetails">
                  <Image
                    src={podcast.picture_url}
                    width={100}
                    height={100}
                    alt="Partner logo"
                    className="object-contain w-full h-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-[#828282] font-[700] text-[13px]">
                  <span>{formatDate(podcast.created_at)}</span>
                  <span className="text-lg">
                    <GoDotFill />
                  </span>
                  <span>{podcast.time}</span>
                </p>
                <p className="text-[#282828] font-[700] text-[20px]">
                  {podcast.title}
                </p>
                <p className="text-[#282828] font-[500] lg:w-[50%] text-[15px]">
                  <ReadMore
                    text={removeHtmlTags(podcast.description)}
                    maxLength={97}
                  />
                </p>
                <div className="flex gap-3 items-center">
                  <button>
                    <Image
                      src={youtube}
                      width={300}
                      height={200}
                      alt="YouTube"
                      className="object-contain w-full h-auto"
                    />
                  </button>
                  <button>
                    <Image
                      src={epicon5}
                      width={350}
                      height={250}
                      alt="Episode Icon"
                      className="object-contain w-full h-auto"
                    />
                  </button>
                  <ShareButton />
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="mt-5 flex items-center gap-2 justify-center text-sm text-[#5A5A5A] font-[500]">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-1 text-xl ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <IoCaretBackOutline />
            </button>

            {/* First few pages (1, 2, 3) */}
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-lg px-3 py-2 ${
                  currentPage === page
                    ? "bg-[#2C2C2C] text-white"
                    : "bg-[#AEAEAE] text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Conditional ... and last page */}
            {totalPages > 4 && (
              <>
                <span className="px-2">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`rounded-lg px-3 py-2 ${
                    currentPage === totalPages
                      ? "bg-[#2C2C2C] text-white"
                      : "bg-[#AEAEAE] text-white"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 text-xl ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <IoCaretForwardOutline />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:w-[20%]">
          <div>
            <p className="text-[#5A5A5A] font-[700] text-[11px]">
              ADVERTISEMENT
            </p>
            <p>
              <Image
                src={ep2}
                width={300}
                height={200}
                alt="Partner logo"
                className="object-contain w-full h-auto"
              />
            </p>
          </div>
          <div>
            {" "}
            <Image
              src={ep3}
              width={300}
              height={200}
              alt="Partner logo"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

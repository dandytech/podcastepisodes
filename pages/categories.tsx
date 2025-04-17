import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import youtube from "@/public/icons/youtube.png";
import epicon5 from "@/public/icons/epicon5.png";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

import { useGetPodcasts } from "../pages/api/useapi/useGetPodcats";
import { removeHtmlTags } from "@/util/removeHtmlTags";
import { formatDate } from "@/util/dateFormater";

import ReadMore from "@/components/ReadMore";
import Loader from "@/util/Loader";
// const categorylist = [
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
//   {
//     id: 7,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 8,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 9,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 10,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 11,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 12,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 13,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 14,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 15,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 16,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 17,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 18,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 19,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 20,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 21,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 22,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 23,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
//   {
//     id: 24,
//     image: "/images/ep1.png",
//     date: "SEPT 3, 2023",
//     time: "28 MINS",
//     title: "The Funeral Experience - the Good, the Bad, and the Ugly",
//     message:
//       "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through various traditional rites, disregarding her pain and process of grieving.",
//   },
// ];

export default function categories() {
  const itemsPerPage = 10; // Change to desired number
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
    <div className=" pb-20">
      <div className="px-5 lg:px-10 py-5 border-t border-b">
        <p className="border-b py-3 mb-3">
          <span className="text-[#5A5A5A] font-[500] text-[14px]">
            ALL PODCASTS
          </span>
        </p>

        {/* Sorting  */}
        <div className="flex gap-2 py-3">
          <div className="flex gap-1">
            <span className="text-[#5A5A5A] text-[16px] font-[700]">
              Sort by:
            </span>
            <span className="text-[#282828] font-[700] text-[16px]">
              Popular ...
            </span>
          </div>
          <div className="text-[#979797] text-xl">|</div>
          <div className="flex gap-1">
            <span className="text-[#5A5A5A] text-[16px] font-[700]">
              Sort by category:
            </span>
            <span className="text-[#282828] font-[700] text-[16px]">
              All ...
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-5 ">
          {data?.data?.map((podcast) => (
            <div
              key={podcast.id}
              className="flex w-full border px-3  flex-col gap-5 py-5"
            >
              <div className="">
                <Link href="/episode">
                  <Image
                    src={podcast.picture_url}
                    width={100}
                    height={100}
                    alt="Partner logo"
                    className="object-contain w-full h-auto"
                  />
                </Link>
              </div>
              <p className="text-[#282828] font-[700] text-[18px]">
                {podcast.title}
              </p>
              <p className="text-[#282828] font-[500]  text-[15px]">
                <ReadMore
                  text={removeHtmlTags(podcast.description)}
                  maxLength={97}
                />
              </p>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-[#828282] font-[700] text-[13px]">
                  <span>{formatDate(podcast.created_at)}</span>
                  <span className="text-lg">
                    <GoDotFill />
                  </span>
                  <span>{podcast.duration} MINS</span>
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
        </div>
        {/* Pagination Controls */}
        <div className="mt-5 flex items-center gap-4 justify-center text-sm text-[#5A5A5A] font-[500]">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-3 py-1  text-xl ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoCaretBackOutline />
          </button>
          <p>
            <span className="bg-[#2C2C2C] text-white rounded-lg p-3">
              {currentPage}
            </span>{" "}
            ...{" "}
            <span className="bg-[#AEAEAE] text-white rounded-lg p-3">
              {" "}
              {data?.total / itemsPerPage}
            </span>
          </p>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-2  text-xl  ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoCaretForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

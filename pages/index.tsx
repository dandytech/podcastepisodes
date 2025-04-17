import React from "react";
import fbnadvert from "@/public/images/fbnadvert.png";
import youtube from "@/public/icons/youtube.png";
import editpick4 from "@/public/images/editpick4.png";
import elipsis from "@/public/icons/elipsis.png";
import music from "@/public/images/music.png";
import editpick2 from "@/public/images/editpick2.png";
import editpick3 from "@/public/images/editpick3.png";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import ShareButton from "@/components/ShareButton";
import ViewAll from "@/components/ViewAll";
import { FiInfo } from "react-icons/fi";
import Link from "next/link";
import { useTrendingEpisode } from "./api/useapi/useTrendingEpisode";
import { useGetLatest } from "./api/useapi/useGetLatest";
import { formatDate } from "@/util/dateFormater";

// const slides = [
//   {
//     id: 1,
//     image: "/images/trending1.png",
//     episode: "8 Episodes",
//     text: "Hope For the Widow",
//   },
//   {
//     id: 2,
//     image: "/images/trending2.png",
//     episode: "22 Episodes",
//     text: "Policy Sphere by Agora Policy",
//   },
//   {
//     id: 3,
//     image: "/images/trending3.png",
//     episode: "18 Episodes",
//     text: "The Harmonised Life",
//   },
//   {
//     id: 4,
//     image: "/images/trending4.png",
//     episode: "12 Episodes",
//     text: "Lifestyle Central",
//   },
//   {
//     id: 5,
//     image: "/images/trending1.png",
//     episode: "8 Episodes",
//     text: "Hope For the Widow",
//   },
//   {
//     id: 6,
//     image: "/images/trending2.png",
//     episode: "22 Episodes",
//     text: "Policy Sphere by Agora Policy",
//   },
//   {
//     id: 7,
//     image: "/images/trending3.png",
//     episode: "18 Episodes",
//     text: "The Harmonised Life",
//   },
//   {
//     id: 8,
//     image: "/images/trending4.png",
//     episode: "12 Episodes",
//     text: "Lifestyle Central",
//   },
// ];

const newepisode = [
  {
    id: 1,
    image: "/images/episode1.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Relationship Button - Starting Afresh as a Widow",
  },
  {
    id: 2,
    image: "/images/episode2.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Employee Well-being: Prioritising Mental Health in the Workplace",
  },
  {
    id: 3,
    image: "/images/episode2.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Relationship Button - Starting Afresh as a Widow",
  },
  {
    id: 4,
    image: "/images/episode2.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Relationship Button - Starting Afresh as a Widow",
  },
  {
    id: 5,
    image: "/images/episode1.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Relationship Button - Starting Afresh as a Widow",
  },
  {
    id: 6,
    image: "/images/episode2.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Employee Well-being: Prioritising Mental Health in the Workplace",
  },
  {
    id: 7,
    image: "/images/episode2.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Relationship Button - Starting Afresh as a Widow",
  },
  {
    id: 8,
    image: "/images/episode2.png",
    date: "AUG 29, 2023",
    time: "45 MINS",
    text: "Relationship Button - Starting Afresh as a Widow",
  },
];

// const news = [
//   {
//     id: 1,
//     image: "/images/news1.png",
//     text: "Fitness Focus",
//   },
//   {
//     id: 1,
//     image: "/images/news2.png",
//     text: "Fitness Focus",
//   },
//   {
//     id: 1,
//     image: "/images/news3.png",
//     text: "Fitness Focus",
//   },
//   {
//     id: 1,
//     image: "/images/news4.png",
//     text: "Fitness Focus",
//   },
//   {
//     id: 1,
//     image: "/images/news5.png",
//     text: "Fitness Focus",
//   },
// ];

const ents = [
  {
    id: 1,
    image: "/images/ent1.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/ent2.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/ent3.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/ent4.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/ent5.png",
    text: "Fitness Focus",
  },
];

const techs = [
  {
    id: 1,
    image: "/images/tech1.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/tech2.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/tech3.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/tech4.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/tech5.png",
    text: "Fitness Focus",
  },
];

const educates = [
  {
    id: 1,
    image: "/images/edu1.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/edu2.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/edu3.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/edu4.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/edu5.png",
    text: "Fitness Focus",
  },
];

const prodcasts = [
  {
    id: 1,
    image: "/images/prodcast1.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/prodcast2.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/prodcast3.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/prodcast4.png",
    text: "Fitness Focus",
  },
  {
    id: 1,
    image: "/images/prodcast5.png",
    text: "Fitness Focus",
  },
];

const partners = [
  {
    id: 1,
    logo: "/images/logo.1.png",
  },
  {
    id: 2,
    logo: "/images/logo.2.png",
  },
  {
    id: 3,
    logo: "/images/logo.3.png",
  },
  {
    id: 4,
    logo: "/images/logo.4.png",
  },
  {
    id: 5,
    logo: "/images/logo.5.png",
  },
  {
    id: 6,
    logo: "/images/logo.6.png",
  },
  {
    id: 7,
    logo: "/images/logo.7.png",
  },
  {
    id: 8,
    logo: "/images/logo.8.png",
  },
  {
    id: 9,
    logo: "/images/logo.9.png",
  },
  {
    id: 10,
    logo: "/images/logo.10.png",
  },
  {
    id: 11,
    logo: "/images/logo.11.png",
  },
  {
    id: 12,
    logo: "/images/logo.12.png",
  },
  {
    id: 13,
    logo: "/images/logo.13.png",
  },
  {
    id: 14,
    logo: "/images/logo.14.png",
  },
  {
    id: 15,
    logo: "/images/logo.15.png",
  },
];

function index() {
  interface Item {
    // Define the structure of your items here
    // For example:
    // id: number;
    // name: string;
  }

  const getCustomChunks = (items: Item[]): Item[][] => {
    const result: Item[][] = [];
    let rowLength = 4;
    let index = 0;

    while (index < items.length) {
      result.push(items.slice(index, index + rowLength));
      index += rowLength;
      rowLength++;
    }

    return result;
  };
  const chunkedPartners = getCustomChunks(partners);

  const { data, isLoading } = useTrendingEpisode();
  const { latestData, isLoadingLatest } = useGetLatest();
  console.log(latestData);

  return (
    <div className="">
      {/* Advert section */}
      <section className="lg:w-[85%] overflowX w-[90%] mx-auto lg:mt-10 md:pb-10 ">
        <p className="text-[#5A5A5A] font-[700] text-[11px] text-right mb-2 px-2">
          ADVERTISEMENT
        </p>
        <div className="relative w-full aspect-[6/1] overflow-hidden">
          <Image
            src={fbnadvert}
            quality={100}
            fill
            className="object-cover object-top"
            alt="logo"
          />
        </div>
      </section>

      {/* Edit Picks Section */}
      <section className="lg:mt-20 overflowX bg-[#F6F6F6] lg:px-10 px-5 pt-10 pb-0">
        <div>
          <p className="text-[#282828] font-[700] text-[24px]">
            EDITOR'S PICKS
          </p>
          <p className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 px-3 border-l-red-500">
            Featured Episodes
          </p>
        </div>

        <div className="lg:flex justify-between gap-10 items-center py-5">
          <div className="bg-[url('/images/editpick1.png')] bg-cover bg-center bg-no-repeat w-full lg:w-[50%] h-[300px] md:h-[400px] lg:h-[680px] relative mb-5 lg:mb-0">
            <div className="flex gap-2 items-center px-5 absolute bottom-5 lg:bottom-5">
              <button className="w-[5%]">
                <Image
                  src={youtube}
                  quality={100}
                  className="object-contain object-top w-full"
                  alt="logo"
                />
              </button>
              <span className="text-[16px] md:text-[20px] lg:text-[24px] text-white font-[800] w-[80%] leading-tight">
                Bridging the Financing Gap in Nigeria's off-grid sector
              </span>
            </div>
          </div>

          <div className="lg:flex flex-col gap-10 justify-between lg:w-[50%] h-[300px] md:h-[400px] lg:h-[680px]">
            <div className="lg:flex gap-3 justify-between space-y-5 lg:space-y-0">
              <div className="flex flex-col lg:w-[50%] w-full gap-5 bg-white ">
                <div className="">
                  <Link href="/podcast">
                    <Image
                      src={editpick2}
                      quality={100}
                      className="object-cover object-top w-full "
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="flex gap-2 items-center ">
                  <button className="w-[10%] ">
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

                  <div className="text-[#282828] font-[600] text-[18px] ">
                    The Future of Work: Embracing Remote and Hybrid Workforces
                  </div>
                </div>
                <div className="text-[#282828]  flex gap-3 font-[500] text-[13px] px-5 pb-5">
                  <span>Sept 7, 2023</span>
                  <span>35 mins</span>
                </div>
              </div>
              <div className="flex flex-col lg:w-[50%] w-full gap-5 bg-white ">
                <div className="">
                  <Image
                    src={editpick3}
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

                  <div className="text-[#282828] font-[600] text-[18px] ">
                    Compatibility in Relationship
                  </div>
                </div>
                <div className="text-[#282828]  flex gap-3 font-[500] text-[13px] px-5 pb-5">
                  <span>Sept 5, 2023</span>
                  <span>35 mins</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[4/1] overflow-hidden mt-10 lg:mt-0">
              <Image
                src={editpick4}
                quality={100}
                fill
                className="object-cover object-top"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending this Week Section */}
      <section className="lg:mt-20 mt-10 overflowX  lg:px-10 px-5 py-1">
        <div className="">
          <div className="pb-0 mb-5">
            <p className="text-[#282828] font-[700] text-[24px]">
              Trending this week
            </p>
            <p className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 px-3 border-l-red-500">
              Featured Podcasts
            </p>
          </div>

          <div className="border">
            <div className="w-[100%] lg:h-full">
              <div className="relative">
                <div className="absolute right-0 top-1/2 z-10 flex flex-col gap-4 -translate-y-1/2">
                  <div className="relative items-center justify-between py-3 pr-20 lg:pr-0">
                    <button className="custom-swiper-button swiper-button-prev text-[#E0E0E0] bg-white shadow-md rounded-r-lg">
                      <GrCaretNext className="" />
                    </button>
                    <button className="custom-swiper-button swiper-button-next text-[#5A5A5A] bg-white shadow-md rounded-l-lg">
                      <GrCaretPrevious className="text-[#5A5A5A]" />
                    </button>
                  </div>
                </div>

                {/* Swiper itself */}
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  pagination={false}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {data?.data?.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <Link href="/">
                        <div
                          className="lg:pb-20 bg-cover bg-center bg-no-repeat w-full h-[424px] relative"
                          style={{
                            backgroundImage: `url(${slide.picture_url})`,
                          }}
                        >
                          <div className="absolute bottom-0 py-3 text-white text-left px-3">
                            <p className="text-[13px] px-5 font-[700]">
                              {slide.id} Episodes
                            </p>
                            <p className="text-[20px] px-5 font-[700]">
                              {slide.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newly added episode section */}
      <section className="mt-20  overflowX lg:px-10 px-5 py-1">
        <div className="">
          <div className="pb-5">
            <p className="text-[#282828] px-3 font-[700] text-[24px]">
              Newly added episodes
            </p>
          </div>

          <div>
            <div className="w-[100%] h-full">
              <div className="relative">
                <div className="absolute right-0 top-1/2 z-10 flex flex-col gap-4 -translate-y-1/2 ">
                  <div className="relative items-center justify-between py-3 pr-20 lg:pr-0 mt-[-50px]">
                    <button className="custom-swiper-button swiper-button-prev text-[#E0E0E0] bg-white shadow-md rounded-r-lg">
                      <GrCaretNext className="" />
                    </button>
                    <button className="custom-swiper-button swiper-button-next text-[#5A5A5A] bg-white shadow-md rounded-l-lg">
                      <GrCaretPrevious className="text-[#5A5A5A]" />
                    </button>
                  </div>
                </div>

                {/* Swiper itself */}
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop={true}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  pagination={false}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {latestData?.data?.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div
                        className="pb-20 bg-cover bg-center bg-no-repeat w-full h-[223px]"
                        style={{ backgroundImage: `url(${slide.picture_url})` }}
                      ></div>

                      <div className="py-3 text-white text-left px-3 flex flex-col gap-5">
                        <div className="text-[13px] justify-between flex gap-3 items-center px-3 font-[700] pt-3">
                          <span className="text-[#828282] font-[700] text-[13px]">
                            {formatDate(slide.created_at)}
                          </span>
                          <span>
                            <Image
                              src={elipsis}
                              quality={100}
                              className="object-cover object-top w-full"
                              alt="logo"
                            />
                          </span>
                          <span className="text-[#828282] font-[700] text-[13px]">
                            {/* {slide.duration} */}
                            {slide.id} MINS
                          </span>
                        </div>

                        <div className="text-[20px] text-[#282828] px-3 font-[700]">
                          {slide.title}
                        </div>

                        <div className="flex items-center justify-between gap-3 px-3">
                          <div className="text-[#BEBEBE] font-[500] text-[13px] w-[50%]">
                            More Episodes
                          </div>
                          <div>
                            <ShareButton />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Storytelling section */}
      <section className="mt-10 lg:mt-20 overflowX">
        <p className="font-[800] md:text-[24px] text-[18px] text-[#282828] bg-[#F0E4FF] px-5 lg:m-10 m-3 py-2 mb-5">
          LISTEN BY ABR CATEGORIES
        </p>
        <div className="flex items-center justify-between lg:px-5">
          <div className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 border-l-red-500 px-5 m-5">
            News & Storytelling
          </div>
          <div className="">
            <Link href="/categories">
              {" "}
              <ViewAll />
            </Link>
          </div>
        </div>

        {/* <div className="lg:grid lg:grid-cols-5 gap-5 md:flex md:flex-wrap  lg:px-10 px-5">
          {news.map((newsItem) => (
            <div key={newsItem.id}>
              <div className="flex flex-col gap-3 py-5">
                <div>
                  <Image
                    src="/images/news1.png"
                    width={300} // or whatever size fits your layout
                    height={200}
                    alt="news image"
                    className="object-contain lg:w-[300px] w-full"
                  />
                </div>

                <div className="text-[#282828] font-[700] text-[18px]">
                  {newsItem.text}
                </div>
                <div>
                  <ShareButton />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {!isLoading && (
          <div className="lg:grid lg:grid-cols-5 gap-5 md:flex md:flex-wrap lg:px-10 px-5">
            {data?.data
              ?.filter((item) => item.category_type === "NEWS")
              .slice(0, 5)
              .map((newsItem) => (
                <div key={newsItem.id}>
                  <div className="flex flex-col gap-3 py-5">
                    <div>
                      <Image
                        src={newsItem.picture_url}
                        width={300}
                        height={200}
                        alt="news image"
                        className="object-contain lg:w-[300px] w-full"
                      />
                    </div>
                    <div className="text-[#282828] font-[700] text-[18px]">
                      {newsItem.title}
                    </div>
                    <div>
                      <ShareButton />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>

      {/* News b Section  */}
      <section className="lg:w-[70%] w-full m-auto lg:flex px-5 gap-5 py-10">
        <div className="lg:h-[255px] h-full w-full">
          {" "}
          <Image
            src="/images/newsb1.png"
            width={300} // or whatever size fits your layout
            height={200}
            alt="news image"
            className="object-cover w-full"
          />
        </div>
        <div className="lg:h-[255px] h-full w-full py-10 lg:py-0">
          {" "}
          <Image
            src="/images/newsb2.png"
            width={300} // or whatever size fits your layout
            height={200}
            alt="news image"
            className="object-cover w-full  "
          />
        </div>
        <div className="lg:h-[255px] h-full w-full">
          {" "}
          <Image
            src="/images/newsb3.png"
            width={300} // or whatever size fits your layout
            height={200}
            alt="news image"
            className="object-cover w-full"
          />
        </div>
      </section>

      {/* Eduction section */}
      <section className="mt-20 overflowX lg:px-5">
        <div className="flex items-center justify-between px-10">
          <div className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 border-l-red-500 px-5">
            Educational
          </div>
          <div className="">
            <ViewAll />
          </div>
        </div>

        <div className="md:grid lg:grid-cols-5 flex flex-wrap  lg:px-10">
          {educates.map((tech) => (
            <div key={tech.id}>
              <div className="flex flex-col gap-3 py-5 border-b border-[#D5D3D3] shadow-sm p-5 w-full">
                <div>
                  <Image
                    src={tech.image}
                    width={300}
                    height={200}
                    alt="news image"
                    className="md:object-contain object-cover w-full"
                  />
                </div>

                <div className="text-[#282828] font-[700] text-[18px]">
                  {tech.text}
                </div>
                <div>
                  <ShareButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Entertainment & Lifestyle section */}
      <section className="mt-10 lg:mt-20 overflowX">
        <div className="flex justify-between items-center px-5 lg:px-10">
          <div className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 border-l-red-500 px-5">
            Entertainment & Lifestyle
          </div>
          <div className="">
            <ViewAll />
          </div>
        </div>

        <div className="md:grid grid-cols-5 flex flex-wrap  lg:px-10">
          {ents.map((ent) => (
            <div key={ent.id}>
              <div className="flex flex-col gap-3 py-5 border-b border-[#D5D3D3] shadow-sm p-5">
                <div>
                  <Image
                    src={ent.image}
                    width={300} // or whatever size fits your layout
                    height={200}
                    alt="news image"
                    className="object-contain w-full"
                  />
                </div>

                <div className="text-[#282828] font-[700] text-[18px]">
                  {ent.text}
                </div>
                <div>
                  <ShareButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech, Sport & Business section */}
      <section className="mt-10 lg:mt-20 overflowX">
        <div className="flex justify-between items-center px-5 lg:px-10">
          <div className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 border-l-red-500 px-5">
            Tech, Sport & Business
          </div>
          <div className="">
            <ViewAll />
          </div>
        </div>

        <div className="md:grid grid-cols-5 flex flex-wrap  lg:px-10">
          {techs.map((ent) => (
            <div key={ent.id}>
              <div className="flex flex-col gap-3 py-5 border-b border-[#D5D3D3] shadow-sm p-5">
                <div>
                  <Image
                    src={ent.image}
                    width={300} // or whatever size fits your layout
                    height={200}
                    alt="news image"
                    className="object-contain w-full"
                  />
                </div>

                <div className="text-[#282828] font-[700] text-[18px]">
                  {ent.text}
                </div>
                <div>
                  <ShareButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Podcasts section */}
      <section className="mt-10 lg:mt-20 overflowX">
        <div className="flex justify-between items-center px-5 lg:px-10">
          <div className="text-[#5A5A5A] font-[600] text-[16px] border-l-2 border-l-red-500 px-5">
            Other Podcasts
          </div>
          <div className="">
            <ViewAll />
          </div>
        </div>

        <div className="md:grid grid-cols-5 flex flex-wrap  lg:px-10">
          {prodcasts.map((ent) => (
            <div key={ent.id}>
              <div className="flex flex-col gap-3 py-5 border-b border-[#D5D3D3] shadow-sm p-5">
                <div>
                  <Image
                    src={ent.image}
                    width={300} // or whatever size fits your layout
                    height={200}
                    alt="news image"
                    className="object-contain w-full"
                  />
                </div>

                <div className="text-[#282828] font-[700] text-[18px]">
                  {ent.text}
                </div>
                <div>
                  <ShareButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Never stop listening! Section */}
      <section className="bg-[url('/images/musicbg.png')] bg-cover bg-center bg-no-repeat w-full lg:p-10 p-5">
        <div className="lg:flex justify-between items-center lg:px-10 px-5">
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

      {/* Global Partner */}
      <section className="mt-10 bg-white pb-10 lg:mb-20">
        <p className="text-[#282828] text-center pb-10 lg:px-10 px-5 font-[800] md:text-[24px] text-[18px]">
          OUR GLOBAL PARTNERS
        </p>

        <div className="lg:px-10 px-5 flex flex-col gap-10">
          {chunkedPartners.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center items-center gap-5 flex-wrap"
            >
              {row.map((partner, index) => (
                <div
                  key={index}
                  className="w-[100px] md:w-[120px] lg:w-[150px]"
                >
                  <Image
                    src={partner.logo}
                    width={300}
                    height={200}
                    alt="Partner logo"
                    className="object-contain w-full h-auto"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default index;

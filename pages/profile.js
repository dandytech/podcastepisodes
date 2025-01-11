import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Profile1 from "../components/Profile1.tsx";
import Profile2 from "../components/Profile2.tsx";
import Profile3 from "../components/Profile3.tsx";
import { useStateContext } from "../contexts/ContextProvider.tsx";
export default function details() {
  //const [activeTab, setActiveTab] = useState(1);
  const { activeTab, setActiveTab } = useStateContext();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="h-full">
      <p>
        <button className="flex items-center gap-2">
          <Link href="/">
            <IoArrowBack />
          </Link>
          <span>Get Started</span>
        </button>
      </p>

      <div className="flex justify-between items-center gap-2 mt-5">
        <div
          className="w-[30%] cursor-pointer"
          onClick={() => handleTabClick(1)}
        >
          <hr
            className={`h-1  ${
              activeTab === 1 || activeTab === 2 || activeTab === 3
                ? "bg-[#8A226F]"
                : "bg-[#0000001A]"
            }`}
          />
        </div>
        <div
          className="w-[30%] cursor-pointer"
          onClick={() => handleTabClick(2)}
        >
          <hr
            className={`h-1  ${
              activeTab === 2 || activeTab === 3
                ? "bg-[#8A226F]"
                : "bg-[#0000001A]"
            }`}
          />
        </div>
        <div
          className="w-[30%] cursor-pointer"
          onClick={() => handleTabClick(3)}
        >
          <hr
            className={`h-1  ${
              activeTab === 3 ? "bg-[#8A226F]" : "bg-[#0000001A]"
            }`}
          />
        </div>
      </div>

      <div className="mt-3">
        <div>
          {activeTab === 1 && (
            <div>
              <Profile1 handleTabClick={handleTabClick} />
            </div>
          )}
        </div>
        <div>
          {activeTab === 2 && (
            <div className="mt-5">
              {" "}
              <Profile2 handleTabClick={handleTabClick} />
            </div>
          )}
        </div>
        <div>
          {activeTab === 3 && (
            <div className="mt-5">
              <Profile3 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

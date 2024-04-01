import React, { useContext, useState } from "react";
import "./Tab.css";
// import TestInterface from "../TestInterface/TestInterface";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { GlobalContext } from "../../GlobalContext";
import { MdMenuOpen } from "react-icons/md";

function Tab() {
  const handle = useFullScreenHandle();
  const [isTest, setIsTest] = useState(false);
  const { setTopic, showSidebar, setShowSidebar } = useContext(GlobalContext);

  const handleSidebar = () => {
    setShowSidebar(true);
  };

  return (
    <>
      <div className="tab-wrapper w-full h-[64px] bg-blue-200 flex flex-row justify-between gap-6 items-center">
        <div className="text-sm md:text-lg ml-4">Quizo MCQ</div>
        <div className="w-5/12 flex flex-row justify-end items-center">
          <button onClick={handleSidebar} className="block md:hidden text-3xl">
            <MdMenuOpen />
          </button>
          <button className="test-btn w-[100px] h-[44px] bg-blue-400 rounded-md mx-4 text-sm text-white">
            Test
          </button>
        </div>
      </div>
    </>
  );
}

export default Tab;

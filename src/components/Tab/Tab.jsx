import React, { useContext, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { GlobalContext } from "../../GlobalContext";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TbBrandSpeedtest } from "react-icons/tb";
import { IoIosBulb } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CiFilter } from "react-icons/ci";

function Tab() {
  const navigate = useNavigate();
  const startTest = () => {
    navigate("/instructions");
  };
  const handle = useFullScreenHandle();
  const [isTest, setIsTest] = useState(false);
  const {
    setShowSidebar,
    setShowMenu,
    setShowTestTopics,
    showTestTopics,
    testTopic,
    setTestTopic,
    showFilter,
    setShowFilter,

    showFilterMobileScreen,
    setShowFilterMobileScreen,
  } = useContext(GlobalContext);

  const handleSidebar = () => {
    setShowSidebar(true);
  };

  const handleFilter = () => {
    setShowFilterMobileScreen(true);
  };

  const freeMock = () => {
    setShowTestTopics(true);
  };

  return (
    <>
      <div className="sticky top-0 bg-white tab-wrapper w-full h-[64px] flex flex-row justify-between gap-6 items-center border border-x-0 border-y-2 z-10 border-gray-300 shadow-xl">
        <div className="text-lg md:text-3xl ml-4 text-[#007acc] font-semibold flex justify-start items-center">
          InsightIQ{" "}
          <span className="text-[#fec107]">
            <IoIosBulb />
          </span>
        </div>
        <div className="w-9/12  md:w-5/12 flex flex-row justify-end items-center">
          

          <div className="hidden text-sm md:flex gap-2 justify-center items-center text-[#007acc]">
            <a className="w-[80px] h-[34px] rounded flex justify-center items-center cursor-pointer">Contact</a>
            <a className="w-[80px] h-[34px] rounded flex justify-center items-center cursor-pointer">About Us</a>
          </div>

          <button
            className="hidden text-2xl mr-2 w-10 h-10 rounded-full"
            onClick={() => {
              handleFilter();
            }}
          >
            <CiFilter />
          </button>

          <button
            className="relative flex justify-center items-center gap-2 test-btn min-w-[120px] h-[35px] bg-[#007acc] rounded-lg mx-4 text-sm text-white"
            onClick={freeMock}
          >
            Free Mock
            <div className="text-lg">
              <TbBrandSpeedtest />
            </div>
          </button>
          {showTestTopics && (
            <div className="fixed w-full h-full top-0 bottom-0 z-50">
              <div className="fixed top-16 right-4 rounded-lg z-50 bg-[#007acc] text-white border border-gray-200 text-sm w-[200px] h-auto flex flex-col justify-center items-start">
                <div
                  className="absolute text-xl top-2 right-2 z-50 text-white"
                  onClick={() => {
                    setShowTestTopics(false);
                  }}
                >
                  <IoClose />
                </div>
                <ul className="relative p-3 w-full flex flex-col justify-center items-start mt-4">
                  <li className="w-full">
                    <button
                      className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2"
                      onClick={() => {
                        startTest();
                        setShowTestTopics(false);
                        setTestTopic("quantitative-aptitude");
                      }}
                    >
                      Quants
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2"
                      onClick={() => {
                        startTest();
                        setShowTestTopics(false);
                        setTestTopic("verbal");
                      }}
                    >
                      Verbal
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2"
                      onClick={() => {
                        startTest();
                        setShowTestTopics(false);
                        setTestTopic("oop");
                      }}
                    >
                      OOP
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2"
                      onClick={() => {
                        startTest();
                        setShowTestTopics(false);
                        setTestTopic("dbms");
                      }}
                    >
                      DBMS
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2"
                      onClick={() => {
                        startTest();
                        setShowTestTopics(false);
                        setTestTopic("dsa");
                      }}
                    >
                      DSA
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2"
                      onClick={() => {
                        startTest();
                        setShowTestTopics(false);
                        setTestTopic("computer-networks");
                      }}
                    >
                      CN
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              handleSidebar();
              setShowMenu(false);
            }}
            className="block md:hidden text-3xl mr-2"
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>
    </>
  );
}

export default Tab;

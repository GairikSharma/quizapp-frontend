import React, { useContext, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { GlobalContext } from "../../GlobalContext";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TbBrandSpeedtest } from "react-icons/tb";

function Tab() {
  const handle = useFullScreenHandle();
  const [isTest, setIsTest] = useState(false);
  const { setShowSidebar, setShowMenu, setShowTestTopics, showTestTopics } =
    useContext(GlobalContext);

  const handleSidebar = () => {
    setShowSidebar(true);
  };

  const freeMock = () => {
    setShowTestTopics(true);
  };

  return (
    <>
      <div className="tab-wrapper w-full h-[64px] flex flex-row justify-between gap-6 items-center border border-y-2">
        <div className="text-sm md:text-lg ml-4">InsightIQ</div>
        <div className="w-9/12  md:w-5/12 flex flex-row justify-end items-center">
          <form class="hidden md:block min-w-[60%] mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="hidden md:flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="hidden md:block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg focus:border focus:outline-blue-300 bg-gray-50"
                placeholder="Search questions..."
                required
              />
            </div>
          </form>

          <button
            className="hidden relative md:flex justify-center items-center gap-2 test-btn min-w-[90px] h-[35px] bg-blue-400 rounded-lg mx-4 text-sm text-white"
            onClick={freeMock}
          >
            Sign In
          </button>


          <button
            className="relative flex justify-center items-center gap-2 test-btn min-w-[120px] h-[35px] bg-blue-400 rounded-lg mx-4 text-sm text-white"
            onClick={freeMock}
          >
            Free Mock
            <div className="text-lg">
              <TbBrandSpeedtest />
            </div>
          </button>
          {showTestTopics && (
            <div className="fixed w-full h-full top-0 bottom-0 z-50">
              <div className="fixed top-16 right-4 rounded-lg z-50 bg-blue-400 text-white border border-gray-200 text-sm w-[200px] h-auto flex flex-col justify-center items-start">
                <div
                  className="absolute text-xl top-2 right-2 z-50 text-white"
                  onClick={() => {
                    setShowTestTopics(false);
                  }}
                >
                  <IoClose />
                </div>
                <ul className="relative p-3 w-full flex flex-col justify-center items-start">
                  <li className="w-full">
                    <button className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2">
                      Quants
                    </button>
                  </li>
                  <li className="w-full">
                    <button className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2">
                      OOP
                    </button>
                  </li>
                  <li className="w-full">
                    
                    <button className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2">
                      DBMS
                    </button>
                  </li>
                  <li className="w-full">
                    <button className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2">
                      DSA
                    </button>
                  </li>
                  <li className="w-full">
                    <button className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2">
                      DSA
                    </button>
                  </li>
                  <li className="w-full">
                    <button className="w-full h-[34px] hover:bg-slate-50 hover:text-gray-500 text-white rounded-md text-start pl-2">
                      Verbal
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

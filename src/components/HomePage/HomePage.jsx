import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import Sidebar from "../Sidebar/Sidebar";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { Loader, Pagination } from "@mantine/core";
import { IoIosBulb } from "react-icons/io";
import Filter from "../Filter/Filter";
import Tab from "../Tab/Tab";

import { motion, AnimatePresence } from "framer-motion";

function HomePage() {
  const {
    allquiz,
    openIndex,
    setOpenIndex,
    showSidebar,
    showFilter,
    setShowFilter,
    showBasicQsn,
    setShowBasicQsn,
    showAllQsn,
    setShowAllQsn,

    allBasicQsn,
    setAllBasicQsn,

    showFilterMobileScreen,
    setShowFilterMobile,
  } = useContext(GlobalContext);
  const [checkAnswer, setCheckAnswer] = useState("");
  const [correctOption, setCorrectOption] = useState(null);
  const handleCheckAnwer = (e) => {
    setCorrectOption(e.target.value);
  };
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-col">
        <Tab />

        <div className="flex">
          {showSidebar && <MobileSidebar />}
          <div className="p-4 h-screen overflow-y-hidden hidden md:block md:w-3/12 border border-y-2 border-t-0 border-b-0 sticky top-0 bottom-0 bg-[#007acc]">
            <Sidebar />
          </div>

          {/* For showing the basic questions  */}

          {showAllQsn && (
            <div className="w-full md:w-8/12 relative flex flex-col gap-2 h-full">
              <div className="h-[20px]"></div>
              {allquiz.map((i, index) => {
                return (
                  <div className="single-qs w-11/12" key={i._id}>
                    <div>
                      
                      <p className="text-lg font-normal text-black z-* pl-5">
                        <span className="pr-2">{index+1})</span>
                        {i.question}
                        {i.level != "Intermediate" && i.level != "Advanced" && (
                          <span class="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Basic
                          </span>
                        )}

                        {i.level === "Intermediate" && (
                          <span class="ml-2 inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-600/20">
                            Intermediate
                          </span>
                        )}

                        {i.level === "Advanced" && (
                          <span class="ml-2 inline-flex items-center rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-500 ring-1 ring-inset ring-orange-600/20">
                            Advanced
                          </span>
                        )}
                      </p>
                    </div>
                    <p>
                      {i.code ? (
                        <div className="w-screen md:w-full pl-2 pr-2">
                          <SyntaxHighlighter language="cpp">
                            {i.code}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        ""
                      )}
                    </p>

                    {i.options.map((index, x) => {
                      return (
                        <div className="options flex justify-start items-start text-md gap-2 text-gray-700 font-extralight pl-5">
                          <div className="text-[#007acc]">{x + 1})</div>
                          <label className="text-md">{index}</label>
                        </div>
                      );
                    })}

                    <div>{checkAnswer}</div>
                    <button
                      className="w-[100px] h-[34px] bg-[#007acc] rounded-lg text-white text-xs ml-5"
                      onClick={() => {
                        toggleItem(i);
                      }}
                    >
                      View Answer
                    </button>
                    {openIndex === i && (
                      <div className="flex flex-col pl-5">
                        <div className="answer text-green-500 text-md">
                          <span className="text-gray-700">Answer:</span>{" "}
                          <span className="">{i.correctOption}</span>
                        </div>
                        <div className="flex justify-start items-start text-md">
                          <span className="mr-2">Explaination: </span>
                          {i.explaination ? (
                            <div> {i.explaination} </div>
                          ) : (
                            "NA"
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="h-[80px]"></div>
            </div>
          )}

          {/* {!showFilterMobileScreen && (
            <div className="sticky top-0 right-0 bottom-0 p-4 h-screen hidden md:block md:w-3/12 border border-y-2 border-t-0 border-b-0 bg-[#007acc] md:bg-white">
              <Filter />
            </div>
          )} */}
        </div>
      </div>

      {/* <div className="flex justify-between"></div> */}

      {showFilterMobileScreen && <Filter />}
    </>
  );
}

export default HomePage;

import React, { useContext, useState } from "react";
import "./Tab.css";
// import TestInterface from "../TestInterface/TestInterface";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { GlobalContext } from "../../GlobalContext";

function Tab() {
  const handle = useFullScreenHandle();
  const [isTest, setIsTest] = useState(false);
  const { setTopic } = useContext(GlobalContext);

  return (
    <>
      <div className="tab-wrapper w-full h-[64px] bg-blue-200 flex flex-row justify-end gap-6 items-center">
        {/* <div className="w-[40%] flex flex-row bg-orange-400 justify-end gap-6 items-center">
          <div>
            <select
              className="w-[70%]"
              onChange={(e) => setTopic(e.target.value)}
            >
              <option>Select</option>
              <option
                onChange={(e) => {
                  setTopic("quantitative-aptitude");
                }}
              >
                Quantitative Aptitude
              </option>
              <option
                onChange={(e) => {
                  setTopic("verbal");
                }}
              >
                Verbal
              </option>
              <option
                onChange={(e) => {
                  setTopic("oop");
                }}
              >
                OOP
              </option>
            </select>
          </div> */}
          <button className="test-btn w-[100px] h-[44px] bg-blue-400 rounded-md mx-4 text-sm text-white">
            Take Test
          </button>
      </div>
    </>
  );
}

export default Tab;

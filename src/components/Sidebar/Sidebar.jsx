import React, { useContext } from "react";
import "./Sidebar.css";
import { GlobalContext } from "../../GlobalContext";

function Sidebar() {
  const { setTopic, setShowSidebar } = useContext(GlobalContext);
  return (
    <div className="flex flex-col gap-2 justify-start">
      <h3 className="topics-heading">Topics</h3>

      <button
        onClick={(e) => {
          setTopic("quantitative-aptitude")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-blue-400 focus-within:bg-slate-50"
      >
        {" "}
        Quants{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("verbal")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-blue-400 focus-within:bg-slate-50"
      >
        {" "}
        Verbal{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("oop")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-blue-400 focus-within:bg-slate-50"
      >
        {" "}
        OOP{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dbms")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-blue-400 focus-within:bg-slate-50"
      >
        {" "}
        DBMS{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dsa")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-blue-400 focus-within:bg-slate-50"
      >
        {" "}
        DSA{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("computer-networks")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-blue-400 focus-within:bg-slate-50"
      >
        {" "}
        CN{" "}
      </button>
    </div>
  );
}

export default Sidebar;

import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { IoMdClose } from "react-icons/io";

function MobileSidebar() {
    const {setTopic, setShowSidebar} = useContext(GlobalContext)
  return (
    <div className="relative w-full h-screen flex flex-col gap-2 justify-start">

        <button className="absolute top-3 right-3 text-2xl" onClick={() => setShowSidebar(false)}><IoMdClose /></button>

      <h3 className="text-2xl ml-1 font-semibold">Topics</h3>

      <button
        onClick={(e) => {
          setTopic("quantitative-aptitude");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        Quants{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("verbal");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        Verbal{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("oop");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        OOP{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dbms");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        DBMS{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dsa");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        DSA{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("computer-networks");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        CN{" "}
      </button>
    </div>
  );
}

export default MobileSidebar;

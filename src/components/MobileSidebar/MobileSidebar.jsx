import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { IoMdClose } from "react-icons/io";
import { BiMath } from "react-icons/bi";
import { PiTextAaFill } from "react-icons/pi";
import { MdDataObject } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { TbBinaryTree } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";

function MobileSidebar() {
  const { setTopic, setShowSidebar } = useContext(GlobalContext);
  return (
    <div className="relative w-full h-screen flex flex-col gap-2 justify-start">
      <button
        className="absolute top-0 right-0 text-2xl"
        onClick={() => setShowSidebar(false)}
      >
        <IoMdClose />
      </button>

      <h3 className="text-2xl ml-1 font-semibold">InsightIQ</h3>

      <button
        onClick={(e) => {
          setTopic("quantitative-aptitude");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-white">
          <BiMath />
        </div>
        Quants{" "}
      </button>

      <button
        onClick={(e) => {
          setTopic("verbal");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-white">
          <PiTextAaFill />
        </div>
        Verbal{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("oop");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-white">
          <MdDataObject />
        </div>
        OOP{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dbms");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-white">
          <FaDatabase />
        </div>
        DBMS{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dsa");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-white">
          <TbBinaryTree />
        </div>
        DSA{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("computer-networks");
          setShowSidebar(false);
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 hover:text-black focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-white">
          <FaNetworkWired />
        </div>
        CN{" "}
      </button>

      <div className="w-full flex justify-center items-center">
        <button className="absolute w-[80%] bottom-12 text-sm h-9 pl-2 rounded-md flex gap-2 justify-center items-center cursor-pointer border-none bg-white text-blue-400 font-semibold hover:bg-slate-50 focus-within:bg-slate-50">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default MobileSidebar;

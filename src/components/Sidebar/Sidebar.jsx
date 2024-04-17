import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { BiMath } from "react-icons/bi";
import { PiTextAaFill } from "react-icons/pi";
import { MdDataObject } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { TbBinaryTree } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";


function Sidebar() {
  const { setTopic, setShowSidebar } = useContext(GlobalContext);
  return (
    <div className="relative flex flex-col gap-2 justify-start">
      <h3 className="text-2xl ml-1 font-semibold">Topics</h3>

      <button
        onClick={(e) => {
          setTopic("quantitative-aptitude")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-blue-400"><BiMath /></div>
        Quantitative Aptitude{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("verbal")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-blue-400"><PiTextAaFill /></div>
        Verbal Ability{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("oop")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-blue-400"><MdDataObject /></div>
        OOP{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dbms")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-blue-400"><FaDatabase /></div>
        DBMS{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("dsa")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-blue-400"><TbBinaryTree /></div>
        DSA{" "}
      </button>
      <button
        onClick={(e) => {
          setTopic("computer-networks")
          setShowSidebar(false)
        }}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-50 focus-within:bg-slate-50"
      >
        {" "}
        <div className="text-xl text-blue-400"><FaNetworkWired  /></div>
        Computer Networks{" "}
      </button>

      
    </div>
  );
}

export default Sidebar;

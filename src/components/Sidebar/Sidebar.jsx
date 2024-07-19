import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { BiMath } from "react-icons/bi";
import { PiTextAaFill } from "react-icons/pi";
import { MdDataObject } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { setTopic, setShowSidebar } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = (topic) => {
    navigate(`/home/${topic ? topic : ''}`)
    setTopic(topic);
    setShowSidebar(false);
  };

  return (
    <div className="relative flex flex-col gap-2 justify-start -z-20 p-4">
      <h3 className="text-2xl ml-1 font-semibold md:hidden">Topics</h3>

      <button
        onClick={() => handleClick("quantitative-aptitude")}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
      >
        <div className="text-xl text-white">
          <BiMath />
        </div>
        Quantitative Aptitude
      </button>
      <button
        onClick={() => handleClick("verbal")}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
      >
        <div className="text-xl text-white">
          <PiTextAaFill />
        </div>
        Verbal Ability
      </button>
      <button
        onClick={() => handleClick("oop")}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
      >
        <div className="text-xl text-white">
          <MdDataObject />
        </div>
        OOP
      </button>
      <button
        onClick={() => handleClick("dbms")}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
      >
        <div className="text-xl text-white">
          <FaDatabase />
        </div>
        DBMS
      </button>
      <button
        onClick={() => handleClick("dsa")}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
      >
        <div className="text-xl text-white">
          <TbBinaryTree />
        </div>
        DSA
      </button>
      <button
        onClick={() => handleClick("computer-networks")}
        className="text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
      >
        <div className="text-xl text-white">
          <FaNetworkWired />
        </div>
        Computer Networks
      </button>
    </div>
  );
}

export default Sidebar;

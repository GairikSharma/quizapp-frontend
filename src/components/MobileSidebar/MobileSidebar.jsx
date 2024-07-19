import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { GlobalContext } from "../../GlobalContext";
import { IoMdClose } from "react-icons/io";
import { BiMath } from "react-icons/bi";
import { PiTextAaFill } from "react-icons/pi";
import { MdDataObject } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MobileSidebar = () => {
  const { setTopic, showSidebar, setShowSidebar } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = (topic) => {
    setTopic(topic);
    setShowSidebar(false);
    navigate(`/home/${topic}`);
  };

  const sidebarVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {showSidebar && (
        <motion.div
          className="p-4 h-screen bg-[#007acc] text-white w-full fixed top-0 left-0 z-50"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setShowSidebar(false)}
          >
            <IoMdClose />
          </button>

          <h3 className="text-2xl ml-1 font-semibold mb-4">InsightIQ</h3>

          <button
            onClick={() => handleClick("quantitative-aptitude")}
            className="w-full text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
          >
            <div className="text-xl text-white">
              <BiMath />
            </div>
            Quants
          </button>

          <button
            onClick={() => handleClick("verbal")}
            className="w-full text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
          >
            <div className="text-xl text-white">
              <PiTextAaFill />
            </div>
            Verbal
          </button>

          <button
            onClick={() => handleClick("oop")}
            className="w-full text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
          >
            <div className="text-xl text-white">
              <MdDataObject />
            </div>
            OOP
          </button>

          <button
            onClick={() => handleClick("dbms")}
            className="w-full text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
          >
            <div className="text-xl text-white">
              <FaDatabase />
            </div>
            DBMS
          </button>

          <button
            onClick={() => handleClick("dsa")}
            className="w-full text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
          >
            <div className="text-xl text-white">
              <TbBinaryTree />
            </div>
            DSA
          </button>

          <button
            onClick={() => handleClick("computer-networks")}
            className="w-full text-sm h-9 pl-2 rounded-md flex gap-2 justify-start items-center cursor-pointer border-none hover:bg-slate-300 hover:bg-opacity-30 hover:text-white text-white focus:bg-slate-400 focus:bg-opacity-30"
          >
            <div className="text-xl text-white">
              <FaNetworkWired />
            </div>
            CN
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;

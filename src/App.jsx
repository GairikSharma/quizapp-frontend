import { useEffect, useState } from "react";
import "./App.css";
import { GlobalContext } from "./GlobalContext";
import Tab from "./components/Tab/Tab";
import Sidebar from "./components/Sidebar/Sidebar";
import PracticeQuizContainer from "./components/PracticeQuizContainer/PracticeQuizContainer";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

import { Audio } from "react-loader-spinner";
import TestModal from "./components/TestModal/TestModal";
import { motion } from "framer-motion";
import { IoIosBulb } from "react-icons/io";

function App() {
  const [switchTab, setSwitchTab] = useState("practice");
  const [allquiz, setAllQuiz] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  //state for getting specific questions from specific topics
  const [topic, setTopic] = useState("quantitative-aptitude");

  const [showSidebar, setShowSidebar] = useState(false);
  //state for loader
  const [loader, setLoader] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [showTestTopics, setShowTestTopics] = useState(false);

  const getAllQuiz = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`
      );
      const res = await data.json();
      if (res) {
        setAllQuiz(res.all_qs);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getAllQuiz();
  }, [topic]);

  return (
    <>
      {loader ? (
        <div className="absolte w-full h-screen top-0 bottom-0 right-0 left-0 flex flex-row justify-center items-center bg-blend-darken">
          <motion.div
            animate={{ scale: [1, 1.5, 1] }} // Animate the bulb's scale
            transition={{ duration: 1, repeat: Infinity }} // Set the duration and repeat the animation infinitely
          >
            <IoIosBulb className="text-yellow-500 text-6xl" />
          </motion.div>
        </div>
      ) : (
        <></>
      )}
      <GlobalContext.Provider
        value={{
          allquiz,
          setAllQuiz,
          openIndex,
          setOpenIndex,
          correctAnswer,
          setCorrectAnswer,
          setTopic,
          showSidebar,
          setShowSidebar,
          loader,
          setLoader,
          showMenu,
          setShowMenu,
          showTestTopics,
          setShowTestTopics,
        }}
      >
        <Tab />
        <div className="App w-full relative flex">
          {showSidebar && (
            // <div className="p-4 h-screen z-10 bg-blue-400 text-white block md:hidden w-10/12 fixed top-0 bottom-0">
            <MobileSidebar />
            // </div>
          )}
          {}
          <div className="p-4 h-screen hidden md:block md:w-3/12 border border-y-2 border-t-0 border-b-0 sticky top-0 bottom-0 bg-slate-200">
            <Sidebar />
          </div>
          <div className={showSidebar ? "hidden" : "md:w-10/12"}>
            <PracticeQuizContainer />
          </div>
          {/* <TestModal />  */}
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

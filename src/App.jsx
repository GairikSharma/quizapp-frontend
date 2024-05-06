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
import Pagination from "./components/Pagination/Pagination";
import { BrowserRouter, Link } from "react-router-dom";
import Routing from "./Routing";

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

  //State for test-topic route
  const [testTopic, setTestTopic] = useState("");

  //State for timer and calculating the score
  const [seconds, setSeconds] = useState(10 * 60);
  const [showScore, setShowScore] = useState(false);

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

  // console.log(allquiz.length);

  return (
    <>
      {loader ? (
        <div className="fixed bg-white w-full h-screen top-0 bottom-0 right-0 left-0 flex flex-row justify-center items-center z-50">
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
      <BrowserRouter>
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
            testTopic,
            setTestTopic,
            seconds,
            setSeconds,
            showScore,
            setShowScore,
          }}
        >
          <Tab />
          <div className="App w-full relative flex">
            <Routing />
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

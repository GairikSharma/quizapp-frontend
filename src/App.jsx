import { useEffect, useState } from "react";
import "./App.css";
import { GlobalContext } from "./GlobalContext";
import Tab from "./components/Tab/Tab";
import Sidebar from "./components/Sidebar/Sidebar";
import PracticeQuizContainer from "./components/PracticeQuizContainer/PracticeQuizContainer";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

import { Audio } from "react-loader-spinner";
import TestModal from "./components/TestModal/TestModal";

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
        <div className="absolte w-full h-screen flex flex-row justify-center items-center bg-blend-darken">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#3a79de"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
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
        }}
      >
        <Tab />
        <div className="App w-full relative flex">
          
          {showSidebar && (
            <div className="p-4 h-screen block md:hidden w-10/12 bg-blue-200 fixed top-0 bottom-0">
              <MobileSidebar />
            </div>
          )}
          {}
          <div className="p-4 h-screen hidden md:block md:w-2/12 bg-blue-200 sticky top-0 bottom-0">
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

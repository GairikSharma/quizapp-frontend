import { useEffect, useState } from "react";
import "./App.css";
import { GlobalContext } from "./GlobalContext";
import Tab from "./components/Tab/Tab";
import Sidebar from "./components/Sidebar/Sidebar";
import PracticeQuizContainer from "./components/PracticeQuizContainer/PracticeQuizContainer";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

function App() {
  const [switchTab, setSwitchTab] = useState("practice");
  const [allquiz, setAllQuiz] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  //state for getting specific questions from specific topics
  const [topic, setTopic] = useState("quantitative-aptitude");

  const [showSidebar, setShowSidebar] = useState(false);

  const getAllQuiz = async () => {
    try {
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`
      );
      const res = await data.json();
      if (res) {
        setAllQuiz(res.all_qs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuiz();
  }, [topic]);

  return (
    <>
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
        }}
      >
        <Tab />
        <div className="App w-full relative flex">
          {
            showSidebar && <div className="p-4 h-screen block md:hidden w-10/12 bg-slate-300 sticky top-0 bottom-0"><MobileSidebar /></div>
          }
          {
            
          }
          <div className="p-4 h-screen hidden md:block md:w-2/12 bg-slate-300 sticky top-0 bottom-0">
            <Sidebar />
          </div>
          <div className={showSidebar ? "hidden" : "md:w-10/12"}>
            <PracticeQuizContainer />
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

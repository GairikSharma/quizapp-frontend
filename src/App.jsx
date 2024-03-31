import { useEffect, useState } from "react";
import "./App.css";
import { GlobalContext } from "./GlobalContext";
import Tab from "./components/Tab/Tab";
import Sidebar from "./components/Sidebar/Sidebar";
import PracticeQuizContainer from "./components/PracticeQuizContainer/PracticeQuizContainer";

function App() {
  const [switchTab, setSwitchTab] = useState("practice");
  const [allquiz, setAllQuiz] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  //state for getting specific questions from specific topics
  const [topic, setTopic] = useState("")

  const getAllQuiz = async () => {
    try {
      const data = await fetch(`https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`);
      const res = await data.json();
      if (res) {
        setAllQuiz(res.all_qs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allquiz);
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
          setTopic
        }}
      >
        <div className="App">
          <Tab />
          <div className="flex flex-row">
            <Sidebar />
            <PracticeQuizContainer />
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

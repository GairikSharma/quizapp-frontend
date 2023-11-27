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

  const getAllQuiz = async () => {
    try {
      const data = await fetch("http://localhost:7000/all-questions");
      const res = await data.json();
      if (res) {
        setAllQuiz(res.allquestions);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuiz();
  }, []);

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
        }}
      >
        <div className="App">
          <Tab />
          <div className="container">
            <Sidebar />
            <PracticeQuizContainer />
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

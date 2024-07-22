import { useContext, useEffect, useState } from "react";
import Timer from "../components/timer/Timer";
import { IoCloudDone } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { motion } from "framer-motion";
import { IoIosBulb } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { RxLinkedinLogo } from "react-icons/rx";

function MockTest1() {
  const {
    seconds,
    setSeconds,
    showScore,
    setShowScore,
    testTopic,
    loader,
    setLoader,
  } = useContext(GlobalContext);
  const { width, height } = useWindowSize();
  const [questions, setQuestions] = useState([]);
  const [topic, setTopic] = useState("oop");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testloader, setTestLoader] = useState(true);
  const [showScorePopUp, setShowScorePopUp] = useState(false);
  const [waitingForScore, setWaitingForScore] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${testTopic}`
      );
      const res = await data.json();
      if (res) {
        const shuffledQuestions = res.all_qs.sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffledQuestions.slice(
          0,
          Math.min(shuffledQuestions.length, 20)
        );
        setQuestions(selectedQuestions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTestLoader(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [testTopic]);

  useEffect(() => {
    if (seconds === 0) {
      handleSubmission();
    }
  }, [seconds]);

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (selectedOptions[question._id] === question.correctOption) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const handleSubmission = () => {
    setSubmitClicked(true);
    setSeconds(0);
    calculateScore();
    setTimeout(() => {
      setShowScorePopUp(true);
      setWaitingForScore(false);
    }, 3000);
  };

  const handleShowScorePopUp = () => {
    setShowScorePopUp(true);
  };

  const goBackToHomeScreen = () => {
    navigate("/home");
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.max(prevIndex - 1, 0)
    );
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <>
      {testloader ? (
        <div className="fixed bg-white w-full h-screen top-0 bottom-0 right-0 left-0 flex flex-row justify-center items-center z-50">
          <motion.div
            animate={{ scale: [1, 1.5, 1] }} 
            transition={{ duration: 1, repeat: Infinity }} 
          >
            <IoIosBulb className="text-yellow-500 text-6xl" />
          </motion.div>
        </div>
      ) : (
        <div className="fixed top-0 bg-white w-full overflow-y-scroll h-screen flex flex-col">
          <div className="tab-section w-full h-[64px] border-b-2 shadow-sm flex justify-around items-center">
            <span className="hidden md:block font-semibold text-md opacity-30">
              Mock Test Powered by InsightIQ
            </span>
            <div className="flex gap-5 h-full justify-center items-center">
              <div className="hidden md:block">Time remaining</div>
              <div className="h-full flex justify-center items-center justify-items-center">
                <Timer />
              </div>
            </div>
          </div>

          <div className="relative flex h-screen overflow-y-scroll">
            

            {questions.length > 0 && (
              <div className="p-5 w-full md:w-[74%] h-auto">
                <span className="font-semibold text-xl">
                  Question {currentQuestionIndex + 1}
                </span>
                <p className="w-full text-xl font-normal">
                  {questions[currentQuestionIndex].question}
                </p>
                <p>
                  {questions[currentQuestionIndex].code ? (
                    <div className="w-screen md:w-full pl-2 pr-2">
                      <SyntaxHighlighter language="cpp">
                        {questions[currentQuestionIndex].code}
                      </SyntaxHighlighter>
                    </div>
                  ) : null}
                </p>
                <ul className="w-full p-5 mr-4 mt-4 flex flex-col gap-5">
                  {questions[currentQuestionIndex].options.map((option, oIndex) => (
                    <li
                      key={oIndex}
                      className="w-full text-md flex gap-4 justify-start items-center"
                    >
                      <input
                        type="radio"
                        id={`option-${oIndex}`}
                        name={`question-${questions[currentQuestionIndex]._id}`}
                        value={option}
                        checked={
                          selectedOptions[questions[currentQuestionIndex]._id] === option
                        }
                        onChange={() =>
                          handleOptionChange(questions[currentQuestionIndex]._id, option)
                        }
                      />
                      <label htmlFor={`option-${oIndex}`}>{option}</label>
                    </li>
                  ))}
                </ul>
                <div className="h-[100px]"></div>
              </div>
            )}

            <div className="flex gap-3 justify-start fixed bottom-4 left-4">
              <div className="">
                <button
                  className="w-[120px] h-[34px] rounded-lg text-white text-sm font-medium bg-[#007acc]"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
              </div>

              <div className="">
                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    className="w-[120px] h-[34px] rounded-lg text-white text-sm font-medium bg-[#007acc]"
                    onClick={goToNextQuestion}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="w-[120px] h-[34px] rounded-lg text-white text-sm font-medium bg-[#007acc]"
                    onClick={handleSubmission}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar for question navigation */}
            <div className="lg:w-1/4 border-r-2 border-gray-200 p-4">
              <h3 className="font-semibold mb-4">Questions</h3>
              <ul className="flex flex-row flex-wrap gap-2">
                {questions.map((question, index) => (
                  <span key={question._id}>
                    <button
                      className={`p-2 rounded-lg text-center w-[34px] h-[34px] ${
                        index === currentQuestionIndex
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => goToQuestion(index)}
                    >
                    {index + 1}
                    </button>
                  </span>
                ))}
              </ul>
              <button
                className="mt-4 w-full p-2 bg-blue-600 text-white rounded-lg"
                onClick={handleSubmission}
              >
                Submit
              </button>
            </div>
          </div>

          
        </div>

        
      )}

      {submitClicked ? (
        <div className="fixed w-full h-full top-0 bottom-0 left-0 flex flex-col justify-center items-center bg-slate-100">
          {waitingForScore ? (
            <div className="text-sm md:text-lg w-[80%] text-center flex flex-col justify-center items-center">
              <div className="text-xl text-green-400">
                Your response has been saved successfully ✓
              </div>
              <div className="text-sm md:text-lg w-[80%] text-center flex justify-center items-center">
                Please wait for some times to know your score
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <Confetti width={width} height={height} />
              <div className="text-lg md:text-2xl text-center text-[#007acc]">
                Congratulation on completing the quiz!
              </div>
              {score > 10 ? (
                <div className="text-green-400 text-lg font-semibold">
                  Well done!
                </div>
              ) : (
                <div className="text-orange-600 text-lg font-semibold animate-pulse">
                  Try To Improve
                </div>
              )}
              <div className="w-[80%] h-[20%] rounded-xl flex gap-2 justify-center items-center">
                <p className="text-2xl text-center">
                  Your Score <span className="text-4xl">{score}/20</span>
                </p>
              </div>
              <div className="w-full h-auto flex flex-wrap md:flex gap-2 justify-center items-center">
                <button
                  className="w-[120px] h-[34px] bg-[#007acc] rounded-lg mt-2 text-white"
                  onClick={goBackToHomeScreen}
                >
                  Go Back
                </button>

                <button
                  className="w-[120px] h-[34px] bg-[#007acc] rounded-lg mt-2 text-white"
                  onClick={goBackToHomeScreen}
                >
                  Retake Test
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}

      
    </>
  );
}

export default MockTest1;

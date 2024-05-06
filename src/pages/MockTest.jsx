import { useContext, useEffect, useState } from "react";
import Timer from "../components/timer/Timer";
import { IoCloudDone } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { motion } from "framer-motion";
import { IoIosBulb } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

function MockTest() {
  const {
    seconds,
    setSeconds,
    showScore,
    setShowScore,
    testTopic,
    loader,
    setLoader,
  } = useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);
  const [topic, setTopic] = useState("oop");
  const [submitClicked, setSubmitClicked] = useState(false);

  const [nqs, setNQs] = useState(1);
  const [pqs, setPQs] = useState(0);
  //State for test page loader
  const [testloader, setTestLoader] = useState(true);
  const fetchQuestions = async () => {
    try {
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${testTopic}`
      );
      const res = await data.json();
      if (res) {
        setQuestions(res.all_qs);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTestLoader(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  //State for score modal
  const [showScorePopUp, setShowScorePopUp] = useState(false);
  const [waitingForScore, setWaitingForScore] = useState(true);

  const handleSubmission = () => {
    setSubmitClicked(true);
    setSeconds(0);
    setTimeout(() => {
      handleShowScorePopUp();
      setWaitingForScore(false);
    }, 3000);
  };

  const handleShowScorePopUp = () => {
    setShowScorePopUp(true);
  };

  const [trueCount, setTrueCount] = useState(0);
  const [currentOptionStatus, setCurrentOptionStatus] = useState(false);

  useEffect(() => {
    if (seconds == 0) {
      setSubmitClicked(true);
      setTimeout(() => {
        handleShowScorePopUp();
        setWaitingForScore(false);
      }, 3000);
    }
  }, [seconds]);

  const navigate = useNavigate();
  const goBackToHomeScreen = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {testloader ? (
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
      <div className="fixed top-0 bg-white w-full h-screen flex flex-col">
        <div className="tab-section w-full h-[64px] border-b-2 shadow-sm flex justify-around items-center">
          <span className="hidden md:block font-semibold text-md opacity-30">
            Mock Test Powered by InsightIQ
          </span>
          <div className="flex gap-5 h-full justify-center items-center">
            <div className="hidden md:block">Time remaining</div>{" "}
            <div className="h-full flex justify-center items-center justify-items-center">
              <Timer />
            </div>
          </div>
        </div>

        <div className="relative flex justify-between h-full">
          {questions.slice(pqs, nqs).map((question, qIndex) => (
            <div className="p-5 md:w-[74%] h-[100%]" key={question._id}>
              <span className="font-semibold text-xl">Question {nqs}</span>
              <p className="w-full  text-xl font-normal">{question.question}</p>

              <p>
                {question.code ? (
                  <div className="w-screen md:w-full pl-2 pr-2">
                    <SyntaxHighlighter language="cpp">
                      {question.code}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  ""
                )}
              </p>

              <ul className="w-full p-5 mr-4 mt-4 flex flex-col gap-5">
                {question.options.map((option, oIndex) => (
                  <li
                    key={oIndex}
                    className="w-full text-md flex gap-4 justify-start items-center"
                  >
                    <input
                      type="radio"
                      id={`option-${oIndex}`}
                      name={`question-${question._id}`}
                      value={option}
                      onChange={(e) => {
                        if (
                          e.target.value === question.correctOption &&
                          currentOptionStatus === false
                        ) {
                          setCurrentOptionStatus(true);
                          setTrueCount(trueCount + 2);
                        } else if (
                          e.target.value !== question.correctOption &&
                          currentOptionStatus === true
                        ) {
                          setCurrentOptionStatus(false);
                          setTrueCount(trueCount - 2);
                        }
                      }}
                    />
                    {/* Wrap the text inside the label and associate it with the input */}
                    <label htmlFor={`option-${oIndex}`}>{option}</label>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-4 left-4">
                <button
                  className="w-[120px] h-[34px] rounded-lg text-white text-sm font-medium bg-blue-400"
                  onClick={() => {
                    setPQs(Math.min(pqs + 1, questions.length - 1));
                    setNQs(Math.min(nqs + 1, questions.length));
                    setCurrentOptionStatus(false);
                  }}
                >
                  Save and Next
                </button>
              </div>

              <div className="md:hidden absolute bottom-4 left-40">
                <button
                  className="w-[80px] h-[34px] rounded-lg text-white text-sm font-medium bg-blue-400"
                  onClick={handleSubmission}
                >
                  Submit
                </button>
              </div>
            </div>
          ))}

          <div className="hidden md:block relative w-[24%] h-full bg-blue-400">
            <div className="question-numbers w-full h-auto flex gap-4 flex-wrap flex-row justify-center p-4">
              {questions.map((item, index) => {
                return (
                  <div>
                    {index >= nqs ? (
                      <div className="w-10 h-10 rounded-md bg-white flex justify-center items-center">
                        {index + 1}
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-white flex justify-center items-center opacity-30">
                        {index + 1}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-4 left-4">
              <button
                className="w-[80px] h-[34px] rounded-lg text-blue-400 text-sm font-medium bg-white"
                onClick={handleSubmission}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {submitClicked ? (
        <div className="fixed w-full h-full top-0 bottom-0 left-0 flex flex-col justify-center items-center bg-slate-100">
          {waitingForScore ? (
            <div className="text-sm md:text-lg w-[80%] text-center flex flex-col justify-center items-center">
              <div className="text-xl text-green-400">
                Your response has been saved successfully ✓
              </div>
              <div className="text-sm md:text-lg w-[80%] text-center flex justify-center items-center">
                Please wait for some times to know your score
                <div class="ml-3 relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[80%] h-[25%] md:w-[50%] md:h-[50%] rounded-2xl shadow-xl border-2 bg-white border-gray-100 flex flex-col justify-center items-center">
              {trueCount > 10 ? (
                <div className="text-green-400 text-lg font-semibold">
                  Congratulation
                </div>
              ) : (
                <div className="text-orange-400 text-lg font-semibold">
                  Try To Improve
                </div>
              )}
              <p>Your Score: {trueCount}</p>
              <div>
                <button
                  className="w-[100px] h-[34px] bg-blue-500 rounded-lg mt-2 text-white"
                  onClick={goBackToHomeScreen}
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default MockTest;

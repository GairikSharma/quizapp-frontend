import React, { useContext, useState } from "react";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";

function Instruction() {
  const { testTopic, setTestTopic } = useContext(GlobalContext);
  const [Ischecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    Ischecked ? setIsChecked(false) : setIsChecked(true);
  };

  const navigate = useNavigate();
  const goToHomeScreen = () => {
    navigate("/");
  };

  const goToMockTest = () => {
    navigate("/mock-test/test_topic");
  };

  return (
    <div>
      <section className="w-full min-h-screen mx-auto fixed top-0 bottom-0 bg-white">
        <div className="space-y-6 h-full overflow-y-scroll p-5">
          <div className="space-y-2">
            <h1 className="text-[#007acc] text-3xl font-bold tracking-tight sm:text-4xl">
              Instructions
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please read the following instructions carefully before starting
              the test.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-[#007acc] text-lg font-semibold">
                Test Format and Duration
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                The test consists of 20 multiple-choice questions. You will have
                25 minutes to complete the test.
              </p>
            </div>
            <div>
              <h2 className="text-[#007acc] text-lg font-semibold">
                Guidelines
              </h2>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="text-green-400">
                    <MdDone />
                  </div>
                  <span>
                    Answer all questions to the best of your knowledge.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="text-green-400">
                    <MdDone />
                  </div>
                  <span>
                    You do not back to the previous question during the test.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="text-green-400">
                    <MdDone />
                  </div>
                  <span>
                    If you are unable to complete all the questions by time,
                    your paper will be submitted automatically
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="text-green-400">
                    <MdDone />
                  </div>
                  <span>
                    Do not use any external resources or devices during the
                    test.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="text-green-400">
                    <MdDone />
                  </div>
                  <span>
                    Submit your answers before the time limit expires.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="text-green-400">
                    <MdDone />
                  </div>
                  <span>
                    Ensure you have a stable internet connection throughout the
                    test.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="self_declaration"
                  id="self_declaration"
                  onChange={handleCheck}
                />
                <label htmlFor="self-declaration">
                  I hereby declare that I will complete this test honestly and
                  without any external assistance.
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-start items-center">
            <div
              className={
                Ischecked
                  ? "w-[120px] h-[34px] bg-[#007acc] text-white rounded-lg flex justify-center items-center"
                  : "w-[120px] h-[34px] bg-[#007acc] opacity-40 text-white rounded-lg flex justify-center items-center"
              }
            >
              <button
                disabled={!Ischecked}
                onClick={() => {
                  goToMockTest()
                }}
              >
                Start Test
              </button>
            </div>

            <div>
              <button
                className="w-[120px] h-[34px] bg-[#007acc] text-white rounded-lg flex justify-center items-center"
                onClick={() => {
                  goToHomeScreen();
                }}
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Instruction;

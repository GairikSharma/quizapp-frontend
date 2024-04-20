import React, { useContext, useState } from "react";
import "./PracticeQuizContainer.css";
import { GlobalContext } from "../../GlobalContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function PracticeQuizContainer() {
  const { allquiz, openIndex, setOpenIndex } = useContext(GlobalContext);
  const [checkAnswer, setCheckAnswer] = useState("");
  const [correctOption, setCorrectOption] = useState(null);
  const handleCheckAnwer = (e) => {
    setCorrectOption(e.target.value);
  };
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2 pl-5 mt-3">
      {allquiz.map((i) => {
        return (
          <div className="single-qs w-11/12" key={i._id}>
            <p className="text-lg font-normal text-black z-*">
              {i.question}
            </p>
            <p>
              {i.code ? (
                <div className="w-screen md:w-full">
                  <SyntaxHighlighter language="cpp">
                    {i.code}
                  </SyntaxHighlighter>
                </div>
              ) : (
                ""
              )}
            </p>
            
            {i.options.map((index, x) => {
              return (
                <div className="options text-sm text-gray-500 font-extralight">
                  <div>{x + 1})</div>
                  <label className="text-xs">{index}</label>
                </div>
              );
            })}

            <div>{checkAnswer}</div>
            <button
              className="w-[100px] h-[34px] bg-blue-400 rounded-lg text-white text-xs"
              onClick={() => {
                toggleItem(i);
              }}
            >
              View Answer
            </button>
            {openIndex === i && (
              <div className="flex flex-col">
                <div className="answer text-green-500">
                  <span className="text-gray-500">Answer:</span>{" "}
                  <span className="">{i.correctOption}</span>
                </div>
                <div className="flex justify-start items-start text-sm">
                  <span className="mr-2">Explaination: </span>
                  {i.explaination ? <div> {i.explaination} </div> : "NA"}
                </div>
              </div>
            )}
            <div className="w-full h-3"></div>
          </div>
        );
      })}
    </div>
  );
}

export default PracticeQuizContainer;

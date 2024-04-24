import React, { useContext, useState } from "react";
import "./PracticeQuizContainer.css";
import { GlobalContext } from "../../GlobalContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Pagination from "../Pagination/Pagination";

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
    <div className="relative flex flex-col gap-2 h-full">
      {allquiz.map((i) => {
        return (
          <div className="single-qs w-11/12" key={i._id}>
            <p className="text-lg font-normal text-black z-* pl-5">
              {i.question}
            </p>
            <p>
              {i.code ? (
                <div className="w-screen md:w-full pl-2 pr-2">
                  <SyntaxHighlighter language="cpp">{i.code}</SyntaxHighlighter>
                </div>
              ) : (
                ""
              )}
            </p>

            {i.options.map((index, x) => {
              return (
                <div className="options text-sm text-[#34495e] font-extralight pl-5">
                  <div>{x + 1})</div>
                  <label className="text-xs">{index}</label>
                </div>
              );
            })}

            <div>{checkAnswer}</div>
            <button
              className="w-[100px] h-[34px] bg-[#007acc] rounded-lg text-white text-xs ml-5"
              onClick={() => {
                toggleItem(i);
              }}
            >
              View Answer
            </button>
            {openIndex === i && (
              <div className="flex flex-col pl-5">
                <div className="answer text-green-500">
                  <span className="text-[#34495e]">Answer:</span>{" "}
                  <span className="">{i.correctOption}</span>
                </div>
                <div className="flex justify-start items-start text-sm">
                  <span className="mr-2">Explaination: </span>
                  {i.explaination ? <div> {i.explaination} </div> : "NA"}
                </div>
              </div>
            )}
            
          </div>
        );
      })}
      <div className="h-[80px]"></div>
      <div className="absolute w-full bottom-2 pl-2 pr-2"><Pagination /></div>
    </div>
  );
}

export default PracticeQuizContainer;

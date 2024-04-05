import React, { useContext, useState } from "react";
import "./PracticeQuizContainer.css";
import { GlobalContext } from "../../GlobalContext";

function PracticeQuizContainer() {
  const {
    allquiz,
    openIndex,
    setOpenIndex,
    correctAnswer,
    setCorrectAnswer,
    loader,
    setLoader,
  } = useContext(GlobalContext);
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
            <p className="text-lg font-semibold">{i.question}</p>
            {i.options.map((index, x) => {
              return (
                <div className="options text-sm">
                  <div>{x + 1})</div>
                  <label>{index}</label>
                </div>
              );
            })}
            <div>{checkAnswer}</div>
            <button
              className="w-[100px] h-[34px] bg-blue-400 rounded-sm text-white text-xs"
              onClick={() => toggleItem(i)}
            >
              View Answer
            </button>
            {openIndex === i && (
              <div className="flex flex-col">
                <div className="answer text-green-500">
                  <span className="text-[#020617]">Answer:</span>{" "}
                  {i.correctOption}
                </div>
                <div>Explaination: {i.explaination ? <div> {i.explaination} </div> : "NA"}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PracticeQuizContainer;

import React, { useContext, useState } from "react";
import "./PracticeQuizContainer.css";
import { GlobalContext } from "../../GlobalContext";

function PracticeQuizContainer() {
  const { allquiz, openIndex, setOpenIndex, correctAnswer, setCorrectAnswer } =
    useContext(GlobalContext);
  const [checkAnswer, setCheckAnswer] = useState("");
  const [correctOption, setCorrectOption] = useState(null);
  const handleCheckAnwer = (e) => {
    setCorrectOption(e.target.value);
  };
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="practiceQuizContainer-container">
      {allquiz.map((i) => {
        return (
          <div className="single-qs" key={i._id}>
            <p className="text-md">{i.question}</p>
            {i.options.map((index, x) => {
              return (
                <div className="options">
                  {/* <input
                    type="radio"
                    onChange={handleCheckAnwer}
                    value={i.correctOptionIndex}
                    name={i.correctOptionIndex + 1}
                  /> */}
                  <div>{x+1})</div>
                  <label>{index}</label>
                </div>
              );
            })}
            <div>{checkAnswer}</div>
            <button className="w-[130px] h-[40px] bg-blue-400 rounded-lg text-white" onClick={() => toggleItem(i)}>View Answer</button>
            {openIndex === i && (
              <div className="answer text-green-500">Answer: {i.correctOption}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PracticeQuizContainer;

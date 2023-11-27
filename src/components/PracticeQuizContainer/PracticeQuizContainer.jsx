import React, { useContext, useState } from "react";
import "./PracticeQuizContainer.css";
import { GlobalContext } from "../../GlobalContext";

function PracticeQuizContainer() {
  const { allquiz, openIndex, setOpenIndex, correctAnswer, setCorrectAnswer } =
    useContext(GlobalContext);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="practiceQuizContainer-container">
      {allquiz.map((i) => {
        return (
          <div className="single-qs" key={i._id}>
            <p>{i.question}</p>
            {i.options.map((x) => {
              return (
                <div className="options">
                  <input
                    type="radio"
                    onChange={(e) => setCorrectOption(e.target.value)}
                    name={i.correctOptionIndex + 1}
                  />
                  <label>{x}</label>
                </div>
              );
            })}
            <button onClick={() => toggleItem(i)}>View Answer</button>
            {openIndex === i && <div className="answer">{i.options[i.correctOptionIndex]}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default PracticeQuizContainer;

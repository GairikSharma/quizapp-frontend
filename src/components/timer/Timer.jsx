import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

function Timer() {
  const { seconds, setSeconds, showScore, setShowScore } =
    useContext(GlobalContext);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="h-[44px] w-[150px] bg-white border-2 border-gray-300 m-auto rounded-lg shadow-xl flex flex-col justify-center items-center">
        <h2>{formatTime(seconds)}</h2>
      </div>
    </div>
  );
}

export default Timer;

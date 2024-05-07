import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function ScoreComponent() {
  //   const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const goBackToHomeScreen = () => {
    navigate("/");
    window.location.reload();
  };
  const [trueCount, setTrueCount] = useState(0);
  return (
    <>
      {/* {trueCount > 10 && <Confetti />} */}
      <Confetti />
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
    </>
  );
}

export default ScoreComponent;

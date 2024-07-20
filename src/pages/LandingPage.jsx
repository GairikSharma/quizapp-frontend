import React, { useRef, useContext } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

function LandingPage() {
  const { topic, setTopic } = useContext(GlobalContext);
  const navigate = useNavigate();
  const targetRef = useRef(null);

  const contactRef = useRef(null);
  const handleContactRef = () => {
    contactRef.current.scrollIntoView({behavior: "smooth"})
  }

  const goToQuizzes = (topic) => {
    setTopic(topic);
    navigate(`/home/${topic ? topic : ""}`);
  };

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const routingData = [
    {
      id: 1,
      name: "DSA",
      navigateTo: "dsa",
      bg: "#d0d0d0", // Darker Light Gray
    },
    {
      id: 2,
      name: "OOP",
      navigateTo: "oop",
      bg: "#cce0f0", // Darker Pale Blue
    },
    {
      id: 3,
      name: "Computer Network",
      navigateTo: "computer-networks",
      bg: "#e6d8b9", // Darker Soft Beige
    },
    {
      id: 4,
      name: "DBMS",
      navigateTo: "dbms",
      bg: "#b2d0cb", // Darker Mint Green
    },
    {
      id: 5,
      name: "Aptitude",
      navigateTo: "quantitative-aptitude",
      bg: "#e0c1e0", // Darker Lavender
    },
    {
      id: 6,
      name: "Verbal",
      navigateTo: "verbal",
      bg: "#ffd2d2", // Darker Peach
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full flex gap-5 flex-col justify-center items-center">
        <div className="w-[75%] text-3xl font-semibold text-black text-center m-5">
          Master Your Skills with Our Interactive MCQ Practice! Dive into OOP,
          DBMS, DSA, and more!
        </div>
        <div className="hidden md:block w-[90%] md:w-[80%] lg:w-[65%] text-md text-black text-center px-5 m-0 md:m-2 lg:m-5">
          Welcome to your ultimate learning destination! Our platform offers an
          extensive collection of Multiple Choice Questions (MCQs) covering a
          wide array of topics including Object-Oriented Programming (OOP),
          Database Management Systems (DBMS), Data Structures and Algorithms
          (DSA), and many more. Whether you're preparing for exams, interviews,
          or just looking to sharpen your skills, our interactive quizzes
          provide a comprehensive and engaging way to test your knowledge. Start
          practicing today and take your understanding to the next level!
        </div>
        <button
          className="w-[140px] h-[44px] rounded-md border border-blue-700 text-center"
          onClick={handleScroll}
        >
          Get Started
        </button>
      </div>

      <div
        ref={targetRef}
        className="text-center text-2xl lg:text-4xl my-[30px] font-extrabold"
      >
        Start Learning
      </div>
      <div className="w-full flex justify-center my-[30px]">
        <div className="bg-blue-950 py-5 rounded-xl topics w-full md:w-[85%] lg:w-[80%] px-10 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center my-2 md:my-4 lg:my-10">
          {routingData.map((topic) => {
            return (
              <div
                style={{ backgroundColor: topic.bg }}
                className="bg-white w-full h-[180px] transition-transform transform lg:hover:translate-y-[-5px] border border-gray-300 shadow-lg rounded-lg flex gap-5 flex-col justify-center items-center"
              >
                <span>{topic.name}</span>
                <button
                  className="w-[100px] h-[44px] rounded-md border border-blue-700 text-center"
                  onClick={() => goToQuizzes(topic.navigateTo)}
                >
                  Explore
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full text-white bg-black min-h-[150px] footer px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center">
        <span className="text-center">InsightIQ</span>
        <div className="contact text-center">+003-2520-4488</div>
        <div className="icons h-full flex justify-center items-center">
          <div className="w-[40%] text-4xl text-white flex gap-5 justify-center items-center">
            <CiFacebook />
            <FaGoogle />
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

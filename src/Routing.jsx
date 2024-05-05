import React, { useContext } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import Instruction from "./components/instruction/Instruction";
import HomePage from "./components/HomePage/HomePage";

function Routing() {
  const {
    allquiz,
    setAllQuiz,
    openIndex,
    setOpenIndex,
    correctAnswer,
    setCorrectAnswer,
    setTopic,
    showSidebar,
    setShowSidebar,
    loader,
    setLoader,
    showMenu,
    setShowMenu,
    showTestTopics,
    setShowTestTopics,
  } = useContext(GlobalContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/instructions" element={<Instruction />}></Route>
        <Route path="/instructions/test_topic" element={""}></Route>
      </Routes>
    </>
  );
}

export default Routing;

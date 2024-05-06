import React, { useContext } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import Instruction from "./components/instruction/Instruction";
import HomePage from "./components/HomePage/HomePage";
import MockTest from "./pages/MockTest";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/instructions" element={<Instruction />}></Route>
        <Route path="/mock-test/test_topic" element={<MockTest />}></Route>
      </Routes>
    </>
  );
}

export default Routing;

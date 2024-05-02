import React, { useContext } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import App from "./App";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import PracticeQuizContainer from "./components/PracticeQuizContainer/PracticeQuizContainer";
import { IoIosBulb } from "react-icons/io";
import { motion } from "framer-motion";
import { useCombobox } from "@mantine/core";
import { GlobalContext } from "./GlobalContext";
import Instruction from "./components/instruction/Instruction";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/instructions" element={<Instruction />}></Route>
        <Route path="/instructions/test_topic" element={""}></Route>
      </Routes>
    </>
  );
}

export default Routing;

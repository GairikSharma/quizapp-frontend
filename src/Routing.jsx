import { Route, Routes } from "react-router-dom";
import Instruction from "./components/instruction/Instruction";
import HomePage from "./components/HomePage/HomePage";
import MockTest from "./pages/MockTest";
import LandingPage from "./pages/LandingPage";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function Routing() {
  const { topic } = useContext(GlobalContext);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:topic" element={<HomePage />} />
      <Route path="/instructions" element={<Instruction />} />
      <Route path="/mock-test/:topic" element={<MockTest />} />
    </Routes>
  );
}

export default Routing;

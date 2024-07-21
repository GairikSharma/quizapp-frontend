import { Route, Routes } from "react-router-dom";
import Instruction from "./components/instruction/Instruction";
import HomePage from "./components/HomePage/HomePage";
import LandingPage from "./pages/LandingPage";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import MockTest1 from "./pages/Mocktest1";

function Routing() {
  const { topic } = useContext(GlobalContext);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:topic" element={<HomePage />} />
      <Route path="/instructions" element={<Instruction />} />
      <Route path="/mock-test/test" element={<MockTest1 />} />
    </Routes>
  );
}

export default Routing;

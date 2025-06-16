import "./App.css";
import CopperPage from "./componants/Copper Comp/CopperPage";
import CopperPhysicalPage from "./componants/Copper Comp/physical/CopperPhysicalPage";
import MsanPage from "./componants/MSAN Comp/MsanPage";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/copper" element={<CopperPage />} />
        <Route path="/copperPhysical" element={<CopperPhysicalPage />} />

        <Route path="/msan" element={<MsanPage />} />
      </Routes>
    </Router>
  );
}

export default App;

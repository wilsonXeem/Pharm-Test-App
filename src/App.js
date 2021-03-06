import "./App.css";
import Homepage from "./Pages/Homepage";
import StartTestpage from "./Pages/StartTestpage";
import Testpage from "./Pages/Testpage";
import Resultpage from "./Pages/Resultpage";
import TestIntro from "./Pages/TestIntro";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/starttest" element={<StartTestpage />} />
          <Route exact path="/testintro/:course" element={<TestIntro />} />
          <Route exact path="/test/:course" element={<Testpage />} />
          <Route exact path="/result/:course" element={<Resultpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

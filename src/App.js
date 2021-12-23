import "./App.css";
import Homepage from "./Pages/Homepage";
import StartTestpage from "./Pages/StartTestpage";
import Testpage from "./Pages/Testpage";
import Resultpage from "./Pages/Resultpage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/starttest" element={<StartTestpage />} />
          <Route exact path="/test/:course" element={<Testpage />} />
          <Route exact path="/result" element={<Resultpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

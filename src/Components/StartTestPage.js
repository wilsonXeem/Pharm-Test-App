import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ValueContext } from "../Context";

export default function StartTestPage({ course }) {
  const navigate = useNavigate();
  const { questions, time } = useContext(ValueContext);
  return (
    <>
      <div
        style={{ height: "100vh", paddingLeft: "1rem", textAlign: "center" }}
      >
        <h2>Number of Questions: {questions.length}</h2>
        <h2>Time: {time} Minutes</h2>
        <button
          className="testintrobutton"
          onClick={() => navigate(`/test/${course}`)}
        >
          START
        </button>
      </div>
    </>
  );
}

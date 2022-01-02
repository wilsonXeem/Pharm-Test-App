import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ValueContext } from "../../Context";

export default function Result() {
  const { correctAnswer, questions } = useContext(ValueContext);
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");
  const viewCorrections = () => {
    setDisplay("block");
  };
  return (
    <section className="results">
      <h1>
        Score: {correctAnswer.length}/{questions.length}
      </h1>
      <button className="take-test" onClick={() => navigate("/starttest")}>
        Take another test
      </button>
      <button className="take-correction" onClick={viewCorrections}>
        View Corrections
      </button>
      <div style={{ display: `${display}` }}>
        <h2>Corrections:</h2>
        <hr />
        {questions.map((q) => {
          return (
            <section key={q.id}>
              <div className="correct-answer">
                {q.id}. {q.singleQuestion}
                <ol type="a">
                  {q.options.map((option, i) => {
                    return <li key={i}>{option.questionOption}</li>;
                  })}
                </ol>
                Your answer:{" "}
                <span
                  style={{
                    color: `${q.value === q.answer ? "green" : "red"}`,
                  }}
                >
                  {q.value}
                </span>
                <br />
                Correct answer:{" "}
                <span style={{ color: "blue" }}>{q.answer}</span>
              </div>
              <hr />
            </section>
          );
        })}
      </div>
    </section>
  );
}

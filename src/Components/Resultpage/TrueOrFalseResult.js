import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ValueContext } from "../../Context";

export default function TrueOrFalseResult() {
  const { questions } = useContext(ValueContext);
  const navigate = useNavigate();
  return (
    <section className="results">
      <button className="take-test" onClick={() => navigate("/starttest")}>
        Take another test
      </button>
      <div>
        <h1>Results and Corrections:</h1>
        <hr />
        {questions.map((q) => {
          return (
            <section key={q.id}>
              <div className="correct-answered">
                {q.id}. {q.singleQuestion}
                <ol type="a">
                  <table>
                    <thead>
                      <tr>
                        <th>Options</th>
                        <th>correct answer</th>
                        <th>your answers</th>
                      </tr>
                    </thead>
                    {q.options.map((option, i) => {
                      return (
                        <tbody key={i}>
                          <tr>
                            <td>
                              <li>{option.questionOption}</li>
                            </td>
                            <td
                              style={{
                                color: `blue`,
                              }}
                            >
                              {option.optionAnswer}
                            </td>
                            <td
                              style={{
                                color: `${
                                  option.optionAnswer === option.optionValue
                                    ? "green"
                                    : "red"
                                }`,
                              }}
                            >
                              {option.optionValue}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </ol>
              </div>
              <hr />
            </section>
          );
        })}
      </div>
    </section>
  );
}

import React, { useContext } from "react";

import { ValueContext } from "../../../Context";

export default function TrueOrFalseQuestion() {
  const { questions, handleTorFClick, id, handleChange } =
    useContext(ValueContext);

  return (
    <div>
      {questions.map((q) => {
        return id !== q.id ? (
          <p key={q.id} style={{ display: "none" }}></p>
        ) : (
          <section key={q.id} className="questions-section">
            <div className="question">
              {q.id}. {q.singleQuestion}
              <form>
                <ol type="a">
                  <table>
                    <thead>
                      <tr>
                        <th>Options</th>
                      </tr>
                    </thead>
                    {q.options.map((option, i) => {
                      return (
                        <tbody key={i}>
                          <tr>
                            <td>
                              <li>{option.questionOption}</li>
                            </td>
                            <td>
                              <input
                                className="radio"
                                type="radio"
                                value="true"
                                name={option.optionId}
                                onClick={handleTorFClick}
                                onChange={() => handleChange(id)}
                                defaultChecked={option.optionCheck}
                                />
                              T
                            </td>
                            <td>
                              <input
                                className="radio"
                                type="radio"
                                value="false"
                                name={option.optionId}
                                onClick={handleTorFClick}
                                onChange={() => handleChange(id)}
                                defaultChecked={option.optionCheck}
                              />
                              F
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </ol>
              </form>
            </div>
          </section>
        );
      })}
    </div>
  );
}

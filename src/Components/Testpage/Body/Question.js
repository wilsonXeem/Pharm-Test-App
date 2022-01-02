import React, { useContext } from "react";

import { ValueContext } from "../../../Context";

export default function Question() {
  const { questions, handleClick, id, handleChange } = useContext(ValueContext);

  return (
    <div>
      {questions.map((q) => {
        return id !== q.id ? (
          <p key={q.id} style={{ display: "none" }}></p>
        ) : (
          <section key={q.id} className="question-section">
            <div className="question">
              {q.id}. {q.singleQuestion}
              <form>
                <ol type="a">
                  {q.options.map((option, i) => {
                    return (
                      <li key={i}>
                        <input
                          type="radio"
                          value={option.questionOption}
                          name="answer"
                          onClick={handleClick}
                          onChange={() => handleChange(id)}
                          defaultChecked={option.optionCheck}
                        />
                        {option.questionOption}
                      </li>
                    );
                  })}
                </ol>
              </form>
            </div>
          </section>
        );
      })}
    </div>
  );
}

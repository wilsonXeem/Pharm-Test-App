import React, { useContext } from "react";

import { ValueContext } from "../../Context";

export default function Questions() {
  const { questions, background, color, handleNumberClick } =
    useContext(ValueContext);

  return (
    <div className="questions">
      {questions.map((item) => {
        return (
          <button
            className="question-number"
            key={item.id}
            style={{
              background: `${item.answered === true ? background : "black"}`,
              color: `${item.answered === true ? color : "white"}`,
            }}
            onClick={() => handleNumberClick(item.id)}
          >
            {item.id}
          </button>
        );
      })}
    </div>
  );
}

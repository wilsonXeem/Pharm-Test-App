import React, { useContext } from "react";

import { ValueContext } from "../../../Context";

export default function NumberOfQuestions() {
  const { questions } = useContext(ValueContext);
  const answeredQuestions = questions.filter(
    (question) => question.answered === true
  );
  return (
    <div>
      <h1>
        {answeredQuestions.length}/{questions.length}
      </h1>
    </div>
  );
}

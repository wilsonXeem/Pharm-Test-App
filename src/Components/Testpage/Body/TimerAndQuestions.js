import React from "react";

import Timer from "./Timer";
import NumberOfQuestions from "./NumberOfQuestions";

export default function TimerAndQuestions() {
  return (
    <div className="timerandquestions">
      <Timer />
      <NumberOfQuestions />
    </div>
  );
}

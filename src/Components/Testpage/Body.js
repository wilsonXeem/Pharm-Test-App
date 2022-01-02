import React from "react";

import Question from "./Body/Question";
import TrueOrFalseQuestion from "./Body/TrueOrFalseQuestion";
import NextButton from "./Body/NextButton";
import PrevButton from "./Body/PrevButton";

export default function Body({ course }) {
  return (
    <section className="test-body">
      <PrevButton />
      {course === "cology" ? <TrueOrFalseQuestion /> : <Question />}
      <NextButton />
    </section>
  );
}

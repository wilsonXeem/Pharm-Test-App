import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Heading from "../Components/Heading";
import CourseTitle from "../Components/Testpage/CourseTitle";
import Body from "../Components/Testpage/Body";
import Questions from "../Components/Testpage/Questions";
import TimerAndQuestions from "../Components/Testpage/Body/TimerAndQuestions";
import Button from "../Components/Button";
import { useParams } from "react-router-dom";
import { ValueContext } from "../Context";

export default function Testpage() {
  let { course } = useParams();
  const { handleSubmit } = useContext(ValueContext);
  return (
    <>
      <Heading />
      <CourseTitle course={course} />
      <TimerAndQuestions />
      <Body course={course} />
      <div style={{ textAlign: "center" }}>
        <Link to={"/result"}>
          <Button type={`SUBMIT`} handleSubmit={handleSubmit} />
        </Link>
      </div>
      <p style={{ color: "red", fontStyle: "italic", marginBottom: "0px" }}>
        White color shows answered question
      </p>
      <Questions />
    </>
  );
}

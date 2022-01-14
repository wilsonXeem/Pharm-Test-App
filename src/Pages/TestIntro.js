import React from "react";

import { useParams } from "react-router-dom";
import CourseTitle from "../Components/Testpage/CourseTitle";
import StartTestPage from "../Components/StartTestPage";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";

export default function TestIntro() {
  let { course } = useParams();
  return (
    <>
      <Heading />
      <CourseTitle course={course} />
      <StartTestPage course={course} />
      <Footer />
    </>
  );
}

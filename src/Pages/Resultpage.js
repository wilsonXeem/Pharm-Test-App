import React from "react";
import Heading from "../Components/Heading";
import Result from "../Components/Resultpage/Result";
import TrueOrFalseResult from "../Components/Resultpage/TrueOrFalseResult";
import { useParams } from "react-router-dom";

export default function Resultpage() {
  const { course } = useParams();
  console.log(course);
  return (
    <>
      <Heading />
      <h1 style={{ textAlign: "center" }}>RESULTS</h1>
      {course === "pharmacology" ||
      course === "physiology" ||
      course === "biochemistry" ? (
        <TrueOrFalseResult />
      ) : (
        <Result />
      )}
    </>
  );
}

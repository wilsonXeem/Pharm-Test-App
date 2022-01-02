import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../Components/Heading";
import Result from "../Components/Resultpage/Result";
import TrueOrFalseResult from "../Components/Resultpage/TrueOrFalseResult";

export default function Resultpage() {
  let { course } = useParams();
  return (
    <>
      <Heading />
      <h1 style={{ textAlign: "center" }}>RESULTS</h1>
      {course === "cology" ? <TrueOrFalseResult /> : <Result />}
    </>
  );
}

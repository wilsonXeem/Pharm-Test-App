import React, { useContext } from "react";
import { ValueContext } from "../../../Context";

export default function NextButton() {
  const { id, handleNext } = useContext(ValueContext);
  return (
    <div>
      <button className="question-button" onClick={() => handleNext(id)}>
        Next
      </button>
    </div>
  );
}

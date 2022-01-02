import React, { useContext } from "react";
import { ValueContext } from "../../../Context";

export default function PrevButton() {
  const { id, handlePrev } = useContext(ValueContext);
  return (
    <div>
      <button className="question-button" onClick={() => handlePrev(id)}>
        Prev
      </button>
    </div>
  );
}

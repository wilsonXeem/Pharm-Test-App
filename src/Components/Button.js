import React from "react";

export default function Button({ type, handleSubmit }) {
  return (
      <button className="proceedbutton" onClick={handleSubmit}>
        {type}
      </button>
  );
}

import React from "react";

export default function ListofCourses({ year }) {
  return (
    <div>
      {year.map((course, i) => (
        <button key={i} className="proceedbutton">
          {course}
        </button>
      ))}
    </div>
  );
}

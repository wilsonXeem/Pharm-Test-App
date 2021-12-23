import React from "react";

import { useNavigate } from "react-router-dom";

export default function ListofCourses({ year }) {
  const navigate = useNavigate();
  return (
    <div>
      {year.map((course, i) => (
        <button
          key={i}
          className="proceedbutton"
          onClick={() => navigate(`/test/${course}`)}
        >
          {course}
        </button>
      ))}
    </div>
  );
}

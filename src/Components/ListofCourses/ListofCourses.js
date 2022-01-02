import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ValueContext } from "../../Context";

export default function ListofCourses({ year }) {
  const navigate = useNavigate();
  const { setCourse } = useContext(ValueContext);
  return (
    <div>
      {year.map((course, i) => (
        <button
          key={i}
          className="proceedbutton"
          onClick={() => {
            navigate(`/test/${course}`);
            setCourse(course);
          }}
          style={{margin:"1rem"}}
        >
          {course}
        </button>
      ))}
    </div>
  );
}

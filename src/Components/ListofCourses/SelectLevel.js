import React, { useState } from "react";

import ListofCourses from "./ListofCourses";
import coursesData from "../../data/CoursesData";

export default function SelectLevel() {
  const [year, setYear] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;
    // console.log(value);
    const courses = coursesData;
    if (value === "secondYear") {
      setYear([]);
      setYear(courses.secondYear);
    } else if (value === "thirdYear") {
      setYear([]);
      setYear(courses.thirdYear);
    } else {
      setYear([]);
      setYear(courses.fourthYear);
    }
  };

  return (
    <div className="level-select-container">
      <select name="level" id="selectlevel" onChange={handleChange}>
        <option>Select Level</option>
        <option value="secondYear">SECOND YEAR</option>
        <option value="thirdYear">THIRD YEAR</option>
        <option value="fourthYear">FOURTH YEAR</option>
      </select>
      <ListofCourses year={year} />
    </div>
  );
}

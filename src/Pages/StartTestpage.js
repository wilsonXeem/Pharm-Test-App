import React from "react";

import Heading from "../Components/Heading";
import SelectLevel from "../Components/ListofCourses/SelectLevel";
import Footer from "../Components/Footer";

export default function StartTestpage() {
  return (
    <>
      <Heading />
      <section className="starttest">
        <h3>Select level and course to take the test</h3>
        <SelectLevel />
      </section>
      <Footer />
    </>
  );
}

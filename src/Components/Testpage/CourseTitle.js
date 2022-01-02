import React, { Component } from "react";

export class CourseTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.course,
    };
  }
  render() {
    const course = this.state.course;
    return (
      <div>
        <h1 style={{ textAlign: "center", fontVariant:"all-small-caps" }}>{course}</h1>
      </div>
    );
  }
}

export default CourseTitle;

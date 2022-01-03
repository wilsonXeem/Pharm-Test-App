import React, { Component, createContext } from "react";

import fourthYearQuestions from "./data/courses questions/fourthYear/fourthYearQuestions";
import secondYearQuestions from "./data/courses questions/secondYear/secondYearQuestions";
import thirdYearQuestions from "./data/courses questions/thirdYear/thirdYearQuestions";

export const ValueContext = createContext();

export class Context extends Component {
  state = {
    questions: [],
    id: 1,
    correctAnswer: [],
    wrongAnswer: [],
    background: "black",
    color: "white",
    year: "",
  };

  setId = () => {
    this.setState({
      id: 1,
    });
  };

  handleClick = (e) => {
    let value = e.target.value;
    let question = this.state.questions.find(
      (question) => question.id === this.state.id
    );
    question.value = value;
    let option = question.options.find((opt) => opt.questionOption === value);
    option.optionCheck = true;
    this.setState({
      background: "white",
      color: "black",
    });
  };

  handleTorFClick = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let question = this.state.questions.find(
      (question) => question.id === this.state.id
    );
    let option = question.options.find((opt) => opt.optionId === name);
    option.optionValue = value;
    option.optionCheck = true;
    let optionChecker = question.options.every(
      (opt) => opt.optionCheck === true
    );
    if (optionChecker !== true) {
      this.setState({
        background: "blue",
        color: "white",
      });
    } else {
      this.setState({
        background: "white",
        color: "black",
      });
    }
  };

  setCourse = (course) => {
    if (this.state.year === "thirdYear") {
      const questionss = thirdYearQuestions.find(
        (cours) => cours.id === course
      );
      const questions = this.questionData(questionss.course);
      this.setState({ questions });
    } else if (this.state.year === "secondYear") {
      const questionss = secondYearQuestions.find(
        (cours) => cours.id === course
      );
      const questions = this.questionData(questionss.course);
      this.setState({ questions });
    } else {
      const questionss = fourthYearQuestions.find(
        (cours) => cours.id === course
      );
      const questions = this.questionData(questionss.course);
      this.setState({ questions });
    }
  };

  getYear = (year) => {
    this.setState({ year });
  };

  handleChange = (id) => {
    let question = this.state.questions.find((question) => question.id === id);
    question.answered = true;
  };

  handleNumberClick = (id) => {
    this.setState({ id });
  };

  handleNext = (id) => {
    this.setState({ id: id + 1 });
  };

  handlePrev = (id) => {
    this.setState({ id: id - 1 });
  };

  handleSubmit = () => {
    const correctAnswer = this.state.questions.filter(
      (question) => question.value === question.answer
    );
    this.setState({ correctAnswer });
  };

  questionData = (questions) => {
    const questionStore = questions.map((item) => {
      let id = item.id;
      let answer = item.answer;
      let answered = item.answered;
      let value = item.value;
      let singleQuestion = item.Q;
      let options = item.options.map((option) => {
        let questionOption = option.option;
        let optionCheck = option.checked;
        let optionId = option.id;
        let optionAnswer = option.answer;
        let optionValue = option.value;
        let completeOption = {
          questionOption,
          optionCheck,
          optionId,
          optionAnswer,
          optionValue,
        };
        return completeOption;
      });
      let question = { singleQuestion, options, id, answer, answered, value };
      return question;
    });
    return questionStore;
  };
  render() {
    return (
      <ValueContext.Provider
        value={{
          ...this.state,
          handleClick: this.handleClick,
          handleNumberClick: this.handleNumberClick,
          handleChange: this.handleChange,
          handleNext: this.handleNext,
          handlePrev: this.handlePrev,
          setCourse: this.setCourse,
          getYear: this.getYear,
          handleSubmit: this.handleSubmit,
          handleTorFClick: this.handleTorFClick,
          setId: this.setId
        }}
      >
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}

export default Context;

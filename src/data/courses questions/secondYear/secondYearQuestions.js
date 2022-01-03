import physiology from "./physio";
import biochemistry from "./biochem";
import pharmtech from "./tech";
import pharmacognosy from "./cognosy";
import anatomy from "./clinicals";
import dispensing from "./dispensing";
import pharmchem from "./chem";

const secondYearQuestions = [
  { id: "physiology", course: physiology },
  { id: "biochemistry", course: biochemistry },
  { id: "pharmacognosy", course: pharmacognosy },
  { id: "dispensing", course: dispensing },
  { id: "pharmtech", course: pharmtech },
  { id: "pharmchem", course: pharmchem },
  { id: "anatomy", course: anatomy },
];

export default secondYearQuestions;

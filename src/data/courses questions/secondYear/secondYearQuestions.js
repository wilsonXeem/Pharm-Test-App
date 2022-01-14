import physiology from "./physio";
import biochemistry from "./biochem";
import pharmtech from "./tech";
import pharmacognosy from "./cognosy";
import anatomy from "./clinicals";
import dispensing from "./dispensing";
import pharmchem from "./chem";

const secondYearQuestions = [
  { id: "physiology", course: physiology, time: 20 },
  { id: "biochemistry", course: biochemistry, time: 19 },
  { id: "pharmacognosy", course: pharmacognosy, time: 15 },
  { id: "dispensing", course: dispensing, time: 17 },
  { id: "pharmtech", course: pharmtech, time: 14 },
  { id: "pharmchem", course: pharmchem, time: 13 },
  { id: "anatomy", course: anatomy, time: 10 },
];

export default secondYearQuestions;

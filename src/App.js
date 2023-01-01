// import logo from './logo.svg';
import './App.css';
import Mcqs from './section1/Mcqs';
import Employee from './section2/Employee';
import JsonProb from './section2/JsonProb';
import Library from './section2/Library';
import Age from './section3/Age';
import Arrow from './section3/Arrow';
import DiffDom from './section3/DiffDom';
import IntN from './section3/IntN';
import OddNumber from './section3/OddNumber';
import JsonProblem from './section4/JsonProblem';




function App() {
  return (
    <>
      {/* Section1 1st part */}
      <Mcqs />

      {/* section2 1st part */}
      <Employee />

      {/* Section2 2nd part */}
      <JsonProb />

      {/* section2 3rd part */}
      <Library />

      {/* section3 1st part */}
      <Age />

      {/* section3 2nd part */}
      <Arrow />

      {/* section3 3rd part */}
      <DiffDom />

      {/* section3 4th part */}
      <IntN />

      {/* section3 5th part */}
      <OddNumber />

      {/* section4 */}
      {/* <JsonProblem />     */}
      </>
);
}

export default App;

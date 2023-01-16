import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Calculator from "./calculator/Calculator";
import BasicCalculator from "./calculator/BasicCalculator";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Calculator </h1>
      <Calculator />
      <BasicCalculator />
    </div>
  );
}

export default App;

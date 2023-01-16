import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [result, setResult] = useState("");
  const onInputHandler = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculateInput = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <input type="text" placeholder="0" value={result} className="inputBox" />
      <div className="buttonContainer">
        <button value="9" onClick={onInputHandler} className="buttonDisplay">
          9
        </button>
        <button value="8" onClick={onInputHandler} className="buttonDisplay">
          8
        </button>
        <button value="7" onClick={onInputHandler} className="buttonDisplay">
          7
        </button>
        <button value="6" onClick={onInputHandler} className="buttonDisplay">
          6
        </button>
        <button value="5" onClick={onInputHandler} className="buttonDisplay">
          5
        </button>
        <button value="4" onClick={onInputHandler} className="buttonDisplay">
          4
        </button>
        <button value="3" onClick={onInputHandler} className="buttonDisplay">
          3
        </button>
        <button value="2" onClick={onInputHandler} className="buttonDisplay">
          2
        </button>
        <button value="1" onClick={onInputHandler} className="buttonDisplay">
          1
        </button>
        <button value="0" onClick={onInputHandler} className="buttonDisplay">
          0
        </button>
        <button value="+" onClick={onInputHandler} className="buttonDisplay">
          +
        </button>
        <button value="-" onClick={onInputHandler} className="buttonDisplay">
          -
        </button>
        <button value="*" onClick={onInputHandler} className="buttonDisplay">
          *
        </button>
        <button value="/" onClick={onInputHandler} className="buttonDisplay">
          /
        </button>
        <button onClick={clearDisplay} className="buttonDisplay">
          c
        </button>
        <button onClick={calculateInput} className="buttonDisplay">
          =
        </button>
      </div>
    </>
  );
};
export default Calculator;

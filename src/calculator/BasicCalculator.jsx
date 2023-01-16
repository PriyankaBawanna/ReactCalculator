import React, { useState } from "react";
const BasicCalculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);
  const addtition = () => {
    const sum = Number(firstNumber) + Number(secondNumber);
    setResult(sum);
  };
  const sub = () => {
    const sum = Number(firstNumber) - Number(secondNumber);
    setResult(sum);
  };
  const multi = () => {
    const sum = Number(firstNumber) * Number(secondNumber);
    setResult(sum);
  };

  const division = () => {
    const sum = Number(firstNumber) / Number(secondNumber);
    setResult(sum);
  };
  return (
    <>
      <input
        type="text"
        placeholder="First Value "
        onChange={(e) => {
          setFirstNumber(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder=" second Value "
        onChange={(e) => {
          setSecondNumber(e.target.value);
        }}
      />
      <button onClick={addtition}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={multi}>*</button>
      <button onClick={division}>/</button>
      <p>Result :{result}</p>
    </>
  );
};
export default BasicCalculator;

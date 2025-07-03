import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  
  const expesiveCalculation = useCallback(() => {
    console.log("Running Expesive calculations...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  },[count])
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="TypeSomething"
      />
      <p>Expesive Calculation Result: {expesiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}> Increamnt Count </button>
    </div>
  );
};

export default ExpensiveComponent;

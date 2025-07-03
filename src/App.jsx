import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import { useCallback } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);

  /* function handleClick(){
    setCount(count + 1)
  } */
  //  now Applied useCallback

  const handleClick = useCallback(() => {
    setCount(count + 1);
   },[]);
  //here we have freeze the function so it will take initial value as 0 which we have given in state
  //and the it excute one time i.e count+ 1 and return 1 after that it wont excute 
  //if we want to excute this then in the depdency we have to pass the count then it work

  return (
    <>
       <div>Count: {count}</div>
      <div>
        <button onClick={handleClick}>Incremnt </button>
      </div>
      <br />
      <div>
        <ChildComponent buttonName="Click Me" handleClick={handleClick} />
      </div> 
      <div>
      <br/>
        <ExpensiveComponent />
      </div>
    </>
  );
}

export default App;

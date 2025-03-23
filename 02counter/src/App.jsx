import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   let counter = 5

//   const addValue = () => {
//     console.log("clicked", counter )
//    counter = counter + 1
//   }

//   return (
//    <>
//    <h1>new project</h1>
//    <h2>counter value: {counter} </h2>

//    <button
//    onClick={addValue}
//    >Add Value</button>

//    <br />
//    <button>Decrease value</button>
//    </>
//   )
// }

function App() {
  const [counter, setCounter] = useState(5);

  // let counter = 5

  const addValue = () => {
    console.log(counter);
    if (counter > 9) return;
    // counter = counter + 1
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1) this will give the value based on the previous state 
  };

  const decValue = () => {
    console.log(counter);
    if (counter < 1) return;
    // counter = counter - 1
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>New project</h1>
      <h2>dawood project: {counter}</h2>
      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={decValue}>Decrease value</button>
    </div>
    
  );
}

export default App;

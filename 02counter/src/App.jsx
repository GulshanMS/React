import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  //let counter=5
  const addValue = () => {
    //counter=counter+1
    if (counter<21){
      setCounter(counter+1)
    }
  };

  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Gulshan M S</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={RemoveValue}>Remove</button>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(10);
  const [addDisable, setAddDisable] = useState(false);
  const [reduceDisable, setReduceDisable] = useState(false);

  const addValue = () => {
    if (value >= 19) {
      setAddDisable(true);
    }
    if (value >= 0) {
      setReduceDisable(false);
    }
    setValue(value + 1);
  };

  const reduceValue = () => {
    if (value <= 20) {
      setAddDisable(false);
    }
    if (value <= 1) {
      setReduceDisable(true);
    }
    setValue(value - 1);
  };

  return (
    <>
      <h1>React Tutorial</h1>
      <h3>(value from 0 to 20)</h3>
      <h2>Counter Value: {value}</h2>
      <button disabled={addDisable} onClick={addValue}>
        Add Value
      </button>
      <br />
      <button disabled={reduceDisable} onClick={reduceValue}>
        Reduce Value
      </button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(9);
  let [text, settext] = useState("hihvbdfjk");

  // let counter = 13;
  const addvalue = () => {
    if (counter > 0 && counter < 20) {
      setcounter(counter + 1);
    } else {
      setcounter(null);
    }
  };
  const removeValue = () => {
    if (counter > 0 && counter < 20) {
      setcounter(counter - 1);
    } else {
      setcounter(null);
    }
  };
  const upper = () => {
    let newo = text.toUpperCase();
    settext(newo);
  };

  return (
    <>
      <h1>Chai aur counter</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>add value {counter} </button>
      <br />
      <button onClick={removeValue}>remove value {counter} </button>

      <p>footer:{counter}</p>
      <button onClick={upper}>textchange</button>
      <p>{text}</p>
    </>
  );
}

export default App;

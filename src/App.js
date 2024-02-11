import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input onChange={inputHandler}></input>
      <h2>Character is : {input.length}</h2>
    </div>
  );
}

export default App;

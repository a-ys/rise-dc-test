import { React, useState } from "react";
import Button from "./components/Button/Button.js";
import TextInput from "./components/TextInput/TextInput.js";
import TextDisplay from "./components/TextDisplay/TextDisplay.js";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="button">
        <Button />
      </div>
      <TextInput text={text} onChange={onChange} />
      <TextDisplay text={text} />
    </div>
  );
}

export default App;

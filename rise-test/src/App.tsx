import { useState } from "react";
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const onChange = (e: { target: HTMLInputElement; }) => {
    setText(e.target.value);
  };

  return (
    <div className = "App">
      <Button />
      <Input text={text} onChange={onChange} />
      <Output text={text} />
    </div>
  );
}

export default App;
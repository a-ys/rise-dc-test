import { React, useState } from "react";
import "./Button.css";
const Button = () => {
  const [color, setColor] = useState("#FAEBD7");
  const clicked = () => {
    setColor(color === "#FAEBD7" ? "#DC143C" : "#FAEBD7");
  };
  return (
    <button
      className="primary-button"
      style={{ backgroundColor: color }}
      onClick={clicked}
    >
      Click Me!
    </button>
  );
};

export default Button;

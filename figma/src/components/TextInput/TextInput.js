import { React, useState } from "react";
import "./TextInput.css";
const TextInput = (props) => {
  return (
    <div>
      <input
        className="input-box"
        type="text"
        value={props.text}
        onChange={props.onChange}
        placeholder="Enter name"
      ></input>
    </div>
  );
};

export default TextInput;

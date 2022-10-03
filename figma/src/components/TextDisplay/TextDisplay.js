import { React, useState } from "react";
import "./TextDisplay.css";
const TextDisplay = (props) => {
  const fonts = [
    "Times New Roman",
    "Helvetica",
    "Courier New",
    "Lucida Handwriting",
    "Papyrus",
  ];
  const listItems = fonts.map((font) => (
    <li style={{ fontFamily: font, color: "black" }}>{props.text}</li>
  ));
  console.log(listItems);
  return <ul className="list"> {listItems} </ul>;
};

export default TextDisplay;

import React from "react"
import './Output.css';
export interface Props {
    text: string;
    onChange?: (e: any) => void;
}
const Output = (props: Props) => {
    return (
    <ul className = "output-box">
        <li id="first">{props.text}</li>
        <li id="second">{props.text}</li>
        <li id="third">{props.text}</li>
        <li id="fourth">{props.text}</li>
    </ul>
  );
}

export default Output
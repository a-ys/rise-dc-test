import React, {useState} from "react"
import "./Input.css";


export interface Props {
    text: string;
    onChange?: (e: any) => void;
}
const Input = (props: Props) => {
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
}

export default Input
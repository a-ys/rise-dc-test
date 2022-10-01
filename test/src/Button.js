import React, {useState} from "react"
import './App.css';
const btnColor = document.querySelector('.btn');

export default function Button() {
    const [state, setState] = useState(false);
    const toggle = () =>{
        setState(!state);
    }
    return (
       <button onClick={toggle} className={'btn ' + (state? 'btn-red' : '')}>
        Click Me!
        </button> 
    )
}

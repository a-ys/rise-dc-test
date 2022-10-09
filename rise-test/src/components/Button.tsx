import React, {useState} from "react"
import './Button.css';

const Button = () => {
    const [toggle, setToggle] = useState(false);

    return (
       <button onClick={() => setToggle(!toggle)} className={'button' + (toggle? '-red' : '')}>
        Click Me!
        </button> 
    )
}

export default Button
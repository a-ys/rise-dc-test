import React, {useState} from "react"
import './App.css';
export default function Input() {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    };

    return (
        <div>
            <form>
                <input className = 'text' type="text" placeholder="Enter name" onChange={handleChange} value={message}/>
                <div className="container">
                    <h1 className="inner-text + first-text">{message}</h1>
                    <h1 className="inner-text + second-text">{message}</h1>
                    <h1 className="inner-text + third-text">{message}</h1>
                    <h1 className="inner-text + fourth-text">{message}</h1>
                </div>
            </form>
        </div>
    )
}
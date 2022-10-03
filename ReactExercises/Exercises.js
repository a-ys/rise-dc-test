// Exercise 1
ReactDOM.render(myElement, document.getElementById("root"));
// Exercise 2
hello = () => "Hello World!";
// Exercise 3
const x = 5.6;
// Exercise 4
const myList = myArray.map((item) => <p>{item}</p>);
// Exercise 5
const [, , suv] = vehicles;
// Exercise 6
const person = {
  name: "Jesse",
  age: 30,
  address: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

displayMessage(person);

function displayMessage({ address: { state } }) {
  const message = "I live in " + state + ".";
}
// Exercise 7
const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo];
// Exercise 8
blue ? renderBlue() : renderRed();
// Exercise 9

const paragraph = React.createElement(
  "p",
  {},
  "This is a paragraph without using JSX!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paragraph);

// Exercise 10
const paragraph = <p>This is a paragraph using JSX!</p>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paragraph);

//Exercise 11
const myelement = (
  <h1>
    React is
    {10 * 10}
    times better with JSX!
  </h1>
);

// Exercise 12
const title = <h1 className="primary">Hello World!</h1>;

// Exercise 13
function Person(props) {
  return <h2>Hi, I'm {props.name}</h2>;
}

// Exercise 14
function Person(props) {
  return <h1>Hi, I'm {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Person name="Jesse" />);

// Exercise 15
function Person(props) {
  return <h2>I'm {props.name}!</h2>;
}

function Greeting() {
  const name = "Jesse";
  return (
    <>
      <h1>Hello!</h1>
      <Person name={name} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);

// Exercise 16
<button onClick={clicked()}>Click Me!</button>;

// Exercise 17
function App({ isLoggedIn }) {
  return (
    <>
      <h1>My Application</h1>
      {isLoggedIn && <Profile />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Exercise 18
function GroceryList() {
  const items = [
    { id: 1, name: "bread" },
    { id: 2, name: "milk" },
    { id: 3, name: "eggs" },
  ];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GroceryList />);

// Exercise 19
import { useState } from "react";

function KeepCount() {
  const [count, setCount] = useState(0);
}

// Exercise 20
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  return <DisplayData data={data} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Exercise 21

const Header = () => {
  return (
    <>
      <h1 style={{ color: "purple" }}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};

// Exercise 22
const Header = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "yellow" }}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};

// Exercise 23
import "./App.css";

// Exercise 24
header.module.css:
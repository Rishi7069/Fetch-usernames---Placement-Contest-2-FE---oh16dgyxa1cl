import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
const App = () => {
  const [name, setName] = useState([]);
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/main/users").then((result) => {
      result.JSON().then((resp) => {
        setName(resp);
      });
    });
  }, []);
  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/main/users").then((result) => {
      result.JSON().then((resp) => {
        setProperty(resp);
      });
    });
  }, []);
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <h1>Hello</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;

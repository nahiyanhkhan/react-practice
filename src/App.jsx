import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Books from "./Books";

function App() {
  return (
    <div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Books></Books>
    </div>
  );
}

function Person() {
  return <p>This is person</p>;
}

export default App;

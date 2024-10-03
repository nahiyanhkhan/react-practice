import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Books from "./Books";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";

function App() {
  return (
    <div>
      <Forms />
      {/* <Counter /> */}
      {/* <Books /> */}
      {/* <Message /> */}
      {/* <Navbar /> */}
      {/* <Person /> */}
    </div>
  );
}

function Person() {
  return <p>This is person</p>;
}

export default App;

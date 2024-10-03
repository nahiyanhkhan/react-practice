import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setincrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy <= 0 ? 0 : count - incrementBy);
  }

  function incrementByFunc() {
    setincrementBy(incrementBy + 1);
  }

  function decrementByFunc() {
    setincrementBy(incrementBy - 1 <= 0 ? 0 : incrementBy - 1);
  }

  return (
    <div>
      <p>
        Count: <button onClick={decrement}> - </button> {count}{" "}
        <button onClick={increment}> + </button>
      </p>
      <p>
        Count will be incremented by:{" "}
        <button onClick={decrementByFunc}> - </button> {incrementBy}{" "}
        <button onClick={incrementByFunc}> + </button>
      </p>
    </div>
  );
}

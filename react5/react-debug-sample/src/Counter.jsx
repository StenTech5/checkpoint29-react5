import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent negative values
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increase
      </button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Counter;

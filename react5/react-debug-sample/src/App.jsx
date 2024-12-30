import React, { useState } from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Debugging Sample App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />
      <Greeting name={name} />
      <Counter />
    </div>
  );
};

export default App;

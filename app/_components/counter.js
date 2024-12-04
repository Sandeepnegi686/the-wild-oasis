"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((p) => p + 1)}>Add</button>
      {count}
    </div>
  );
}

export default Counter;

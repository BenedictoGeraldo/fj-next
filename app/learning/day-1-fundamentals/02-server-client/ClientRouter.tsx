"use client";

import { useState } from "react";

export default function ClientRouter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Ini di render di browser</h3>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Tambah+</button>
        <button onClick={() => setCount(count - 1)}>Kurang -</button>
      </div>
    </div>
  );
}

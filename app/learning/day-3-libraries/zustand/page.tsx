"use client";

import { useCounterStore } from "@/lib/stores/useCounterStore";

export default function CounterPage() {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);

  return (
    <div>
      <h1>
        Belajar Counter (hitung dengan klik button) menggunakan Zustand lib
      </h1>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button> <br />
      <button onClick={increment}>+</button> <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

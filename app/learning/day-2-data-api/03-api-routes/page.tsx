"use client";

import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFull() {
      const res = await fetch("/api/products");
      const data: Product[] = await res.json();
      setItems(data);
      setLoading(false);
    }
    fetchFull();
  }, []);

  if (loading) return <div>Load Produk Kamu</div>;

  return (
    <div>
      <h1>Produk yang di Fetch</h1>
      <hr />
      {items.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

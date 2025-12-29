"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function AxiosPageGet() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get("/api/products");

      console.log("Response:", response);
      console.log("Data:", response.data);

      setProducts(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Method Get dengan AXIOS</h1>

      <button onClick={loadProducts} disabled={loading}>
        {loading ? "loading..." : "Klik untuk refresh"}
      </button>

      {error && <div>Error {error}</div>}

      <div>
        <h2>Datar Produk Hasil Get ({products.length})</h2>
        {products.map((Product) => (
          <div key={Product.id}>
            <p>{Product.name}</p>
            <p>{Product.price}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function AxiosPageDelete() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function loadProducts() {
    try {
      const response = await axiosInstance.get("/api/products");
      setProducts(response.data);
    } catch (err: unknown) {
      console.error("Error", err);
    }
  }

  async function handleDelete(id: number, name: string) {
    if (!confirm(`Yakin ingin menghapus produk ${name}?`)) {
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await axiosInstance.delete(`/api/products/${id}`);

      console.log("Response: ", response);

      setMessage(`Sukses! ${response.data.message}`);

      await loadProducts();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(`Error: ${err.message}`);
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
      <h1>Belajar Method Delete</h1>

      <button onClick={loadProducts}>Refresh Data</button>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td>Tidak Ada Produk</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>Rp. {product.price.toLocaleString("id-ID")}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product.id, product.name)}
                      disabled={loading}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {message && <div>{message}</div>}
    </div>
  );
}

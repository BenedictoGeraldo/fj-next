"use client";

import { useState } from "react";
import axiosInstance from "@/lib/axios";

export default function AxiosPagePost() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await axiosInstance.post("/api/products", {
        name: name,
        price: Number(price),
      });

      console.log("Response:", response);

      setMessage(`Sukses! ${response.data.message}`);

      setName("");
      setPrice("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(`Error: $(err.message)`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Belajar Method Post dengan Axios</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Produk: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Masukan Nama"
            required
          />
        </div>
        <div>
          <label>Harga: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Masukan Harga"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>

        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

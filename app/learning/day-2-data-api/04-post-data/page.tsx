"use client";

import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function PostDataPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);
      setMessage(null);

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          price: Number(price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal menambahkan Produk");
      }

      setMessage(data.message);
      setName("");
      setPrice("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi Kesalahan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Latihan bikin endpoint POST dan consume di fe</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Produk</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Input Nama Produk Baru"
          />
        </div>
        <div>
          <label>Harga Produk</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Masukan Harga Produk"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Menambahkan..." : "Tambah Produk"}
        </button>
      </form>

      {/*Pesan Sukses dan Error*/}
      {message && <div>{message}</div>}

      {error && <div>{error}</div>}

      {/* Lihat Hasil Input */}
      <div>
        <a href="./03-api-routes">Lihat Hasil Input + Daftar Produk</a>
      </div>
    </div>
  );
}

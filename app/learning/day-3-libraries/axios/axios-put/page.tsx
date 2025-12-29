"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function AxiosPagePut() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectId, setSelectId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function loadProducts() {
    try {
      const response = await axiosInstance.get("/api/products");
      setProducts(response.data);
    } catch (err: unknown) {
      console.error("Error Loading:", err);
    }
  }
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await axiosInstance.put(`/api/products/${selectId}`, {
        name: name,
        price: Number(price),
      });

      console.log("Response: ", response);

      setMessage(`Sukses! ${response.data.message}`);

      await loadProducts();

      setSelectId("");
      setName("");
      setPrice("");
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
    <div
      className="bg-white min-v-screen text-black"
      style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>
        ✏️ Belajar Method PUT (Edit Data)
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Pilih produk yang ingin diedit, ubah data, lalu klik Update
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        {/* Kolom Kiri: List Products */}
        <div>
          <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>
            📦 Daftar Produk
          </h2>
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectId(product.id.toString());
                setName(product.name);
                setPrice(product.price.toString());
              }}
              style={{
                border:
                  selectId === product.id.toString()
                    ? "3px solid #2563eb"
                    : "1px solid #e5e7eb",
                padding: "1.5rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor:
                  selectId === product.id.toString() ? "#eff6ff" : "white",
                transition: "all 0.2s",
              }}
            >
              <h3
                style={{ margin: 0, marginBottom: "0.5rem", color: "#1e293b" }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#16a34a",
                }}
              >
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <small style={{ color: "#64748b" }}>ID: {product.id}</small>
            </div>
          ))}
        </div>

        {/* Kolom Kanan: Form Update */}
        <div>
          <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>
            ✏️ Form Update
          </h2>

          {!selectId && (
            <div
              style={{
                padding: "2rem",
                backgroundColor: "#fef3c7",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0, color: "#92400e" }}>
                👈 Pilih produk dari daftar untuk mulai edit
              </p>
            </div>
          )}

          {selectId && (
            <form
              onSubmit={handleUpdate}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  ID Produk (readonly):
                </label>
                <input
                  type="text"
                  value={selectId}
                  disabled
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    backgroundColor: "#f9fafb",
                    fontSize: "1rem",
                    color: "#6b7280",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Nama Baru:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Harga Baru:
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: loading ? "#94a3b8" : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                {loading ? "⏳ Loading..." : "💾 Update Produk"}
              </button>
            </form>
          )}

          {message && (
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: message.includes("Error")
                  ? "#fee2e2"
                  : "#d1fae5",
                border: message.includes("Error")
                  ? "1px solid #fca5a5"
                  : "1px solid #86efac",
                borderRadius: "6px",
                color: message.includes("Error") ? "#991b1b" : "#065f46",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

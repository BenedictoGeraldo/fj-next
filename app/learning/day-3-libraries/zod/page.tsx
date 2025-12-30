"use client";

import { useState } from "react";
import axiosInstance from "@/lib/axios";
import axios from "axios";

type ApiError = {
  error?: string;
  details?: {
    fieldErrors?: Record<string, string[]>;
    formErrors?: string[];
  };
};

export default function ZodPostExamplePage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccessMessage("");
      setErrorMessage("");

      const res = await axiosInstance.post("/api/products", {
        name,
        price,
      });

      setSuccessMessage(res.data.message ?? "Sukses");
      setName("");
      setPrice("");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const data = err.response?.data as ApiError | undefined;

        const nameErr = data?.details?.fieldErrors?.name?.[0];
        const priceErr = data?.details?.fieldErrors?.price?.[0];

        if (nameErr || priceErr) {
          setErrorMessage([nameErr, priceErr].filter(Boolean).join(" |"));
        } else {
          setErrorMessage(data?.error ?? err.message);
        }
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Terjadi Kesalahan");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1> Zod + Post</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukan Nama Barang"
          />
        </div>
        <div>
          <label>Harga: </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Masukan Harga"
          />
        </div>

        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

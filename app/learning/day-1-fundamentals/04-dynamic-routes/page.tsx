import Link from "next/link";

export default function ProductListPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      <h1>📦 Daftar Semua Produk</h1>
      <p>Pilih produk untuk lihat detail:</p>

      <ul>
        <li>
          <Link href="./04-dynamic-routes/1">Produk 1 - Laptop Advan</Link>
        </li>
        <li>
          <Link href="./04-dynamic-routes/2">Produk 2 - Charger Laptop</Link>
        </li>
        <li>
          <Link href="./04-dynamic-routes/10">Produk 10 - Tissue</Link>
        </li>
        <li>
          <Link href="./04-dynamic-routes/laptop">Produk x - Laptop</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}

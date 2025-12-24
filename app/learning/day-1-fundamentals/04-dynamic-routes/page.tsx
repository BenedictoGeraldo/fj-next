import Link from "next/link";

export default function ProductListPage() {
  return (
    <div>
      <h1>📦 Daftar Semua Produk</h1>
      <p>Pilih produk untuk lihat detail:</p>

      <ul>
        <li>
          <Link href="/learning/day-1-fundamentals/04-dynamic-routes/1">
            Produk 1 - Laptop Advan
          </Link>
        </li>
        <li>
          <Link href="/learning/day-1-fundamentals/04-dynamic-routes/2">
            Produk 2 - Charger Laptop
          </Link>
        </li>
        <li>
          <Link href="/learning/day-1-fundamentals/04-dynamic-routes/10">
            Produk 10 - Tissue
          </Link>
        </li>
        <li>
          <Link href="/learning/day-1-fundamentals/04-dynamic-routes/laptop">
            Laptop
          </Link>
        </li>
      </ul>

      <hr />

      <h3>💡 Penjelasan:</h3>
      <p>Ini adalah halaman LIST produk (tanpa ID)</p>
      <p>URL: /04-dynamic-routes</p>
    </div>
  );
}

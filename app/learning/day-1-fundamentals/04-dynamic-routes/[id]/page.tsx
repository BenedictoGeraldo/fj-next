import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Data produk sederhana
  const products: Record<string, { name: string; price: string }> = {
    "1": { name: "Laptop Advan Workplus", price: "Rp 5.000.000" },
    "2": { name: "Charger Laptop", price: "Rp 500.000" },
    "10": { name: "Tissue", price: "Rp 10.000" },
    laptos: { name: "Laptop Gaming", price: "Rp 15.000.000" },
  };

  const product = products[id];

  if (!product) {
    return (
      <div>
        <h1>Produk tidak ditemukan</h1>
        <p>ID: {id}</p>
        <Link href="/learning/day-1-fundamentals/04-dynamic-routes">
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Harga: {product.price}</p>
      <p>ID: {id}</p>

      <Link href="/learning/day-1-fundamentals/04-dynamic-routes">Kembali</Link>
    </div>
  );
}

export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 100000000 },
    { id: 2, name: "Handphone", price: 9120000 },
  ];

  return new Response(JSON.stringify(products, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

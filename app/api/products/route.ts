export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 100000000 },
    { id: 2, name: "Handphone", price: 9120000 },
  ];

  return Response.json(products);
}

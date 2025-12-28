// Bikin data dummy dulu
const products = [
  { id: 1, name: "Laptop", price: 9000000 },
  { id: 2, name: "Handphone", price: 4500000 },
];

export async function GET() {
  return new Response(JSON.stringify(products, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.price) {
      return new Response(
        JSON.stringify({ error: "Name dan Price wajib diisi!" }, null, 2),
        {
          status: 400,
          headers: { "Content-Type": "application/json; charset=utf-8" },
        }
      );
    }

    const newProduct = {
      id: products.length + 1,
      name: body.name,
      price: Number(body.price),
    };

    products.push(newProduct);

    return new Response(
      JSON.stringify(
        {
          success: true,
          message: "Produk Berhasil Ditambahkan",
          data: newProduct,
        },
        null,
        2
      ),
      {
        status: 201,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }, null, 2), {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }
}

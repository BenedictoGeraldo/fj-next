// Import shared data
import { products } from "@/lib/data/products";

// GET - Ambil semua products
export async function GET() {
  try {
    return Response.json(products, { status: 200 });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST - Create product baru
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validasi
    if (!body.name || !body.price) {
      return Response.json(
        { error: "Name dan Price wajib diisi!" },
        { status: 400 }
      );
    }

    // Create product baru
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      name: body.name,
      price: Number(body.price),
    };

    products.push(newProduct);

    return Response.json(
      {
        success: true,
        message: "Produk berhasil ditambahkan",
        data: newProduct,
      },
      { status: 201 }
    );
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

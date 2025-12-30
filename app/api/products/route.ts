// Import shared data
import { products } from "@/lib/data/products";
import { z } from "zod";

const CreateProductSchema = z.object({
  name: z.string().trim().min(1, "Name wajib diisi"),
  price: z.coerce
    .number()
    .finite("Price harus angka")
    .positive("Price harus > 0"),
});

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

    const parsed = CreateProductSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          error: "Validation error",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const input = parsed.data;

    // Create product baru
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      name: input.name,
      price: input.price,
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

// Import data dari route.ts parent (hack sederhana untuk share data)
// Dalam real app, ini dari database

// Karena tidak bisa import langsung, kita re-declare
// Ini hack untuk demo, production pakai database!
const products = [
  { id: 1, name: "Laptop", price: 9000000 },
  { id: 2, name: "Handphone", price: 4500000 },
];

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET - Ambil 1 product by ID
export async function GET(req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id);

    const product = products.find((p) => p.id === productId);

    if (!product) {
      return Response.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }

    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT - Update product
export async function PUT(req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id);
    const body = await req.json();

    // Cari product
    const index = products.findIndex((p) => p.id === productId);

    if (index === -1) {
      return Response.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }

    // Validasi
    if (!body.name || !body.price) {
      return Response.json(
        { error: "Name dan Price wajib diisi!" },
        { status: 400 }
      );
    }

    // Update product
    products[index] = {
      id: productId,
      name: body.name,
      price: Number(body.price),
    };

    return Response.json(
      {
        success: true,
        message: "Produk berhasil diupdate",
        data: products[index],
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

// DELETE - Hapus product
export async function DELETE(req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id);

    // Cari product
    const index = products.findIndex((p) => p.id === productId);

    if (index === -1) {
      return Response.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }

    // Hapus product
    const deleted = products.splice(index, 1)[0];

    return Response.json(
      {
        success: true,
        message: "Produk berhasil dihapus",
        data: deleted,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

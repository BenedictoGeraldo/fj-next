// Shared data untuk semua API routes
// Dalam real app, ini dari database!

export type Product = {
  id: number;
  name: string;
  price: number;
};

// Gunakan global variable untuk persist data di development mode
// Ini mencegah Next.js hot reload reset data
declare global {
  var productsData: Product[] | undefined;
}

// Initialize data hanya sekali
if (!global.productsData) {
  global.productsData = [
    { id: 1, name: "Laptop", price: 9000000 },
    { id: 2, name: "Handphone", price: 4500000 },
    { id: 3, name: "Bottle", price: 200000 },
  ];
}

// Export reference ke global data
export const products = global.productsData;

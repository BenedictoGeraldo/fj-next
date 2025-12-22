// import ClientRouter from "./ClientRouter";

// export default function ServerClient() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       <h1>Mempelajari beda SSR dan CSR</h1>
//       <p>
//         SSR itu tidak bisa menggunakan hooks. biasanya digunakan untuk
//         menampilkan data statis, bukan yang dinamis atau butuh interakhis
//       </p>
//       <p>
//         CSR bisa menggunakan hooks. biasa digunakan untuk menampilkan data
//         dinamis yang butuh perubahan cepat
//       </p>

//       <section>
//         <h2>Server Component</h2>
//         <ServerDataDisplay />
//       </section>

//       <section>
//         <h2>Client Component</h2>
//         <ClientRouter />
//       </section>
//     </div>
//   );
// }

// async function ServerDataDisplay() {
//   return (
//     <div>
//       <p>Komponen ini di render di Server</p>
//     </div>
//   );
// }

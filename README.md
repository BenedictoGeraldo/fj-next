## FJ Next — Project Belajar Next.js

Project ini dibuat untuk latihan Next.js (App Router) + TypeScript secara bertahap selama 3 hari. Materi disusun dalam folder `app/learning` agar gampang dipelajari dan diulang.

## Teknologi

- Next.js (App Router) + React + TypeScript
- Tailwind CSS (untuk styling global)

## Struktur Materi (3 Hari)

Semua materi ada di `app/learning/`.

### Day 1 — Fundamentals

Folder: `app/learning/day-1-fundamentals/`

- `01-routing/` — basic routing
- `02-server-client/` — server vs client component
- `03-layouts/` — layout dan `children`
- `04-dynamic-routes/` — dynamic route params

### Day 2 — Data & API

Folder: `app/learning/day-2-data-api/`

- `01-fetch-server/` — fetch di Server Component
- `02-fetch-client/` — fetch di Client Component
- `03-api-routes/` — konsumsi Next.js Route Handler
- `04-post-data/` — contoh POST dari form
- `05-error-loading/` — loading & error state

### Day 3 — Libraries

Folder: `app/learning/day-3-libraries/`

#### Axios (HTTP Client)

Folder: `app/learning/day-3-libraries/axios/`

- `axios-get/` — contoh GET
- `axios-post/` — contoh POST
- `axios-put/` — contoh PUT (update)
- `axios-delete/` — contoh DELETE

#### Zustand (State Management)

Folder: `app/learning/day-3-libraries/zustand/`

- `page.tsx` — contoh dasar penggunaan store di client

#### Zod (Validation)

Folder: `app/learning/day-3-libraries/zod/`

- `page.tsx` — contoh validasi input dengan error handling

## Library yang Dipakai

- `axios` — HTTP client untuk request API
- `zustand` — state management ringan untuk React
- `zod` — validasi data (runtime validation)
- `@mui/material` — UI library

## API (Backend Dummy)

Project ini punya Route Handlers sederhana (dummy database in-memory) untuk latihan CRUD:

- `GET /api/products`
- `POST /api/products`
- `GET /api/products/:id`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

"use client";

import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function ErrorLoadingPage() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadPosts() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Gagal fetch data");
      }

      const data: Post[] = await res.json();
      setPosts(data.slice(0, 8));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi Kesalahan");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
        <button onClick={loadPosts}>Coba Lagi</button>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data berhasil dimuat</h1>
      {posts?.map((post) => (
        <div key={post.id}>
          <h3>ID: {post.id}</h3>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

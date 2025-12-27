type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function FetchServerPage() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const posts: Post[] = await res.json();

    const limitedPosts = posts.slice(0, 6);

    return (
      <div>
        <h1>Fetch 6 data dari url Posts</h1>
        {limitedPosts.map((post) => (
          <div key={post.id}>
            <p>POST ID: {post.id}</p>
            <h2>Title: {post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h3>Error!!</h3>
        <p>
          Gagal fetch data:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }
}

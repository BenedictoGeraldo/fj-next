type user = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export default async function FetchServerPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error: Gagal Fetch Data</div>;
  }

  const users: user[] = await res.json();

  return (
    <div>
      <h1>Fetch Data Di Server</h1>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

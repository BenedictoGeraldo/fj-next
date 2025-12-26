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
    <div className="text-black bg-white">
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

      <table className="border-collapse  border min-w-full text-center">
        <thead>
          <tr>
            <th className="border">ID</th>
            <th className="border">Name</th>
            <th className="border">Email</th>
            <th className="border">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border">{user.id}</td>
              <td className="border">{user.name}</td>
              <td className="border">{user.email}</td>
              <td className="border">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

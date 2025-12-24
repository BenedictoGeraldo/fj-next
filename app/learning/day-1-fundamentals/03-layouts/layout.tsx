export default function LayoutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layouts">
      <header>
        <h1>Ini adalah header dengan pendekatan layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

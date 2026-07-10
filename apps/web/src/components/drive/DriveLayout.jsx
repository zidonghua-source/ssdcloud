export function DriveLayout({ sidebar, toolbar, children }) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-lg border bg-card p-3">{sidebar}</aside>
      <main className="space-y-3">
        <div className="rounded-lg border bg-card p-3">{toolbar}</div>
        <div className="rounded-lg border bg-card p-3">{children}</div>
      </main>
    </div>
  );
}

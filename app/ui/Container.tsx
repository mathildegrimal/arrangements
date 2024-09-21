export default function Container({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="flex min-h-screen flex-col gap-10 bg-white px-6 py-6 md:px-16 lg:px-24 lg:py-12">
        {children}
      </main>
    </section>
  );
}

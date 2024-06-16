import Footer from "./footer";
export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5 max-w-7xl mx-auto ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <header className="head border-b-2 pb-2">
        <h1 className="title text-6xl font-bold mb-3">Ini halaman Blog</h1>
      </header>

      <main className="mb-3">{children}</main>
      <footer className="flex justify-center shadow p-8">
        <Footer />
      </footer>
    </section>
  );
}

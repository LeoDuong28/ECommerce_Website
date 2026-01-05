import Header from "@/components/header";

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Products</h2>

        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Next step: connect MongoDB and render a real product grid with "Quick
          Add" cart.
        </p>
      </section>
    </main>
  );
}

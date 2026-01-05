import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border bg-white p-8 shadow-sm dark:bg-black md:p-12">
          <p className="text-xs tracking-widest text-neutral-500">
            FAST - SECURE - MODERN CHECKOUT
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            A storefront that feels like a top-tier brand.
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
            Built for conversion: clean product discovery, smooth cart flow, and
            a checkout that's fast and trustworthy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-2xl bg-black px-6 py-3 text-center text-white hover:opacity-90 dark:bg-white dark:text-black">
              Shop Products
            </Link>

            <Link
              href="/products"
              className="rounded-2xl border px-6 py-3 text-center hover:bg-neutral-100 dark:hover:bg-neutral-900">
              View New Arrivals
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

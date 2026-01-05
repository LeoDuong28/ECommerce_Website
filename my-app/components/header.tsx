import Image from "next/image";
import Link from "next/image";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-black/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between  px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_black1.png"
            alt="Leo Duong"
            width={38}
            height={38}
            className="block dark:hidden"
            priority
          />
          <Image
            src="/logo_black2.png"
            alt="Leo Duong"
            width={38}
            height={38}
            className="hidden dark:block"
            priority
          />

          <span className="text-sm font-semibold tracking-wide">
            LEO COMMERCE
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/products"
            className="hidden rounded-xl px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 md:inline-flex">
            Products
          </Link>
          <Link
            href="/checkout"
            className="hidden rounded-xl px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 md:inline-flex">
            Checkout
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

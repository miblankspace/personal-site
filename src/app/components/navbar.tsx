"use client";

import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--highlight)] text-[var(--primary)] shadow-sm flex w-full">
      <div className="ml-10 px-6 py-4 flex justify-start">
        <Link
          href="#"
          className="font-medium hover:text-[var(--secondary)]  transition-colors"
        >
          Home
        </Link>
      </div>
      <div className="ml-auto mr-10 px-6 py-4 flex justify-end">
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium hover:text-[var(--secondary)]  transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

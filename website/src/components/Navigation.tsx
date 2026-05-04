"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", labelTh: "หน้าหลัก", labelEn: "Home" },
  { href: "/about", labelTh: "เกี่ยวกับเรา", labelEn: "About" },
  { href: "/services", labelTh: "บริการของเรา", labelEn: "Services" },
  { href: "/contact", labelTh: "ติดต่อเรา", labelEn: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-700 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-gold-500">
            <span className="text-lg font-bold text-navy-700">GS</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-white">
              Golden Stone Industry
            </p>
            <p className="text-xs leading-tight text-gray-400">
              บจก. โกลเด้น สโตน อินดัสทรี
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-gold-500 text-navy-700"
                  : "text-gray-300 hover:bg-navy-light hover:text-white"
              }`}
            >
              <span className="block">{link.labelTh}</span>
              <span className="block text-xs opacity-70">{link.labelEn}</span>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded p-2 text-gray-300 hover:bg-navy-light md:hidden"
          aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-navy-light bg-navy-dark md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded px-3 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-gold-500 text-navy-700"
                    : "text-gray-300 hover:bg-navy-light"
                }`}
              >
                {link.labelTh}{" "}
                <span className="text-xs opacity-70">({link.labelEn})</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

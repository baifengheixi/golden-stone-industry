import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-gold">
                <span className="text-lg font-bold text-navy">GS</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Golden Stone Industry
                </h3>
                <p className="text-xs text-gray-400">
                  บจก. โกลเด้น สโตน อินดัสทรี
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              ผู้ให้บริการด้านการจัดซื้อจัดจ้าง จัดหา และจัดจำหน่ายสินค้า
              แก่หน่วยงานภาครัฐและเอกชน ด้วยมาตรฐานความโปร่งใส คุณภาพ
              และความรับผิดชอบ
            </p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Golden Stone Industry Co., Ltd.
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-gold"
                >
                  หน้าหลัก / Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-gold"
                >
                  เกี่ยวกับเรา / About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  บริการของเรา / Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-gold"
                >
                  ติดต่อเรา / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  งานดับเพลิงและกู้ภัย / Firefighting &amp; Rescue
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  อากาศยานไร้คนขับ / UAV &amp; Drones
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  ยานยนต์ / Automotive Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  หุ่นยนต์ / Robotics &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  ต่อต้านโดรน / Anti-Drone Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  4/2 Moo 6, Bang Kruai-Sai Noi Road,
                  <br />
                  Bang Bua Thong, Nonthaburi 11110
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:goldenstoneindustry@gmail.com"
                  className="transition-colors hover:text-gold"
                >
                  goldenstoneindustry@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+66632125055"
                  className="transition-colors hover:text-gold"
                >
                  (+66) 063-212-5055
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon-Fri, 8:30 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-navy-light pt-6 text-center text-xs text-gray-500">
          <p>
            Golden Stone Industry Co., Ltd. | Registered Capital 41,000,000 THB
          </p>
        </div>
      </div>
    </footer>
  );
}

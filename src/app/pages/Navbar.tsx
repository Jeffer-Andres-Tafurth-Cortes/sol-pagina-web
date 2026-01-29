"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${styles.scrolled}`}
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <nav
        className={styles.container}
        role="navigation"
        aria-label="Menú principal"
      >
        {/* LOGO */}
        <div className={styles.leftGroup}>
          <Link href="/" className={`${styles.logo} ${styles.dark}`}>
            <Image
              src="/logo_sol.jpg"
              alt="Pravice Abogados – Abogados especialistas en Colombia"
              width={90}
              height={90}
              priority
            />
          </Link>
        </div>

        {/* MENÚ */}
        <div className={styles.rightGroup}>
          <ul
            className={`${styles.links} ${menuOpen ? styles.active : ""}`}
            aria-label="Enlaces principales"
          >
            <li>
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                aria-current={pathname === "/about" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Sobre Pravice Abogados
              </Link>
            </li>

            <li>
              <Link
                href="/practice"
                aria-current={pathname === "/practice" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Áreas de práctica
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                aria-current={pathname === "/blog" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Blog jurídico
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                aria-current={pathname === "/contact" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Contacto legal
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <button
            className={styles.ctaButton}
            onClick={handleClick}
            aria-label="Consulta legal por WhatsApp con abogados especialistas"
          >
            Consulta legal por WhatsApp
          </button>

          {/* MENÚ MÓVIL */}
          <button
            className={styles.hamburger}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${styles.scrolled}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <nav className={styles.container}>
        {/** LOGO */}
        <Link href="/" className={`${styles.logo} ${styles.dark}`}>
          <Image
            src="/logo_sol.jpg"
            alt="Logo Sol"
            width={90}
            height={90}
            priority
          />
        </Link>

        {/** MENU DESKTOP / MOBILE */}
        <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              INICIO
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link href="/practice" onClick={() => setMenuOpen(false)}>
              AREAS DE PRACTICA
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              CONTACTO
            </Link>
          </li>
        </ul>

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>

        {/* BOTÓN HAMBURGUESA */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Video de fondo */}
      <video className={styles.videoBg} autoPlay muted loop playsInline>
        <source src="/video-intro2.mp4" type="video/mp4" />
      </video>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.mainTitle}>
          SOL Centro de Conciliación y Arbitraje en Colombia
        </h1>

        <p className={styles.paragraph}>
          En <strong>SOL Centro de Conciliación y Arbitraje</strong> ofrecemos
          soluciones legales ágiles y efectivas para la{" "}
          <strong>resolución alternativa de conflictos</strong> a través de la
          conciliación extrajudicial y el arbitraje. Acompañamos a personas y
          empresas en la búsqueda de acuerdos justos, eficientes y legalmente
          respaldados.
        </p>

        <p className={styles.paragraph}>
          Nuestro equipo de profesionales especializados te asesora durante cada
          etapa del proceso, garantizando seguridad jurídica, confidencialidad y
          un enfoque práctico orientado a resultados.
        </p>

        <button className={styles.ctaButton} onClick={handleClick}>
          Consulta legal por WhatsApp
        </button>
      </motion.div>
    </section>
  );
}

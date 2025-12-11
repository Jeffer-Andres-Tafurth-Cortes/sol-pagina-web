"use client";

import { useState } from "react";
import styles from "./blog.module.css";
import { motion, AnimatePresence, Variants } from "framer-motion";

type BlogItem = {
  question: string;
  answer: string;
};

const faqData: BlogItem[] = [
  {
    question: "¿Qué incluye la asesoría en asuntos comerciales?",
    answer:
      "Revisión y redacción de contratos de compraventa, distribución, agencia y prestación de servicios; gestión de incumplimientos, cobros, garantías y negociación con clientes o proveedores; uso de mecanismos alternativos de solución de controversias para cerrar disputas con eficiencia.",
  },
  {
    question:
      "¿Cuándo conviene usar conciliación o arbitraje en un conflicto comercial?",
    answer:
      "Cuando se busca una salida más rápida y reservada que el proceso judicial. La conciliación facilita acuerdos voluntarios y ejecutables; el arbitraje concluye con un laudo con fuerza de sentencia. Elegimos el mecanismo según la cláusula pactada y el objetivo del negocio.",
  },
  {
    question: "¿Qué cláusulas son clave en un contrato comercial?",
    answer:
      "Objeto y alcance, precio y pagos, plazos de entrega, estándares de calidad, garantías, limitación de responsabilidad, confidencialidad, protección de datos, propiedad intelectual, solución de controversias, terminación anticipada y penalidades por incumplimiento.",
  },
];

// Variants del contenedor
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

// Variants de cada item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <h3 className={styles.subtitle}>
          Tus preguntas, respondidas con claridad
        </h3>
        <h2 className={styles.heading}>PREGUNTAS FRECUENTES</h2>
      </motion.div>

      <motion.div
        className={styles.accordion}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            variants={itemVariants}
          >
            <button
              className={styles.accordionButton}
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
            >
              {item.question}
              <span className={styles.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  className={styles.accordionContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { duration: 0.25 },
                  }}
                  style={{ overflow: "hidden" }} // ⭐ IMPORTANTE
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0 }}
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

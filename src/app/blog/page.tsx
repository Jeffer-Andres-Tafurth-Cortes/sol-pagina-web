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
    question: "¿Qué es la conciliación extrajudicial en derecho?",
    answer:
      "Es un mecanismo alternativo de solución de conflictos mediante el cual las partes, con la ayuda de un conciliador neutral, buscan llegar a un acuerdo voluntario sin acudir a un proceso judicial, ahorrando tiempo, costos y desgaste emocional.",
  },
  {
    question: "¿Qué tipo de conflictos se pueden conciliar?",
    answer:
      "Se pueden conciliar asuntos civiles, comerciales, laborales, de familia, copropiedad y convivencia, siempre que la ley lo permita y las partes tengan capacidad para disponer del derecho en conflicto.",
  },
  {
    question: "¿Los acuerdos logrados en conciliación tienen validez legal?",
    answer:
      "Sí. El acta de conciliación presta mérito ejecutivo y hace tránsito a cosa juzgada, lo que significa que el acuerdo es obligatorio y puede exigirse legalmente en caso de incumplimiento.",
  },
  {
    question: "¿Cuándo conviene acudir a conciliación en lugar de un juicio?",
    answer:
      "Cuando se busca una solución rápida, confidencial y menos costosa. La conciliación es ideal para preservar relaciones comerciales, familiares o laborales, evitando procesos largos y desgastantes.",
  },
  {
    question: "¿Qué incluye la asesoría en asuntos comerciales?",
    answer:
      "Incluye análisis de contratos, manejo de incumplimientos, cobros de obligaciones, negociación entre empresas y acompañamiento en conciliaciones para resolver disputas comerciales de forma estratégica.",
  },
  {
    question: "¿Se pueden conciliar conflictos laborales?",
    answer:
      "Sí. Muchos conflictos laborales pueden resolverse mediante conciliación, como liquidaciones, pagos pendientes o terminación de contratos, siempre respetando los derechos mínimos del trabajador.",
  },
  {
    question: "¿Cómo se manejan los temas de familia en conciliación?",
    answer:
      "Se abordan con especial cuidado temas como alimentos, custodia, régimen de visitas y acuerdos familiares, priorizando siempre el interés superior de los menores y el bienestar de las partes.",
  },
  {
    question: "¿Qué pasa si una de las partes no cumple el acuerdo?",
    answer:
      "El acta de conciliación permite iniciar un proceso ejecutivo para exigir el cumplimiento del acuerdo, sin necesidad de volver a discutir el fondo del conflicto.",
  },
  {
    question: "¿Es obligatoria la conciliación antes de demandar?",
    answer:
      "En muchos casos sí. La conciliación extrajudicial es un requisito de procedibilidad antes de acudir a la vía judicial, dependiendo del tipo de proceso y la materia.",
  },
  {
    question: "¿Cómo puedo agendar una asesoría o iniciar un proceso?",
    answer:
      "Actualmente, todas las solicitudes de asesoría e inicio de procesos se realizan directamente a través de WhatsApp, donde recibirás atención personalizada y orientación inicial.",
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
        <h2 className={styles.heading}>
          Preguntas frecuentes sobre conciliación y arbitraje
        </h2>
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

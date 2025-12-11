"use client";

import styles from "../styles/PracticeSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faBriefcase,
  faBuilding,
  faUsers,
  faChild,
  faClipboardList,
  faHouse,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const areas = [
  {
    title: "Asuntos Comerciales",
    desc: "Asesoría en disputas entre empresas o sobre contratos comerciales, sociedades y operaciones mercantiles",
    icon: faMoneyBillWave,
  },
  {
    title: "Asuntos Civiles",
    desc: "Resolución de conflictos relacionados con contratos, daños, herencias y derechos personales, entre otros temas civiles.",
    icon: faScaleBalanced,
  },
  {
    title: "Asuntos de Copropiedad",
    desc: "Gestión de conflictos en propiedad horizontal, como cuotas de administración, mantenimiento y derechos de los copropietarios.",
    icon: faBuilding,
  },
  {
    title: "Asuntos Laborales",
    desc: "Resolución en conflictos entre empleadores y empleados, incluyendo despidos, contratos y reclamaciones de derechos laborales.",
    icon: faBriefcase,
  },
  {
    title: "Alimentos para Menores",
    desc: "Asesoría y gestión en procesos legales para garantizar el cumplimiento de la manutención económica de los hijos.",
    icon: faChild,
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Orientación en disputas sobre la tenencia de los hijos y cronogramas de visitas.",
    icon: faClipboardList,
  },
  {
    title: "Asuntos Vecinales",
    desc: "Mediación en problemas de convivencia entre vecinos, ruidos y normas comunitarias.",
    icon: faUsers,
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Acompañamiento en la distribución justa de bienes adquiridos durante el matrimonio.",
    icon: faHouse,
  },
];

export default function PracticeSection() {
  return (
    <section className={styles.section}>
      {/* Encabezado con Fade-Up */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className={styles.subtitle}>ÁREAS DE PRÁCTICA</span>
        <h2 className={styles.title}>Conciliación Extrajudicial en Derecho</h2>
        <p className={styles.description}>
          En SOL facilitamos soluciones legales y humanas priorizando acuerdos
          eficaces.
        </p>
      </motion.div>

      {/* Grid con Stagger Animation */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              transition: { duration: 0.25 },
            }}
            transition={{ duration: 0.45 }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={area.icon} />
            </div>
            <h3 className={styles.cardTitle}>{area.title}</h3>
            <p className={styles.cardDesc}>{area.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

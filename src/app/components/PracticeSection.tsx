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
    desc: "Asesoría y gestión en procesos legales para garantizar el cumplimiento de la manutención económica de los hijos, cubriendo alimentación, educación y salud.",
    icon: faChild,
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Orientación en disputas sobre la tenencia de los hijos y la definición de cronogramas que garantizan el derecho de ambos padres a compartir con ellos.",
    icon: faClipboardList,
  },
  {
    title: "Asuntos Vecinales",
    desc: "Mediación en problemas de convivencia entre vecinos, uso de espacios comunes, ruidos y cumplimiento de normas comunitarias.",
    icon: faUsers,
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Acompañamiento en la distribución equitativa de bienes adquiridos durante el matrimonio, garantizando un cierre justo y transparente.",
    icon: faHouse,
  },
];

export default function PracticeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>ÁREAS DE PRÁCTICA</span>
        <h2 className={styles.title}>Conciliación Extrajudicial en Derecho</h2>
        <p className={styles.description}>
          En SOL facilitamos soluciones legales y humanas priorizando acuerdos
          eficaces.
        </p>
      </div>

      <div className={styles.grid}>
        {areas.map((area, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={area.icon} />
            </div>
            <h3 className={styles.cardTitle}>{area.title}</h3>
            <p className={styles.cardDesc}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

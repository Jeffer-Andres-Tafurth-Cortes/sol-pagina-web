"use client";

import styles from "./About.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

export default function About() {
  return (
    <section className={styles.section}>
      {/* BLOQUE 1 */}
      <div className={styles.profile}>
        <div className={styles.text}>
          <h2 className={styles.name}>Dr. Harrison Calderon</h2>
          <span className={styles.role}>Abogado</span>

          <p className={styles.description}>
            Abogado egresado de la Universidad del Rosario ...
          </p>

          <button className={styles.button} onClick={handleClick}>
            Programa tu consulta →
          </button>
        </div>

        <div className={styles.imageBox}>
          <img src="/doc-harrison.jpg" alt="Dr Harrison" />
        </div>
      </div>

      {/* BLOQUE 2 INVERTIDO */}
      <div className={`${styles.profile} ${styles.reverse}`}>
        <div className={styles.imageBox}>
          <img src="/doc-leidy.jpg" alt="Dra Leidy" />
        </div>

        <div className={styles.text}>
          <h2 className={styles.name}>Dra. Leidy Tirado</h2>
          <span className={styles.role}>CCO & Abogada</span>

          <p className={styles.description}>
            Abogada y conciliadora en derecho, formada en la Universidad
            Militar, especializada en la gestión profesional de conflictos
            civiles, familiares, laborales, comerciales y/o empresariales. Leidy
            se distingue por un enfoque técnico y estratégico, orientado a la
            construcción de acuerdos claros, ejecutables y respetuosos de la
            normativa vigente, evitando procesos judiciales innecesariamente
            desgastantes. Su actuación imparcial, su rigor jurídico y su
            capacidad para conducir negociaciones entre las partes la convierten
            en una profesional confiable para la prevención y gestión eficiente
            de controversias, brindando verdadera tranquilidad jurídica.
          </p>

          <button className={styles.button} onClick={handleClick}>
            Programa tu consulta →
          </button>
        </div>
      </div>

      {/* BLOQUE 3 INVERTIDO */}
      <div className={styles.profile}>
        <div className={styles.text}>
          <h2 className={styles.name}>Dra. Angie Rivera</h2>
          <span className={styles.role}>CCO & Abogada</span>

          <p className={styles.description}>
            Abogado egresado de la Universidad del Rosario ...
          </p>

          <button className={styles.button} onClick={handleClick}>
            Programa tu consulta →
          </button>
        </div>

        <div className={styles.imageBox}>
          <img src="/doc-angie.jpg" alt="Dra. Angie" />
        </div>
      </div>
    </section>
  );
}

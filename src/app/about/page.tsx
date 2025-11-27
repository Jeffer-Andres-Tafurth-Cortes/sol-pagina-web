"use client";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      {/* BLOQUE 1 */}
      <div className={styles.profile}>
        <div className={styles.text}>
          <h2 className={styles.name}>Dr. Alberto Castro</h2>
          <span className={styles.role}>Abogado</span>

          <p className={styles.description}>
            Abogado egresado de la Universidad del Rosario con estudios de
            posgrado...
          </p>

          <button className={styles.button}>Programa tu consulta →</button>
        </div>

        <div className={styles.imageBox}>
          <img src="/alberto.jpg" alt="Dr Alberto" />
        </div>
      </div>

      {/* BLOQUE 2 INVERTIDO */}
      <div className={`${styles.profile} ${styles.reverse}`}>
        <div className={styles.imageBox}>
          <img src="/alberto.jpg" alt="Dr Alberto" />
        </div>

        <div className={styles.text}>
          <h2 className={styles.name}>Dr. Alberto Castro</h2>
          <span className={styles.role}>Abogado</span>

          <p className={styles.description}>
            Abogado egresado de la Universidad del Rosario con estudios de
            posgrado...
          </p>

          <button className={styles.button}>Programa tu consulta →</button>
        </div>
      </div>
    </section>
  );
}

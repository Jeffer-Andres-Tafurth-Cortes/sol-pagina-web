"use client";

import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA SUPERIOR */}
      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          Asesoría en conciliación y arbitraje
          <span className={styles.ctaHighlight}>
            en SOL Centro de Conciliación y Arbitraje
          </span>
        </h2>

        <button
          className={styles.ctaButton}
          onClick={handleClick}
          aria-label="Agendar consulta legal por WhatsApp"
        >
          Consulta legal por WhatsApp
        </button>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.content}>
        {/* LOGO Y DESCRIPCIÓN */}
        <div className={styles.col}>
          <img
            src="/logo_sol.jpg"
            alt="SOL Centro de Conciliación y Arbitraje"
            className={styles.logo}
          />

          <p className={styles.text}>
            <strong>SOL Centro de Conciliación y Arbitraje</strong> es una
            entidad especializada en la resolución alternativa de conflictos
            mediante conciliación extrajudicial y arbitraje, brindando seguridad
            jurídica a personas y empresas en Colombia.
          </p>

          <h4 className={styles.heading}>Síguenos en redes sociales</h4>

          <div className={styles.socials}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/pravice_abogados/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram SOL Centro de Conciliación y Arbitraje"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className={styles.socialLink}
              href="https://www.facebook.com/praviceabogadosespecializados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook SOL Centro de Conciliación y Arbitraje"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              className={styles.socialLink}
              href="https://www.tiktok.com/@pravice_abogados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok SOL Centro de Conciliación y Arbitraje"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>

            <a
              className={styles.socialLink}
              href="https://co.linkedin.com/company/praviceabogadosespecializados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn SOL Centro de Conciliación y Arbitraje"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        {/* CONTACTO */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Información de contacto</h4>

          <p className={styles.text}>
            <FontAwesomeIcon icon={faLocationDot} /> Calle 98 No. 22-64, Oficina
            716, Colombia
          </p>

          <p className={styles.text}>
            <FontAwesomeIcon icon={faPhone} /> +57 323 290 4786
          </p>

          <p className={styles.text}>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            comercial@solcentrodeconciliacion.com
          </p>
        </div>

        {/* HORARIO */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Horario de atención</h4>

          <p className={styles.text}>
            Lunes a viernes
            <br /> 8:00 a.m. – 6:00 p.m.
          </p>

          <p className={styles.text}>
            Sábados
            <br /> 8:00 a.m. – 1:00 p.m.
          </p>
        </div>
      </div>

      {/* BARRA FINAL */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2026 SOL Centro de Conciliación y Arbitraje. Todos los derechos
          reservados.
        </p>

        <div className={styles.legal}>
          <a href="/politica-privacidad" className={styles.legalLink}>
            Política de Privacidad
          </a>
          <a href="/terminos-condiciones" className={styles.legalLink}>
            Términos y Condiciones
          </a>
        </div>
      </div>

      {/* BOTÓN FIJO WHATSAPP */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.phoneBtn}
          onClick={handleClick}
          aria-label="Contactar por WhatsApp a SOL Centro de Conciliación y Arbitraje"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
}

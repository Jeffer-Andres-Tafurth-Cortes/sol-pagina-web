"use client";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA SUPERIOR */}
      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          ¿Necesitas asesoramiento legal?
          <span className={styles.ctaHighlight}>
            Confía en Sol Centro de Arbitraje y Conciliación.
          </span>
        </h2>

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CITA
        </button>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.content}>
        {/* LOGO */}
        <div className={styles.col}>
          <img src="/logo_sol.jpg" alt="Logo Sol" className={styles.logo} />
          <p className={styles.text}>
            En SOL brindamos seguridad jurídica y resolución pacífica de
            conflictos a personas y empresas.
          </p>

          <h4 className={styles.heading}>REDES SOCIALES</h4>

          <div className={styles.socials}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/pravice_abogados/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={styles.socialLink}
              href="https://www.facebook.com/praviceabogadosespecializados"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className={styles.socialLink}
              href="https://www.tiktok.com/@pravice_abogados"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              className={styles.socialLink}
              href="https://co.linkedin.com/company/praviceabogadosespecializados"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        {/* ENLACES */}
        <div className={styles.col}>
          <h4 className={styles.heading}>ENLACES RÁPIDOS</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>Inicio</li>
            <li className={styles.listItem}>Nosotros</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contacto</li>
            <li className={styles.listItem}>Paga aquí</li>
          </ul>
        </div>

        {/* ÁREAS */}
        <div className={styles.col}>
          <h4 className={styles.heading}>NUESTRAS ÁREAS</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>Asuntos Comerciales</li>
            <li className={styles.listItem}>Asuntos Civiles</li>
            <li className={styles.listItem}>Asuntos Laborales</li>
            <li className={styles.listItem}>Copropiedad</li>
            <li className={styles.listItem}>Custodia y Visitas</li>
            <li className={styles.listItem}>Alimentos para Menores</li>
            <li className={styles.listItem}>Asuntos Vecinales</li>
            <li className={styles.listItem}>Liquidación Sociedad Conyugal</li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div className={styles.col}>
          <h4 className={styles.heading}>DETALLES DE CONTACTO</h4>
          <p className={styles.text}>
            <FontAwesomeIcon icon={faLocationDot} /> Calle 98 no. 22 - 64
            Oficina 716
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
          <h4 className={styles.heading}>HORARIO</h4>
          <p className={styles.text}>
            Lunes a viernes
            <br className={styles.break} />
            8:00 am a 6:00 pm
          </p>
          <p className={styles.text}>
            Sábados
            <br className={styles.break} />
            8:00 am a 1:00 pm
          </p>
        </div>
      </div>

      {/* BARRA FINAL */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2025 SOL Centro de Conciliación y Arbitraje. Todos los derechos
          reservados.
        </p>

        <div className={styles.legal}>
          <a className={styles.legalLink}>Política de Privacidad</a>
          <a className={styles.legalLink}>Términos y Condiciones</a>
        </div>
      </div>

      {/* Botón fijo de WhatsApp */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.phoneBtn}
          aria-label="Llamar"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
}

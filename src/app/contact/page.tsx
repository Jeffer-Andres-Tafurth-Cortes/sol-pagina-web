"use client";

import { FormEvent } from "react";
import styles from "./contact.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)
      .value;
    const apellido = (form.elements.namedItem("apellido") as HTMLInputElement)
      .value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement)
      .value;

    const texto = `
📩 *Nuevo mensaje recibido desde la web*

👤 *Nombre:* ${nombre} ${apellido}
📞 *Teléfono:* ${telefono}
📧 *Email:* ${email}

💬 *Mensaje:*
${mensaje}
    `;

    const mensajeCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = "573232904786";

    const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = esMovil
      ? `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`
      : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

    window.open(url, "_blank");
    form.reset();
  };

  return (
    <section className={styles.contactSection}>
      {/* BLOQUE SUPERIOR */}
      <div className={styles.container}>
        {/* TEXTO */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Tienes preguntas o quieres agendar una consulta?</h2>
          <p>
            Escríbenos y con gusto te ayudaremos a planear tu proceso legal con
            nuestros expertos.
          </p>
        </motion.div>

        {/* FORMULARIO */}
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Estamos para ayudarte</h3>

          <div className={styles.row}>
            <div>
              <label htmlFor="nombre">Nombre*</label>
              <input id="nombre" name="nombre" type="text" required />
            </div>

            <div>
              <label htmlFor="apellido">Apellido*</label>
              <input id="apellido" name="apellido" type="text" required />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label htmlFor="telefono">Teléfono*</label>
              <input id="telefono" name="telefono" type="tel" required />
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje*</label>
            <textarea id="mensaje" name="mensaje" rows={5} required />
          </div>

          <div className={styles.checkbox}>
            <input id="privacy" type="checkbox" required />
            <label htmlFor="privacy">
              Autorizo el uso de mis datos según la{" "}
              <a
                href="https://sumapazvive.com/pages/terms/terms_and_conditions.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de privacidad
              </a>
            </label>
          </div>

          <motion.button
            className={styles.ctaButton}
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Enviar
          </motion.button>
        </motion.form>
      </div>

      {/* BLOQUE INFERIOR (MAPA) */}
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={styles.mapTitle}>Nuestra oficina</h3>

        <div className={styles.mapContainer}>
          <iframe
            title="Ubicación oficina Pravice"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}

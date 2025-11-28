"use client";

import { useState } from "react";
import styles from "./blog.module.css";

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
  {
    question: "¿Cómo prevenir incumplimientos de pago en relaciones B2B?",
    answer:
      "Con verificación de contraparte, términos claros de facturación, garantías reales o personales, cláusulas de intereses y mora, hitos de pago por entregables y procedimientos de cobranza extrajudicial escalonados antes de iniciar un litigio.",
  },
  {
    question: "¿Qué hacer ante un incumplimiento de contrato?",
    answer:
      "Recopilar evidencias, revisar cláusulas de aviso y cure period, activar garantías y negociar un acuerdo. Si no hay solución, se acude a conciliación, arbitraje o a la jurisdicción pactada. Documentar cada gestión aumenta la fuerza de tu reclamación.",
  },
  {
    question:
      "¿Cómo se protegen las marcas y contenidos en un acuerdo comercial?",
    answer:
      "Mediante licencias y cesiones por escrito con alcance, territorio y vigencia definidos. Se complementa con cláusulas de confidencialidad, no uso indebido, y mecanismos de verificación y retiro en caso de infracción.",
  },
  {
    question: "¿Qué debe cumplir una tienda en línea a nivel legal?",
    answer:
      "Términos y condiciones claros, política de privacidad y datos personales, política de garantías y devoluciones, información veraz de precios y tiempos de envío, y facturación conforme a la normativa aplicable.",
  },
  {
    question: "¿Cómo estructurar acuerdos de distribución o exclusividad?",
    answer:
      "Definir territorio, canales, metas mínimas de compra, soporte de marca, estándares de servicio, precios recomendados, niveles de inventario, reportes y causales de terminación. Se valora impacto en competencia y restricciones legales.",
  },
  {
    question: "¿Qué pruebas sirven en un conflicto comercial?",
    answer:
      "Contrato y anexos, órdenes de compra, guías de despacho, actas de recepción, correos y chats corporativos, facturas, estados de cuenta, certificaciones de calidad y cualquier registro que evidencie obligación, cumplimiento o perjuicio.",
  },
  {
    question:
      "¿Puedo pactar ley y jurisdicción aplicables con una empresa extranjera?",
    answer:
      "Sí. Es recomendable acordar ley aplicable y sede de solución de controversias. También se puede pactar arbitraje internacional para mayor neutralidad y ejecutabilidad del laudo.",
  },
];

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section className={styles.faqSection}>
        <h3 className={styles.subtitle}>
          Tus preguntas, respondidas con claridad
        </h3>
        <h2 className={styles.heading}>PREGUNTAS FRECUENTES</h2>
        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.accordionButton}
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                {item.question}
                <span className={styles.icon}>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className={styles.accordionContent}
                style={{ maxHeight: activeIndex === index ? "500px" : "0" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

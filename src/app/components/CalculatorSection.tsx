"use client";

import { useState } from "react";
import styles from "../styles/CalculatorSection.module.css";

export default function CalculatorSection() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [base, setBase] = useState<number | null>(null);
  const [iva, setIva] = useState<number | null>(null);

  // ✅ Formateador con puntos de miles
  const formatNumber = (value: string) => {
    const cleanValue = value.replace(/\D/g, ""); // solo números
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // ✅ Cuando escribe en el input
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumber(e.target.value);
    setAmount(formattedValue);
  };

  // ✅ Calcular valores
  const handleCalculate = () => {
    const numericValue = Number(amount.replace(/\./g, ""));
    if (!numericValue) return;

    const baseCalc = Math.round(numericValue * 0.07);
    const ivaCalc = Math.round(baseCalc * 0.19);
    const totalCalc = Math.round(baseCalc + ivaCalc);

    setBase(baseCalc);
    setIva(ivaCalc);
    setTotal(totalCalc);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.card}>
          <h2 className={styles.title}>Calculadora de Conciliación</h2>

          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            Si el monto de la conciliación es indeterminado, seleccione esta
            opción
          </label>

          <label className={styles.label}>Monto de la conciliación</label>
          <input
            className={styles.input}
            placeholder="Ej: 50.000"
            value={amount}
            onChange={handleAmountChange}
            inputMode="numeric"
          />

          <button onClick={handleCalculate} className={styles.button}>
            Calcular
          </button>

          {total !== null && (
            <div className={styles.results}>
              <p>
                <strong>Base:</strong> COP {base?.toLocaleString("es-CO")}
              </p>
              <p>
                <strong>IVA:</strong> COP {iva?.toLocaleString("es-CO")}
              </p>
              <p className={styles.total}>
                Total: COP {total.toLocaleString("es-CO")}
              </p>
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            Conciliación que construye soluciones
          </h1>
          <p className={styles.description}>
            En <strong>Sol Centro de Conciliación</strong> te ayudamos a
            resolver tus conflictos de forma pacífica y profesional.
          </p>

          <button className={styles.cta}>Programe una consulta →</button>
        </div>
      </div>
    </section>
  );
}

import styles from "./styles.module.scss";

export default function Spinner({ size = "1rem", color = "#2f80ed" }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `2px solid ${color}`,
      }}
      className={styles.spinner}
    ></div>
  );
}

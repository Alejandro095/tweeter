import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>
  );
}

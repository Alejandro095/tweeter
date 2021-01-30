import styles from "./styles.module.scss";

import Header from "@layout/header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>{children}</main>
    </div>
  );
}

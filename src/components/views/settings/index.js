import Layout from "@layout/base";
import styles from "./styles.module.scss";

import Link from "next/link";

export default function SettingsView() {
  return (
    <Layout>
      <main className={styles.main}>
        <p className={styles.title}>Información personal</p>
        <p>Información basica, como tu nombre y foto</p>

        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.titlecontainer}>
              <p>Perfil</p>
              <p>Alguna información puede ser visible para otras personas.</p>
            </div>

            <div>
              <Link href="/settings/edit">
                <a className={styles.btn}>Editar</a>
              </Link>
            </div>
          </div>

          <div>FOTO</div>
          <div>NOMBRE</div>
          <div>BIO</div>
          <div>TELEFONO</div>
          <div>CORREO</div>
          <div>CONTRASEÑA</div>
        </div>
      </main>
    </Layout>
  );
}

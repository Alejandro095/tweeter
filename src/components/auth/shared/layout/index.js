import styles from "./styles.module.scss"

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

// Next Components
import Link from 'next/link'

export default function Layout({children}) {

    return (
        <main className={styles.main}>
            <div>
                <img src="/tweeter-light.svg" />

                <p>Iniciar sesión</p>

                <form className={styles.form} method="POST" action="">

                    <label for="name" className={styles.label}>
                        <EmailOutlinedIcon/>
                        <input type="text" id="name" className={styles.input} placeholder="Correo"></input>
                    </label>

                    <label for="passowrd" className={styles.label}>
                        <LockOutlinedIcon/>
                        <input type="password" id="password" className={styles.input} placeholder="Contraseña"></input>
                    </label>

                    <label>
                        <input type="submit" id="submit" className={styles.submit} value="Iniciar sesión"></input>
                    </label>
                </form>

                <p>O continua con una de la siguientes redes sociales</p>

                <div className={styles.social}>
                    <img src="Google.svg" />
                    <img src="Facebook.svg" />
                    <img src="Twitter.svg" />
                    <img src="Github.svg" />
                </div>
                <p>¿No tienes cuenta?  <Link href="/login"><a className={styles.link} >Regístrate</a></Link> </p>
            </div>
        </main>
    )

}
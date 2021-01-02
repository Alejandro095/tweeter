import styles from "./styles.module.scss"

// Next Components
import Link from 'next/link'

export default function Layout({children}) {

    return (
        <main className={styles.main}>
            <div>
                <img src="/tweeter-light.svg" />

                <h3>Iniciar sesión</h3>

                <form>
                    <label>
                        <input type="text"></input>
                    </label>
                    <label>
                        <input type="text"></input>
                    </label>

                    <label>
                        <input type="submit"></input>
                    </label>
                </form>

                <p>O continua con una de la siguientes redes sociales</p>

                <div>
                    
                    <img src="Google.svg" />
                    <img src="Facebook.svg" />
                    <img src="Twitter.svg" />
                    <img src="Github.svg" />
                </div>
                <p>¿No tienes cuenta?  <Link href="/login">
                            <a >Regístrate</a>
                        </Link> </p>
            </div>
        </main>
    )

}
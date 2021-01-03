import styles from "./styles.module.scss"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// Next Components
import Link from 'next/link'
import { useRouter } from "next/router";


export default function HeaderApp({children}){

    const router = useRouter();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/tweeter-light.svg"/>
                </div>
                <nav>
                    <ul>
                        <li className={router.pathname == "/" ? styles.active : ""}>
                            <Link href="/">
                                <a>Inicio</a>
                            </Link>
                        </li>

                        <li className={router.pathname == "/explorer" ? styles.active : ""}>
                            <Link href="/explorer">
                                <a>Explorar</a>
                            </Link>
                        </li>

                        <li className={router.pathname == "/bookmarks" ? styles.active : ""}>
                            <Link href="/bookmarks">
                                <a>Marcadores</a>
                            </Link>
                        </li>

                    </ul>
                </nav>
                <div className={styles.userinfo}>
                    <img src="profile.jpg" />
                    <p>Alejandro Tovar</p>
                    <ArrowDropDownIcon/>
                </div>
            </header>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
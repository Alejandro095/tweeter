import styles from "./styles.module.scss"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

// Next Components
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";


export default function HeaderApp({children}){

    const router = useRouter();
    const [visible, setVisble] = useState(false);

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


                <div className={styles.containeruser}>

                    <div className={styles.space}/>

                    <div className={styles.userinfo} onClick={()=> setVisble(!visible)}>
                        <img src="profile.jpg" />
                        <p>Alejandro Tovar</p>
                        <ArrowDropDownIcon/>

                        <div className={visible ? styles.popactive : styles.popnoactive}>
                           <ul className={styles.dropmenu}>
                               <li>
                                   <AccountCircleIcon/>
                                   <span>Perfil</span>
                               </li>
                               <li>
                                   <GroupIcon/>
                                   <span>Chat</span>
                               </li>
                               <li>
                                   <SettingsIcon/>
                                   <span>Configuración</span>
                               </li>
                               <hr/>
                               <li>
                                   <ExitToAppOutlinedIcon/>
                                   <span>Cerrar sesión</span>
                               </li>
                           </ul>
                        </div>
                    </div>


                </div>

            </header>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
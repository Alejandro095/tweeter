import styles from "./styles.module.scss";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

// Next Components
import Link from "next/link";

import { useState } from "react";
import isSameUrl from "hooks/is-same-url";

export default function HeaderLayout({ children }) {
  const checkUrl = isSameUrl();

  const [visible, setVisble] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/tweeter-light.svg" />
      </div>
      <nav>
        <ul>
          <li className={checkUrl("/") ? styles.active : ""}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>

          <li className={checkUrl("/explorer") ? styles.active : ""}>
            <Link href="/explorer">
              <a>Explorar</a>
            </Link>
          </li>

          <li className={checkUrl("/bookmarks") ? styles.active : ""}>
            <Link href="/bookmarks">
              <a>Marcadores</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.containeruser}>
        <div className={styles.space} />

        <div className={styles.userinfo} onClick={() => setVisble(!visible)}>
          <img src="/profile.jpg" />
          <p>Alejandro Tovar</p>
          <ArrowDropDownIcon />

          <div className={visible ? styles.popactive : styles.popnoactive}>
            <ul className={styles.dropmenu}>
              <li>
                <AccountCircleIcon />
                <Link
                  href={{
                    pathname: "/[profile]",
                    query: {
                      profile: "alejandro",
                    },
                  }}
                >
                  <a>Perfil</a>
                </Link>
              </li>
              <li>
                <GroupIcon />
                <Link href="/messages">
                  <a>Mensajes</a>
                </Link>
              </li>
              <li>
                <SettingsIcon />
                <Link href="/settings">
                  <a>Configuración</a>
                </Link>
              </li>
              <hr />
              <li>
                <ExitToAppOutlinedIcon />
                <Link href="/">
                  <a>Cerrar sesión</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

import styles from "./styles.module.scss"

import Header from "@layout/header"

export default function Layout({children}){
    return (
        <div className={styles.container}>

            <Header />

            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}
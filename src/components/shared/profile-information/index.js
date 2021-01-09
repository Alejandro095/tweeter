import styles from "./styles.module.scss"

export default function ProfileInformation() {

    return (
        <header className={styles.banner}>
            <div className={styles.information}>
                <img className={styles.avatar} src="/profile.jpg" />
                <div className={styles.data}>Hola mudno</div>
            </div>
        </header>
    )

}
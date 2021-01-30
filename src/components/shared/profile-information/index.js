import styles from "./styles.module.scss";

export default function ProfileInformation() {
  return (
    <header className={styles.banner}>
      <div className={styles.information}>
        <div className={styles.avatarlayer}>
          <img className={styles.avatar} src="/profile.jpg" />
        </div>
        <div className={styles.data}>
          <div className={styles.userinformation}>
            <div>
              <p className={styles.name}>Alejandro Tovar</p>
              <p className={styles.username}>@Alejandro</p>
            </div>

            <div className={styles.personal}>
              <p>
                2,569 <span>siguiendo</span>{" "}
              </p>
              <p>
                10.8k <span>seguidores</span>{" "}
              </p>
            </div>
            <div>
              <button>Seguir</button>
            </div>
          </div>

          <div className={styles.bio}>
            <p>
              {" "}
              Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
              Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
              Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰{" "}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

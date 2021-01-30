import Link from "@shared/link";
import isSameUrl from "hooks/is-same-url";
import styles from "./styles.module.scss";

export default function AsideNavigation({ routes, query }) {
  const checkUrl = isSameUrl();

  return (
    <div className={styles.container}>
      <ul className={styles.normalize}>
        {routes.map(({ title, pathname }, index) => (
          <li
            key={index}
            className={checkUrl(pathname, true) ? styles.active : ""}
          >
            <Link
              pathname={pathname}
              title={title}
              query={query}
              scroll={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

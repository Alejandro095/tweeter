import LinkNext from "next/link";
import styles from "./styles.module.scss";

export default function Link({ pathname, query, title, scroll = true }) {
  return (
    <LinkNext href={{ pathname, query }} scroll={scroll}>
      <a className={styles.a}>{title}</a>
    </LinkNext>
  );
}

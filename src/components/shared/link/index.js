import LinkNext from 'next/link'
import styles from "./styles.module.scss"


export default function Link({ pathname, query, title }) {

    return (
        <LinkNext href={{pathname, query}}> 
            <a className={styles.a}>{title}</a> 
        </LinkNext>
    )
}
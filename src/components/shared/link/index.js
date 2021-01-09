import LinkNext from 'next/link'
import { useRouter } from "next/router"


export default function Link({ pathname, title }) {

    const { query } = useRouter()

    return (
        <LinkNext href={{pathname, query}}> 
            <a>{title}</a> 
        </LinkNext>
    )
}
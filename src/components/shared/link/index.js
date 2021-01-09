import LinkNext from 'next/link'


export default function Link({ pathname, query, title }) {

    return (
        <LinkNext href={{pathname, query}}> 
            <a>{title}</a> 
        </LinkNext>
    )
}
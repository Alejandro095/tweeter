import Link from "@shared/link"

export default function AsideNavigation({ routes, query }) {

    return (
        <div>
            <ul>
                {routes.map( ({ title, pathname }, index) => (
                    <li key={index}>
                        <Link pathname={pathname} title={title} query={query} />
                    </li>
                ))}
            </ul>
        </div>
    )

}
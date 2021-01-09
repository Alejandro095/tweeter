import Link from "@shared/link"

export default function AsideNavigation({ routes }) {

    return (
        <div>
            <ul>
                {routes.map( ({ title, pathname }, index) => (
                    <li key={index}>
                        <Link pathname={pathname} title={title} />
                    </li>
                ))}
            </ul>
        </div>
    )

}
import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <Link className="text-decoration-none"href="/">
                        Home
                        
                    </Link>
                   
                </li>
                <li>
                    <Link className="text-decoration-none"href="/">
                       Our Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link className="text-decoration-none"href="/service">Cable TV</Link></li>
                        <li><Link className="text-decoration-none"href="/service-carousel">Internet</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className="text-decoration-none"href="/about">About Us</Link>
                </li>
               
               
                <li>
                    <Link className="text-decoration-none"href="/contact">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}

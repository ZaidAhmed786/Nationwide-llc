import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <a href="/">
                        Home
                        
                    </a>
                   
                </li>
                <li>
                    <a href="/">
                       Our Services
                        <i className="fas fa-angle-down ps-1" />
                    </a>
                    <ul className="submenu">
                        <li><a href="/service">Cable TV</a></li>
                        <li><a href="/service-carousel">Internet</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
               
               
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
            </ul>
        </>
    )
}

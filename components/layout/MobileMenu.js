'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(1)
    console.log(activeItem)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <>
            <div className="mobile-menu  mb-3 mean-container">
                <div className="mean-bar">
                    <Link className="text-decoration-none"href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav ">
                        <ul>
                            <li className="has-dropdown active menu-thumb">
                                <Link className="text-decoration-none"href="/">
                                    Home
                                 
                                </Link>
                               
                             
                            </li>
                           
                            <li>
                                <Link className="text-decoration-none"href="/">
                                   Our Services
                                    
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                         <li><Link className="text-decoration-none"href="/service">Cable TV</Link></li>
                                         <li><Link className="text-decoration-none"href="/service-carousel">Internet</Link></li>
                                   
                                </ul>
                                <a className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link className="text-decoration-none"href="/about">About Us</Link>
                            </li>
                      
                            <li className="mean-last">
                                <Link className="text-decoration-none"href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}

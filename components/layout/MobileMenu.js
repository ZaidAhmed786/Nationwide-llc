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
                    <a href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </a>
                    <nav className="mean-nav ">
                        <ul>
                            <li className="has-dropdown active menu-thumb">
                                <a href="/">
                                    Home
                                 
                                </a>
                               
                             
                            </li>
                           
                            <li>
                                <a href="/">
                                   Our Services
                                    
                                </a>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                         <li><a href="/service">Cable TV</a></li>
                                         <li><a href="/service-carousel">Internet</a></li>
                                   
                                </ul>
                                <a className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                      
                            <li className="mean-last">
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}

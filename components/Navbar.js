import { useState } from 'react'
import Link from 'next/link'
import nav from '../src/styles/modules/Navbar.module.scss'

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)
    const openmenu = () => setIsOpen(!isOpen)

  return (
    <>
        <nav className={nav.main}>
            <div>
                <Link href="/"><a className={nav.logo} onClick={isOpen === true ? openmenu : ""} aria-label="Home">Matt Canterbury</a></Link>
            </div>
            <ul className={isOpen === false ? nav.navmenu : nav.navmenu +' '+ nav.active}>
                <li className={nav.navitem}>
                    <Link href="/resume"><a className={nav.navlink} onClick={openmenu} aria-label="Resume">Resume</a></Link>
                </li>
                <li className={nav.navitem}>
                    <Link href="/portfolio"><a className={nav.navlink} onClick={openmenu} aria-label="Portfolio">Portfolio</a></Link>
                </li>
                <li className={nav.navitem}>
                    <Link href="/contact"><a className={nav.navlink} onClick={openmenu} aria-label="Contact Me">Contact Me</a></Link>
                </li>
            </ul>
            <button id={nav.mobile} className={isOpen === false ? nav.hamburger : nav.hamburger+' '+nav.active} onClick={openmenu}>
                <span className={nav.bar}></span>
                <span className={nav.bar}></span>
                <span className={nav.bar}></span>
            </button>
        </nav>
    </>
  )
}

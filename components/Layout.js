import { useState } from 'react';
import Link from 'next/link'
import nav from '../src/styles/modules/Navbar.module.scss';

export default function Layout({children}) {

const [isOpen, setIsOpen] = useState(false);
const openmenu = () => setIsOpen(!isOpen);

return <>
        <nav className={nav.main}>
        <div>
            <Link href="/"><a className={nav.logo} onClick={openmenu}>Matt Canterbury</a></Link>
        </div>

        <ul className={isOpen === false ? nav.navmenu : nav.navmenu +' '+ nav.active}>
            <li className={nav.navitem}>
                <Link href="/resume"><a className={nav.navlink} onClick={openmenu}>Resume</a></Link>
            </li>
            <li className={nav.navitem}>
                <Link href="/portfolio"><a className={nav.navlink} onClick={openmenu}>Portfolio</a></Link>
            </li>
            <li className={nav.navitem}>
                <Link href="/contact"><a className={nav.navlink} onClick={openmenu}>Contact Me</a></Link>
            </li>
        </ul>

        <button id={nav.mobile} className={isOpen === false ? nav.hamburger : nav.hamburger+' '+nav.active} onClick={openmenu}>
            <span className={nav.bar}></span>
            <span className={nav.bar}></span>
            <span className={nav.bar}></span>
        </button>
        </nav>

        {children}
    </>    
}

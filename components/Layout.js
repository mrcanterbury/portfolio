import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import nav from '../src/styles/modules/Navbar.module.scss'
import footer from '../src/styles/modules/Footer.module.scss'

export default function Layout({children}) {

const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const [isOpen, setIsOpen] = useState(false)
const openmenu = () => setIsOpen(!isOpen)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

const date = new Date().getFullYear()

return <>
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

        {children}

        <footer className={footer.main}>
            <div className={footer.links}>
                <a target="_blank" href="https://github.com/mrcanterbury" rel="noopener noreferrer">
                    <Image
                        className={footer.link}
                        loader={imgLoader}
                        src="/f_github.svg"
                        alt="Github"
                        title="Github"
                        width={40}
                        height={40}
                    />
                </a>
                <a target="_blank" href="https://codepen.io/mrcanterbury" rel="noopener noreferrer">
                    <Image
                        className={footer.link}
                        loader={imgLoader}
                        src="/f_codepen.svg"
                        alt="Codepen"
                        title="Codepen"
                        width={40}
                        height={40}
                    />
                </a>
                <button className={footer.top_button} onClick={scrollToTop}>
                    <Image
                        className={footer.link}
                        loader={imgLoader}
                        src="/f_totop.svg"
                        alt="To Top"
                        title="To Top"
                        width={40}
                        height={40}
                    />
                </button>
                <a target="_blank" href="https://twitter.com/m_canterbury" rel="noopener noreferrer">
                    <Image
                        className={footer.link}
                        loader={imgLoader}
                        src="/f_twitter.svg"
                        alt="Twitter"
                        title="Twitter"
                        width={40}
                        height={40}
                    />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matt-canterbury-961151232/" rel="noopener noreferrer">
                    <Image
                        className={footer.link}
                        loader={imgLoader}
                        src="/f_linkedin.svg"
                        alt="LinkedIn"
                        title="LinkedIn"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
            <div className={footer.copy}>
                <span>&copy; {date} Matt Canterbury </span>
            </div>
        </footer>
    </>    
}

import Image from 'next/image'
import footer from '../src/styles/modules/Footer.module.scss'

export default function Footer() {

    const imgLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
    
    const date = new Date().getFullYear()

  return (
    <>
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
  )
}

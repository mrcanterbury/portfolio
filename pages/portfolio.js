import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/modules/Home.module.scss'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Canterbury - Portfolio</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1>Portfolio Page</h1>
          <p>
            This is the portfolio page.
          </p>
        </main>

    </div>
  )
}

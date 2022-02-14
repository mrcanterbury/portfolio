import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/modules/Home.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Canterbury - Contact Me</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1>Contact Page</h1>
          <p>
            This is the contact page.
          </p>
        </main>

    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../src/styles/modules/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Canterbury</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article>
          <h1 className={styles.title}>Under Construction</h1>
          <p className={styles.description}>
            My portfolio project is being developed at this time.
          </p>
        </article>
        </main>

    </div>
  )
}

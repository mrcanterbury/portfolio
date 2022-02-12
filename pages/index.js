import Head from 'next/head'
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
        <h1>Under Construction</h1>
        <p>
          My portfolio project is being developed at this time.
        </p>
      </main>

    </div>
  )
}

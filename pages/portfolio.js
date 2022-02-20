import Head from 'next/head'
import portfolio from '../src/styles/modules/Page.module.scss'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Matt Canterbury - Portfolio</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={portfolio.container}>
          <h1>Portfolio Page</h1>
          <p>
            This is the portfolio page.
          </p>
        </main>

    </>
  )
}

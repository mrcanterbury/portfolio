import Head from 'next/head'
import resume from '../src/styles/modules/Page.module.scss'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Matt Canterbury - Resume</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={resume.container}>
          <h1>Resume Page</h1>
          <p>
            This is the resume page.
          </p>
        </main>

    </>
  )
}

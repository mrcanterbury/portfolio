import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import contact from '../src/styles/modules/Page.module.scss'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Matt Canterbury - Contact Me</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={contact.container}>
          <div className={contact.fill}>
            <h1>Contact Page</h1>
            <p>
              This is the contact page.
            </p>
            <ContactForm />
          </div>
        </main>
    </>
  )
}

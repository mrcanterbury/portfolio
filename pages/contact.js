import Head from 'next/head'
import contact from '../src/styles/modules/Page.module.scss'
import { gql, GraphQLClient } from 'graphql-request'
import ContactModule from '../components/ContactModule'

export default function Contact(contactContent) {
  return (
    <>
      <Head>
        <title>Matt Canterbury - Contact Me</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={contact.container}>
          {contactContent.contactPage.contactRecord.map(module => <ContactModule details={module} key={module.id} />)}
      </main>
    </>
  )
}

const query = gql`
  query {
    contactPage {
      id
      contactRecord {
        ... on ContactRecord {
          __typename
          id
          title
          contactList {
            id
            icon {
              id
              url
              width
              height
              alt
            }
            userHandle
          }
        }
        ... on QuickMessageRecord {
          __typename
          id
          title
          subtitle
        }
      }
    }
  }
`
export async function getServerSideProps () {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    }
});
  
const contactContent = await graphQLClient.request(query);
  return {
    props: contactContent
  }
}

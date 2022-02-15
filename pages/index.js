import Head from 'next/head'
import styles from '../src/styles/modules/Home.module.scss'
import { gql, GraphQLClient } from 'graphql-request'
import HomeModule from '../components/HomeModule'

export default function Home(homeContent) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Canterbury</title>
        <meta name="description" content="Matt Canterbury's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {homeContent.homePage.homeRecord.map(module => <HomeModule details={module} key={module.id} />)}
        </div>
      </main>

    </div>
  )
}

const query = gql`
  query {
    homePage {
      id
      homeRecord {
        ... on ShowCaseRecord{
          id
          __typename
          showCaseGallery {
            id
            url
            width
            height
          }
        }
        ... on AboutMeRecord {
          id
          __typename
          title
          textOne
          textTwo
          textThree
          image {
            id
            width
            height
          }
        }
        ... on SkillSetRecord {
          id
          __typename
          skillGrid {
            id
            description
            image {
              id
              url
            }
          }
        }
        ... on ContactMeRecord {
          id
          __typename
          title
          subtitle
        }
      } 
    }
  }
`
export async function getStaticProps () {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    }
});
  
const homeContent = await graphQLClient.request(query);
  return {
    props: homeContent
  }
}
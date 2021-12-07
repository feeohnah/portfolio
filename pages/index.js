import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          A Canadian designer currently based in Berlin. I create everything
          from brands to apps for good-doing people and companies — those who
          positively impact society, culture or the environment. I’m also the
          co-founder and creator of{' '}
          <Link href="https://fondfolio.com/">
            <a>Fondfolio</a>
          </Link>{' '}
          — memory books for special occasions, and{' '}
          <Link href="https://pawzzles.cat/">
            <a>Pawzzles</a>
          </Link>{' '}
          — handmade puzzles for cats (using offcuts from the books). When I’m
          not working I enjoy being in nature, whether that’s camping, foraging,
          cycling, or sitting in a park. I also like to read, write, dance,
          cuddle with{' '}
          <Link href="https://www.instagram.com/minoupeenu/">
            <a>my cat</a>
          </Link>
          , and ferment — mostly water kefir and tempeh.
        </p>
        <p>
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

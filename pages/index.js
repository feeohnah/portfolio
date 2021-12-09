import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData,
    },
  }
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I’m a freelance designer with over 12 years of experience in brand and
          product design. I enjoy working with people and companies who are
          doing good things for society, culture or the environment. I’m also
          the co-founder and creator of{' '}
          <Link href="https://fondfolio.com/">
            <a>Fondfolio</a>
          </Link>{' '}
          — memory books for special occasions, and{' '}
          <Link href="https://pawzzles.cat/">
            <a>Pawzzles</a>
          </Link>{' '}
          — handmade puzzles for cats (using offcuts from the books). So I’m
          either designing, making books or cat toys :)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingSection}>Contact</h2>
        <div className={utilStyles.columns}>
          <ul className={`${utilStyles.list} ${utilStyles.column}`}>
            <li className={utilStyles.listItemSubdued}>Email</li>
            <li className={utilStyles.listItemSubdued}>LinkedIn</li>
          </ul>
          <ul className={`${utilStyles.list} ${utilStyles.column}`}>
            <li className={utilStyles.listItem}>
              <Link href={`mailto:mcdougaf@gmail.com`}>
                <a>mcdougaf@gmail.com</a>
              </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href={`https://www.linkedin.com/in/fimcd`}>
                <a>@fimcd</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingSection}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, description, roles, title }) => (
            <li
              className={`${utilStyles.heading1} ${utilStyles.listItem}`}
              key={id}
            >
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              :{` `}
              {description}
              <br />
              <h2
                className={`${utilStyles.heading2} ${utilStyles.listItemSubdued}`}
              >
                {roles}
              </h2>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

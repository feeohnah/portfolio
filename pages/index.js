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
          either designing, making books or building cat toys :) I’d rather be
          among trees.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingSection}>Contact</h2>
        <ul className={`${utilStyles.list} ${utilStyles.columns}`}>
          <li className={`${utilStyles.listItemSubdued} ${utilStyles.column}`}>
            Email
          </li>
          <li className={`${utilStyles.listItem} ${utilStyles.column}`}>
            <Link href={`mailto:mcdougaf@gmail.com`}>
              <a>mcdougaf@gmail.com</a>
            </Link>
          </li>
        </ul>
        <ul className={`${utilStyles.list} ${utilStyles.columns}`}>
          <li className={`${utilStyles.listItemSubdued} ${utilStyles.column}`}>
            LinkedIn
          </li>
          <li className={`${utilStyles.listItem} ${utilStyles.column}`}>
            <Link href={`https://www.linkedin.com/in/fimcd`}>
              <a>@fimcd</a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingSection}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, description, roles, title }) => (
            <li
              className={`${utilStyles.heading1} ${utilStyles.listItem} ${utilStyles.columns}`}
              key={id}
            >
              <div className={utilStyles.column}>
                <Link href={`/projects/${id}`}>
                  <a>{title}</a>
                </Link>
              </div>
              <div>
                <span className={utilStyles.projectDescription}>
                  {description}
                </span>
                <br />
                <h2
                  className={`${utilStyles.heading2} ${utilStyles.listItemSubdued} ${utilStyles.roles}`}
                >
                  <small className={`${utilStyles.lightText}`}>{roles}</small>
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

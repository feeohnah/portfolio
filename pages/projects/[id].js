import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article className={utilStyles.article}>
        <h1 className={utilStyles.heading1}>
          {projectData.title}: {projectData.dates}
        </h1>
        <div className={utilStyles.lightText}>
          <h2 className={utilStyles.heading2}>
            {projectData.description}
            <br />
            <small className={utilStyles.lightText}>{projectData.roles}</small>
          </h2>
        </div>
        <div
          className={utilStyles.articleContent}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </article>
    </Layout>
  )
}

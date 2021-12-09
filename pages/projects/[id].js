import Head from 'next/head'
import Date from '../../components/date'
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
      <article>
        <h1 className={utilStyles.heading1}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <h2 className={utilStyles.heading2}>
            {projectData.description}
            <br />
            {projectData.roles}
          </h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}

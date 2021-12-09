import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Fiona McDougall'
const role = 'Designer & Bookmaker'
const location = 'Berlin'
export const siteTitle = 'Selected work 2016 - 2021'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Selected design work of Fiona McDougall 2016 - 2021"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div>
              <h1 className={utilStyles.heading1}>{name}</h1>
              <h2 className={utilStyles.heading2}>
                {role}
                <br />
                {location}
              </h2>
            </div>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.profileImage}
              height={88}
              width={88}
              alt={name}
              layout="fixed"
            />
          </>
        ) : (
          <>
            <div>
              <h2 className={utilStyles.heading2}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
              <h3>
                {role}
                <br />
                {location}
              </h3>
            </div>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.profileImage}
                  height={40}
                  width={40}
                  alt={name}
                  layout="fixed"
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

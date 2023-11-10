import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Fiona McDougall'
const role = 'Designer & Bookmaker'
const location = 'Berlin, Toronto'
export const siteTitle = 'Selected work 2016 - 2023'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/FrancaBook.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FrancaBookItalic.woff"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Selected design work of Fiona McDougall 2016 - 2023"
        />
        <meta property="og:image" content={`/og.png`} />
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
              <h1 className={utilStyles.heading3}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h1>
              <h2 className={utilStyles.heading4}>
                {role}
                <br />
                {location}
              </h2>
            </div>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.profileImage}
                  height={48}
                  width={48}
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
            <a>← Back home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

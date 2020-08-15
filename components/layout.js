import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import content from "../content.json";

export const siteTitle = "Next.js Sample Website";
const name = "Monika Piotrowska";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Monika Piotrowska | Web Developer" />
        <meta property="og:image" content="/images/profile.jpeg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <article className={styles.column}>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </article>
        <article className={styles.column}>
          <nav className={styles.innerColumn}>
            <ul className={styles.socialLinks}>
              <li>
                <Link href={content.navigation.github}>
                  <a>Github</a>
                </Link>
              </li>
              <li>
                <Link href={content.navigation.linkedin}>
                  <a>Linkedin</a>
                </Link>
              </li>
              <li>
                <Link href={content.navigation.twitter}>
                  <a>Twitter</a>
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </header>
      <section className={styles.section}>
        {
          <>
            
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpeg"
                  className={`${styles.sectionImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>
                  {content.intro.heading}
                </a>
              </Link>
            </h2>
          </>
        }
      </section>
      <main>{children}</main>
    </div>
  );
}

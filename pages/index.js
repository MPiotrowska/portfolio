import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Repo from "../components/Repo";
import content from "../content.json";

export async function getStaticProps() {
  
  const url = "https://api.github.com/users/MPiotrowska/starred?per_page=10";
  const response = await fetch(url);
  const repos = await response.json();

//   fetch(url)
// .then(response => response.json())
// .then(data => console.log(data)) - not using async/await

  return {
    props: {
      repos: repos,
      content: content,
    },
    revalidate: 1,
  };
}

export default function Home({ repos, content }) {
  const year = new Date().getFullYear();

  return (
    <Layout>
      <Head>
        <title>Monika Piotrowska | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        style={{ maxWidth: "44rem", margin: "auto", padding: "0 25px" }}
        className={`${utilStyles.headingMd} grid`}
      >
        <p className="intro-paragraph">{content.profile}</p>
      </section>

      <main>
        <h2>Projects</h2>
        <div className="grid">
          {repos.map((repo) => {
            

            const repoExists = typeof content.repos[repo.id] !== 'undefined'
            const fallbackRepo = content.repos["0"]
            
            const repoDescription = repoExists &&  content.repos[repo.id].description || fallbackRepo.description;

            const repoDomain =
              repoExists &&  content.repos[repo.id].live_url || fallbackRepo.live_url;

            const repoTitle =
              (repo.id &&
                content &&
                content.repos &&
                repoExists &&  content.repos[repo.id].title) ||
                fallbackRepo.title;

            const tech =
              (repo.id && content && content.repos && repoExists &&  content.repos[repo.id].technologies) ||
              fallbackRepo.technologies;

            return (
              <Repo
                key={repo.id}
                name={repoTitle}
                url={repo.html_url}
                description={repoDescription}
                liveSite={repoDomain}
                technologies={tech}
              />
            );
          })}
        </div>
      </main>

      <footer>
        <p>&copy; Monika Piotrowska {year}</p>
      </footer>

      <style jsx>{`
        .intro-paragraph {
          font-size: 18px;
          text-align: center;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0 0 5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1200px;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}

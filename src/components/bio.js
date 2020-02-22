import { graphql, StaticQuery } from "gatsby"
import React from "react"

function Bio() {
  return (
    <>
      <StaticQuery
        query={bioQuery}
        render={data => {
          return (
            <div className="intro">
              <h1>Blake Wilson</h1>

              <p>Hi there, I'm Blake! I am a software engineer who enjoys building products. I'm using this blog to write about things that I either find interesting, or would like to reference in the future.</p>

              <p>If you have any questions or care to get in touch, you can contact me <a href="mailto:blake@blake.id">here.</a></p>
            </div>
          )
        }}
      />
      <style>{`
        .intro {
          // display: flex;
        }

        .intro h1 {
          margin-top: 0;
          line-height: 1;
        }

        .content {
          width: calc(75% - 1rem);
          margin-right: 1rem;
        }

        .media {
          width: 25%;
        }

        video {
          border-radius: 20px;
        }
      `}</style>
    </>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

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

              <p>
                Hi, I'm Blake. I am a software engineer who enjoys building
                products.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lorem quam, euismod ut lacus a, feugiat fringilla neque. Sed sed
                commodo lorem. Vestibulum facilisis bibendum bibendum. Ut
                sollicitudin mi id elementum ullamcorper. Morbi non elit
                imperdiet justo auctor porttitor
              </p>
            </div>
          )
        }}
      />
      <style jsx="true">{`
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

import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[
            `blog`,
            `javascript`,
            `react`,
            "video background pro",
            "video backgorund",
            "sunday code",
          ]}
        />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div
              style={{
                marginBottom: "2rem",
              }}
              key={node.fields.slug}
            >
              <h3
                style={{
                  marginBottom: `1rem`,
                  fontFamily: [
                    "SFMono-Regular",
                    "Consolas",
                    "Liberation Mono",
                    "Menlo",
                    "Courier",
                    "monospace",
                  ],
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: "none",
                    color: "#000",
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <h5
                style={{
                  fontWeight: "normal",
                  marginBottom: "1rem",
                  fontFamily: [
                    "SFMono-Regular",
                    "Consolas",
                    "Liberation Mono",
                    "Menlo",
                    "Courier",
                    "monospace",
                  ],
                }}
              >
                {node.frontmatter.date}
              </h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

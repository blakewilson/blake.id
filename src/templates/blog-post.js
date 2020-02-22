import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="article-container">
          <Link className="back-home" to="/">
            &larr;
          </Link>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <h1>{post.frontmatter.title}</h1>
          <p className="date">{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          {/* <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul> */}
        </div>
        <style jsx="true">{`
          .article-container {
            max-width: 38rem;
            margin-left: auto;
            margin-right: auto;
          }

          .date {
            color: hsla(0, 0%, 20%, 1);
          }

          @media (prefers-color-scheme: dark) {
            .date {
              color: hsla(0, 0%, 80%, 1);
            }
          }

          .article-container video {
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
            margin-bottom: 1rem;
          }

          .back-home {
            display: block;
            font-weight: bold;
            font-size: 1.5rem;
          }

          .back-home:before {
            content: normal;
          }
        `}</style>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

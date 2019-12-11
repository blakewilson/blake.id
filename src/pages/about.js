import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <p>
          Hi there, I'm Blake! I am a software developer who enjoys building
          products. I'm using this blog to write about things that I either find
          interesting, or would like to reference in the future.
        </p>
        <p>
          If you have any questions or care to get in touch, you can{" "}
          <a href="mailto:blake@blake.id">contact me here.</a>
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

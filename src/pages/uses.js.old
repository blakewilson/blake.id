import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Uses extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h2>My Setup</h2>
        <ul>
          <li>13" MacBook Pro 2015</li>
          <li>LG 34UM68-P UltraWide Monitor</li>
          <li>Bose QC35 Headphones</li>
          <li>Apple Magic Mouse 2</li>
          <li>Vortex 75% Cherry Mx-Blue Keyboard</li>
          <li>Herman Miller Aeron Chair with Posturefit (Size B)</li>
          <li>Herman Miller Everywhere Table (36"x72")</li>
          <li>Blue Yeti Microphone</li>
        </ul>

        <h2>Software I Use</h2>
        <ul>
          <li>
            <strong>Spotify</strong> for music
          </li>
          <li>
            <strong>Sketch</strong> for design
          </li>
          <li>
            <strong>VS Code</strong> for coding
          </li>
          <li>
            <strong>Firefix</strong> for browsing
          </li>
          <li>
            <strong>MAMP</strong> for WordPress development
          </li>
          <li>
            <strong>Xcode</strong> for IOS and MacOS development
          </li>
          <li>
            <strong>Terminal</strong> for bash
          </li>
          <li>
            <strong>Postman</strong> for API testing
          </li>
          <li>
            <strong>GitHub Desktop</strong> for git
          </li>
        </ul>
      </Layout>
    )
  }
}

export default Uses

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from "react"
import "./prism.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <main>
        {children}
        <style jsx global>{`
          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html {
            font-size: 20px;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            line-height: 1.6;
            letter-spacing: -0.9px;
            margin: 0;
          }

          @media (prefers-color-scheme: dark) {
            body {
              color: #fff;
              background-color: hsla(0, 0%, 5%, 1);
            }
          }

          a {
            color: inherit;
            text-decoration: none;
            border-bottom: 3px solid hsl(15, 89%, 65%);
          }

          video,
          img {
            max-width: 100%;
          }

          p.caption {
            text-align: center;
            font-style: italic;
          }

          main {
            max-width: 40rem;
            margin-left: auto;
            margin-right: auto;
            margin-top: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          @media(max-width: 720px) {
            h1 {
              font-size: 1.3rem;
            }
            
            h2 {
              font-size: 1.2rem;
            }

            h3 {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </main>
    )
  }
}

export default Layout

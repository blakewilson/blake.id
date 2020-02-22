import React from "react"
import "./prism.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <main>
        {children}
        <style jsx="true" global="true">{`
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
            position: relative;
            display: inline-block;
          }

          a:before {
            content: "";
            width: 100%;
            height: 3px;
            background-color: hsla(15, 89%, 90%, 1);
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
            transition: height 0.2s ease-in-out,
              background-color 0.2s ease-in-out;
          }

          @media (prefers-color-scheme: dark) {
            a:before {
              background-color: hsl(15, 89%, 65%);
            }
          }

          a:hover:before {
            height: 100%;
            background-color: hsl(15, 89%, 65%);
          }

          video,
          img {
            max-width: 100%;
          }

          p.caption {
            text-align: center;
            font-style: italic;
          }
        `}</style>

        <style jsx="true">{`
          main {
            // max-width: 48rem;
            max-width: 38rem;
            margin-left: auto;
            margin-right: auto;
            margin-top: 2rem;
          }
        `}</style>
      </main>
    )
  }
}

export default Layout

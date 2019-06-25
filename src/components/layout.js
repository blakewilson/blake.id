import { Link } from 'gatsby'
import React from 'react'
import './layout.css'
import './prism.css'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         marginBottom: `3rem`,
    //         marginTop: 0
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //           backgroundColor: '#000',
    //           color: '#fff',
    //           padding: '0.25rem .5rem'
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         marginTop: 0
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }

    header = (
      <h1
        style={{
          marginBottom: `3rem`,
          marginTop: 0,
          textAlign: 'center'
        }}
      >
        <Link
          className='brand'
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.25rem .5rem'
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `840px`,
          padding: `2rem`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout

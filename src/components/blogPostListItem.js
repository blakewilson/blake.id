import React from "react"
import { Link } from "gatsby"

const BlogPostItem = props => {
  const { slug, title, date } = props
  return (
    <div>
      <h3>
        <Link className="post-link" to={slug}>{title}</Link>
      </h3>
      <h5>{date}</h5>

      <style jsx>{`
        h3 {
          margin-bottom: 0.5rem;
        }

        h5 {
          margin-top: 0.5rem;
          font-weight: normal;
        }
      `}</style>
    </div>
  )
}

export default BlogPostItem

import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getSongNumberToString } from "../utils/utils"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Laulukirja`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <header>
          <h1 itemProp="headline" style={{ fontSize: 35, marginBottom: 5 }}>
            <span>{getSongNumberToString(post.frontmatter.title)}</span>.{" "}
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.melody ? (
            <h2 itemProp="melody" style={{ fontSize: 15, margin: 0 }}>
              Melodia: {post.frontmatter.melody}
            </h2>
          ) : (
            ""
          )}
          {post.frontmatter.credits ? (
            <h2
              itemProp="credits"
              style={{ fontSize: 15, margin: 0, marginBottom: 25 }}
            >
              Credits: {post.frontmatter.credits}
            </h2>
          ) : (
            ""
          )}
        </header>
        <hr />
        <section
          style={{
            whiteSpace: "pre",
            marginBottom: "15px",
            marginTop: "15px",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: "20px",
          }}
        >
          <li>
            <a href="/" class="previous">
              &laquo; Takaisin
            </a>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        melody
        credits
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

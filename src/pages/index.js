import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [songs, setSongs] = useState({
    filteredSongs: posts,
    query: undefined,
  })

  if (posts.length === 0) {
    return <Layout location={location} title={siteTitle}></Layout>
  }

  const handleInputChange = event => {
    const query = event.target.value

    const filteredSongs = posts.filter(song => {
      const { title } = song.frontmatter
      return title.toLowerCase().includes(query.toLowerCase())
    })

    setSongs({
      filteredSongs,
      query,
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <input
        className="search"
        aria-label="Search"
        type="text"
        id="header-search"
        placeholder="Hae sitsilaulua"
        name="s"
        onChange={handleInputChange}
      />
      <ul style={{ listStyle: `none` }}>
        {songs?.filteredSongs?.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Etusivu" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [], order: ASC }) {
      nodes {
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
`

import React, { useRef, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getSongNumberToString, orderSongs } from "../utils/utils"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let posts = data.allMarkdownRemark.nodes
  const ref = useRef(null)
  const sorted = orderSongs(posts)
  const [songs, setSongs] = useState({
    filteredSongs: sorted,
    query: undefined,
  })

  if (posts.length === 0) {
    return <Layout location={location} title={siteTitle}></Layout>
  }

  const handleInputChange = event => {
    const query = event.target.value
    const filteredSongs = sorted.filter(song => {
      const { title } = song.frontmatter
      return title.toLowerCase().includes(query.toLowerCase())
    })
    setSongs({
      filteredSongs,
      query,
    })
  }
  const handleClearClick = () => {
    ref.current.value = ""
    setSongs({
      filteredSongs: sorted,
      query: undefined,
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <a href="/säännöt" className="saannot">
        {" "}
        Säännöt{" "}
      </a>
      <div className="filterbar">
        <input
          className="search"
          aria-label="Search"
          type="text"
          id="header-search"
          placeholder="Hae sitsilaulua"
          name="s"
          onChange={handleInputChange}
          ref={ref}
          autoComplete="off"
        />
        <button className="clear" onClick={handleClearClick} title="clear">
          <svg
            className="svg-icon"
            fill="white"
            widht="30px"
            height="30 "
            viewBox="0 0 20 20"
          >
            <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
          </svg>
        </button>
      </div>
      <ul style={{ listStyle: `none` }}>
        {songs?.filteredSongs?.map(song => {
          const title = song.frontmatter.title || song.fields.slug

          return (
            <li key={song.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <header>
                  <Link
                    to={song.fields.slug}
                    itemProp="url"
                    style={{ textDecoration: "none" }}
                  >
                    <h2>
                      <span itemProp="headline">
                        {getSongNumberToString(title)} {title}
                      </span>
                    </h2>
                  </Link>
                </header>
              </article>
            </li>
          )
        })}
      </ul>
      <h2 style={{ textAlign: "center" }}>
        <a
          href="https://github.com/skripti-org/laulukirja"
          className="biisitoive"
        >
          <span itemProp="headline">Uusien laulujen ja säkeistöjen lisäys</span>
        </a>
      </h2>
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

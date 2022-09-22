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

  const handleInputChange = (event) => {
    
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
  }

  return (
    
    <Layout location={location} title={siteTitle} >
      <a href="/säännöt" className="saannot"> Säännöt </a>
      <input
        className="search"
        aria-label="Search"
        type="text"
        id="header-search"
        placeholder="Hae sitsilaulua"
        name="s"
        onChange={handleInputChange}
        ref={ref}
      />
        
      
      <button
        className="clear"
        onClick={handleClearClick}>
      </button>

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
                  <h2>
                    <Link to={song.fields.slug} itemProp="url">
                      <span itemProp="headline">
                        {getSongNumberToString(title)} {title}
                      </span>
                    </Link>
                  </h2>
                </header>
              </article>
            </li>
          )
        })}
      </ul>
      <h2 style={{"textAlign": "center"}}>
        <Link
          to="https://github.com/skripti-org/laulukirja"
          className="biisitoive"
        >
          <span itemProp="headline">Uusien laulujen lisäys </span>
        </Link>
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

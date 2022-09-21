// src/pages/index.js

import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
  <>
  
  <header>
      <h1 itemProp="headline" style={{ fontSize: 35, marginBottom: 5 }}>
        {data.markdownRemark.frontmatter.title}
      </h1>
    </header>
    
    <div
      style={{
        whiteSpace: "pre",
        marginBottom: "15px",
        marginTop: "15px",
      }}
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
  </>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {

    markdownRemark(fileAbsolutePath: { regex: "/säännöt.md/" }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
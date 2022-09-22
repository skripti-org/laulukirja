// src/pages/index.js
import Layout from "../components/layout"
import Seo from "../components/seo"
import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
  <Layout location={location} title={siteTitle} >
  <header>
      <h3 itemProp="headline" style={{ fontSize: 35, marginBottom: 5 }}>
        {data.markdownRemark.frontmatter.title}
      </h3>
    </header>
    <hr />
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
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site{
      siteMetadata{
        title
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/säännöt.md/" }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
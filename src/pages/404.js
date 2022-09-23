import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h2>404: HUUTISTA MENIT VÄÄRÄLLE SIVULLE :DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</h2>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Huutista" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

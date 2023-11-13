import * as React from "react"
import { graphql } from "gatsby"

import SongbookLayout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <SongbookLayout location={location} title={siteTitle}>
      <h2>
        404: Hupsis, taisit eksyä väärälle sivulle ;D
      </h2>
    </SongbookLayout>
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

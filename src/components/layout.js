import * as React from "react"
import { Link } from "gatsby"
import skriptiLogo from "../images/skripti_logo_trans.png"

const SongbookLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <Link style={{fontWeight: "800", fontSize: "18px"}} className="header-link-home" to="/">
      {title.toLowerCase()}
    </Link>
  )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <img className="skripti-logo" src={skriptiLogo} alt="logo"></img>
        {header}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default SongbookLayout

import * as React from "react"
import { Link } from "gatsby"
import skriptiLogo from "../images/skripti_logo_trans.png"
import LocalizedStrings from "react-localization"

const SongbookLayout = ({ location, title, children }) => {
  let strings = new LocalizedStrings({
    fi:{
      title: "Laulukirja",
    },
    en:{
      title: "Songbook",
    }
  })
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <Link style={{fontWeight: "800", fontSize: "18px"}} className="header-link-home" to="/">
      {strings.title.toLowerCase()}
    </Link>
  )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header" style={{margin: "auto", justifyContent: "center", alignItems: "center"}}>
        <img className="skripti-logo" src={skriptiLogo} alt="logo"></img>
        {header}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default SongbookLayout

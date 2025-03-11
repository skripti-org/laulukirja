import * as React from "react"
import { Link } from "gatsby"
import skriptiLogo from "../images/skripti_logo_trans.png"
import LocalizedStrings from "react-localization"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
  const [isLightMode, setIsLightMode] = React.useState(() => localStorage.getItem("theme") === "light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", isLightMode ? "light" : "dark");
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  let header = (
    <Link style={{fontWeight: "800", fontSize: "1rem"}} className="header-link-home" to="/">
      {strings.title.toLowerCase()}
    </Link>
  )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header" style={{margin: "auto", justifyContent: "center", alignItems: "center"}}>
      <button className="light-mode-toggle" onClick={() => setIsLightMode(!isLightMode)}>
        {isLightMode ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
        <img className="skripti-logo" src={skriptiLogo} alt="logo"></img>
        {header}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default SongbookLayout

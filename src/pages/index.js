import React, { useRef, useState } from "react"
import { Link, graphql } from "gatsby"
import Banner from "../components/Banner"
import SongbookLayout from "../components/layout"
import Seo from "../components/seo"
import { getSongNumberToString, orderSongs } from "../utils/utils"
import LocalizedStrings from "react-localization"
import starSelected from "../images/star_selected.svg";

const SongbookIndex = ({ data, location }) => {

  let strings = new LocalizedStrings({
    fi:{
      siteTitle: "Laulukirja",
      saannot: "Säännöt",
      hae: "Hae sitsilaulua",
      lisaa: "Uusien laulujen ja säkeistöjen lisäys"
    },
    en:{
      siteTitle:"Songbook",
      saannot:"Rules",
      hae:"Search for a song",
      lisaa:"Add a new song or a verse"
    }
  })

  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);


  let posts = data.allMarkdownRemark.nodes
  const ref = useRef(null)
  const sorted = orderSongs(posts)

  const [songs, setSongs] = useState({
    filteredSongs: sorted,
    query: undefined,
  })

  if (posts.length === 0) {
    return <SongbookLayout location={location} title={strings.siteTitle}></SongbookLayout>
  }

  const handleInputChange = event => {
    const query = event.target.value
    const filteredSongs = sorted.filter(song => {
      const { title, order } = song.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        String(order).startsWith(query)
      )
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

  const sortedSongs = [...songs.filteredSongs].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.frontmatter.title);
    const bIsFavorite = favorites.includes(b.frontmatter.title);
  
    if (aIsFavorite === bIsFavorite) {
      return 0; // Keep original order if both are favorites or both are not
    }
    return aIsFavorite ? -1 : 1; // Move favorites to the top
  });

  return (
    <SongbookLayout location={location} title={strings.siteTitle}> 
      <Banner/>

      <div className="index-page">
      <a href="/saannot" className="saannot">
        
        {" "}
        {strings.saannot}{" "}
      </a>
        <div className="filterbar">
          <input
            className="search"
            aria-label="Search"
            type="text"
            id="header-search"
            placeholder={strings.hae}
            name="s"
            onChange={handleInputChange}
            ref={ref}
            autoComplete="off"
          />
          {songs.query && (
            <button className="clear" onClick={handleClearClick} title="clear" style={{alignItems: "center", justifyContent: "center", padding: 10}}>
              <svg
                className="empty-icon"
                fill="white"
                widht="30px"
                height="30 "
                viewBox="0 0 20 20"
              >
                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
              </svg>
            </button>
          )}
        </div>
        <a
           href="https://github.com/skripti-org/laulukirja"
           className="biisitoive"
           style={{ display: "block", textAlign: "center", margin: "1rem 0" }}
         >
           <span itemProp="headline">{strings.lisaa}</span>
         </a>
        <ul style={{ listStyle: `none` }}>
            {sortedSongs.map((song) => {
              const title = song.frontmatter.title || song.fields.slug;
              const songNumber = getSongNumberToString(title); // Keep original song number
              return (
                <li key={song.fields.slug}>
                  <article className="post-list-item" itemScope itemType="https://schema.org/CreativeWork">
                    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                      <Link to={song.fields.slug} itemProp="url" style={{ textDecoration: "none", flex: "1" }}>
                        <h2 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {songNumber} {title}
                        </h2>
                      </Link>
                      {favorites.includes(title) && (
                        <img
                          src={starSelected}
                          alt="Favorited"
                          style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                        />
                      )}
                    </header>
                  </article>
                </li>
              );
            })}
          </ul>
        <h2 style={{ textAlign: "center" }}>
          <span style={{fontSize: "14px", marginRight: ".25rem"}}>© {new Date().getFullYear()} Skripti ry.</span>
        </h2>
      </div>
    </SongbookLayout>
  )
}

export default SongbookIndex

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
`;

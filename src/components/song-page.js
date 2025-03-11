import * as React from "react";
import { graphql } from "gatsby";
import SongbookLayout from "./layout";
import Seo from "./seo";
import { getSongNumberToString } from "../utils/utils";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const SCROLL_SPEEDS = [1, 1.5, 2];

const SongPage = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Laulukirja`;
  const [autoScroll, setAutoScroll] = React.useState(false);
  const [scrollSpeed, setScrollSpeed] = React.useState(1);
  const [showFloatingButton, setShowFloatingButton] = React.useState(false);
  let longPressTimer = null;

  React.useEffect(() => {
    const savedSpeed = localStorage.getItem("scrollSpeed");
    if (savedSpeed) {
      setScrollSpeed(parseFloat(savedSpeed));
    }
  }, []);

  const toggleAutoScroll = () => {
    setAutoScroll(!autoScroll);
  };

  const changeScrollSpeed = () => {
    const currentIndex = SCROLL_SPEEDS.indexOf(scrollSpeed);
    const newSpeed = SCROLL_SPEEDS[(currentIndex + 1) % SCROLL_SPEEDS.length];
    setScrollSpeed(newSpeed);
    localStorage.setItem("scrollSpeed", newSpeed);
  };

  React.useEffect(() => {
    let scrollInterval;
    if (autoScroll) {
      scrollInterval = setInterval(() => {
        window.scrollBy({ top: 1 * scrollSpeed ** 2
         });
      }, 60 / scrollSpeed);
    } else {
      clearInterval(scrollInterval);
    }
    return () => clearInterval(scrollInterval);
  }, [autoScroll, scrollSpeed]);

  React.useEffect(() => {
    if (document.body.clientHeight > window.innerHeight) {
      setShowFloatingButton(true);
    }
  }, []);

  return (
    <SongbookLayout location={location} title={siteTitle}>
      <article className="song-page" itemScope itemType="https://schema.org/CreativeWork">
        <header>
          <h1 itemProp="headline" style={{ marginBottom: 5 }}>
            <span style={{ fontSize: 36, marginBottom: 5 }}>{getSongNumberToString(post.frontmatter.title)}</span>{" "}
            <span style={{ fontSize: 24, marginBottom: 5 }}>{post.frontmatter.title} </span>
          </h1>
          {post.frontmatter.melody && (
            <h2 itemProp="melody" style={{ fontSize: 12, margin: 0, marginBottom: 5 }}>
              Melodia: {post.frontmatter.melody}
            </h2>
          )}
          {post.frontmatter.credits && (
            <h2 itemProp="credits" style={{ fontSize: 15, margin: 0, marginBottom: 25 }}>
              Credits: {post.frontmatter.credits}
            </h2>
          )}
        </header>
        <hr />
        <section style={{ whiteSpace: "pre", marginBottom: "15px", marginTop: "15px" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody" />
        <div className="skål">🥂 <em>Skål!</em> 🥂</div>
        <hr />
      </article>
      <nav className="song-page-nav">
        <ul style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `space-between`, listStyle: `none`, padding: 0, marginTop: "20px" }}>
          <li>
            <a href="/" className="previous">&laquo; Takaisin</a>
          </li>
        </ul>
      </nav>
      {showFloatingButton && (
      <div
        className="floating-button"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "9999",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "50%",
          width: "45px",
          height: "45px"
  
        }}
          onClick={toggleAutoScroll}
          onContextMenu={(e) => {
            e.preventDefault();
            changeScrollSpeed();
          }}

          onTouchStart={() => {
            longPressTimer = setTimeout(changeScrollSpeed, 500);
          }}
          onTouchEnd={() => {
            clearTimeout(longPressTimer);
          }}
        >
          <div>{autoScroll ? <PauseIcon style={{width: "100%"}}/> : <PlayArrowIcon style={{width: "100%"}}/>}</div>
            <h1 style={{
            position: "absolute",
            fontSize: "10px",
            color: "black",
            borderRadius: "2rem",
            background: "white",
            right: "5%",
            bottom: "35%",
            fontWeight: "bold",
            padding: ".15rem",
     
          }}>{scrollSpeed}x</h1>
          
        </div>
      )}
    </SongbookLayout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
  );
};

export default SongPage;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        melody
        credits
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
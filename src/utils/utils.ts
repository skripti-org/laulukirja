// utils.ts
import { RootObject } from "./interfaces";
import { graphql, useStaticQuery } from 'gatsby';

export const orderSongs = (songs: RootObject[]) => {
  const orderedSongs = getOrderedSongs();
  if (songs) {
    songs.forEach(
      (song) => (song.frontmatter.order = getSongNumber(song.frontmatter.title, orderedSongs))
    );
    songs.sort((a, b) => (b.frontmatter.order < a.frontmatter.order ? 1 : -1));
  }
  return songs;
};

export const getOrderedSongs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: ASC }) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map((node) => node.frontmatter.title);
};

export const getSongNumberToString = (songName: string): string => {
  const num = getSongNumber(songName, getOrderedSongs());
  return num !== Number.POSITIVE_INFINITY ? num.toString() + "." : "";
};

export const getSongNumber = (songName: string, orderedSongs: string[]): number => {
  const num = orderedSongs
    .map((song) => song.toLowerCase())
    .indexOf(songName?.toLowerCase());
  return num !== -1 ? num + 1 : Number.POSITIVE_INFINITY;
};

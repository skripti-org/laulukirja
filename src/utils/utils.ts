import { RootObject, Song } from "./interfaces"
import { songsInOrder } from "./songsInOrder"

export const orderSongs = (songs: RootObject[]) => {
  if (songs) {
    songs.forEach(
      song => (song.frontmatter.order = getSongNumber(song?.frontmatter?.title))
    )
    songs.sort((a, b) => (b.frontmatter.order < a.frontmatter.order ? 1 : -1))
  }
  return songs
}

export const getSongNumberToString = (songName: string): string => {
  const num = getSongNumber(songName)
  return num !== Number.POSITIVE_INFINITY ? num.toString() + "." : ""
}

export const getSongNumber = (songName: string): number => {
  const num = songsInOrder
    .map(song => song.toLowerCase())
    .indexOf(songName?.toLowerCase())
  return num !== -1 ? num + 1 : Number.POSITIVE_INFINITY
}

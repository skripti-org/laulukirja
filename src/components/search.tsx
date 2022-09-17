import React, { useState, useCallback } from "react"

const SearchBar = props => {
  const { songs } = props

  const query = ""

  const [state, setState] = useState({
    filteredSongs: [],
    query: query,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    const filteredSongs = songs.filter(
      (song: { frontmatter: { title: string } }) => {
        const { title } = song.frontmatter
        return title.toLowerCase().includes(query.toLowerCase())
      }
    )

    setState({
      query,
      filteredSongs,
    })

    console.log(filteredSongs)
  }

  //const { filteredData, query } = state
  //const hasSearchResults = filteredData && query !== emptyQuery
  //const posts = hasSearchResults ? filteredData :

  return (
    <form action="/" method="get" autoComplete="off">
      <input
        className="search"
        aria-label="Search"
        type="text"
        id="header-search"
        placeholder="Hae sitsilaulua"
        name="s"
        onChange={handleInputChange}
      />
    </form>
  )
}
export default SearchBar

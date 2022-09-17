import React, { useState } from "react"

const SearchBar = props => {
  const { songs } = props

  console.log(props)

  //const allSongs = data.allMarkDownremark.edges

  const query = ""

  const [state, setState] = useState({
    filteredData: [],
    query: query,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const filteredSongs = songs.filter(song => {
      const { title, date, desciption } = song.frontmatter
      return title.includes(query)
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

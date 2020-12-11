import React, { useState } from 'react'

const Search = () => {
  const [search, setSarch] = useState('')

  const handleChange = ({ target: { value } }) => {
    setSarch(value);
  }

  return (
    <div>
      <img src="" alt="Search image"/>
      <label htmlFor="searchInput">Search:</label>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        id="searchInput"
        onChange={handleChange}
        value={search}
        />

    <span>{search ? search : '...'}</span>
    </div>
  )
}

export default Search

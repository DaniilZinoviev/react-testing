import React, { useState, useEffect } from 'react'

// const getUser = () => Promise.resolve({ id: 1, name: 'testUser' });

const Search = () => {
  const [search, setSarch] = useState('')
  const [user, setUser] = useState('')

  // useEffect(() => {
  //   const updateUser = async () => {
  //     const user = await getUser();
  //     setUser(user);
  //   }
  //   updateUser();
  // }, [])

  const handleChange = ({ target: { value } }) => {
    setSarch(value);
  }

  return (
    <div>
      <img className="img-fluid" src="" alt="Search image"/>
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

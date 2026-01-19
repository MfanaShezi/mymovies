import React from 'react'

const Search = (movie) => {
  return (
    <div className="search">
        <div>
            <img src="./search.svg" alt="search-icon" />
            <input 
            type="text" 
            placeholder="Search for movies"
            value={movie.searchterm}
            onChange={(e) => movie.setsearchterm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
import React from 'react'
import './index.css'

const SearchItem = ({search,setsearch}) => {
  return (
    <main>
        <input type="text" className='search' 
        placeholder='searchItem'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        />
    </main>
  )
}

export default SearchItem
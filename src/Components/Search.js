import React, { useState} from "react";

function Search (props)  {

  const [search, setSearch] = useState('')

  return (
    <div className={'search'}>
      <label className={'searchLabel'}>Název</label>
      <input type="text" className={'searchInput'} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={() => props.setFilteredItem(search)}>Vyhledat</button>
    </div>
  )
}

export default Search;
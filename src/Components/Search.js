import React from "react";

function Search ({handleSearch})  {

  const onChange = (e) => {
    handleSearch(e.target.value);
  }

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={onChange}/>
    </div>
  )
}

export default Search;
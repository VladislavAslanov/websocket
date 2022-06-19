import React, {useEffect} from "react";

const SortButton = (props) => {
  
  return (
    <div className={'sort'}>
      <form action="" className={'sortForm'}>
        <select name="sort" id="sort-btn" className={'sortSelect button'}>
          <option value="rank">Rank</option>
          <option value="symbol">Zkratka</option>
          <option value="title">Název</option>
          <option value="price">Cena</option>
          <option value="changing">Změna 24h</option>
        </select>
        <select name="" id="" className="filter" className={'sortSelect button'}>
          <option value="">Sestupně</option>
          <option value="">Vzestupně</option>
        </select>
        <button id='sort-btn' type='button' className='sortButton button'>Seřadit</button>
      </form>
    </div>
  )
}

export default SortButton;
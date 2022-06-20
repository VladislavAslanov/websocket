import React, {useEffect, useState} from "react";

const SortButton = (props) => {
  const [selectedOrderBy, setSelectedOrderBy] = useState('asc')

  const onclick = () => {
    props.setAsc(-props.asc)
  }

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
        <select name="" id="" className="filter" className={'sortSelect button'} onChange={(e) => {
          setSelectedOrderBy(e.target.value);
        } } defaultValue={selectedOrderBy}>
          <option value="asc">Vzestupně</option>
          <option value="des">Sestupně</option>
        </select>
        <button id='sort-btn' type='button' className='sortButton button' onClick={onclick}>Seřadit</button>
      </form>
    </div>
  )
}

export default SortButton;
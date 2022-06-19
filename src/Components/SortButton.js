import React, {useEffect} from "react";

const SortButton = (props) => {



  //   const sortButton = document.getElementById('#sort-btn')
  //
  //   sortButton.addEventListener('click', (e) => {
  //     sortElements()
  //   })
  //
  //   function sortElements () {
  //     props.all = props.all.sort((a, b) => {
  //
  //     })
  //   }

    

  
  return (
    <div>
      <form action="">
        <select name="sort" id="sort-btn" className={'sortButton'}>
          <option value="rank">Rank</option>
          <option value="symbol">Zkratka</option>
          <option value="title">Název</option>
          <option value="price">Cena</option>
          <option value="changing">Změna 24h</option>
        </select>
        <button id='sort-btn' type='button' className='button'>Sort</button>
      </form>
    </div>
  )
}

export default SortButton;
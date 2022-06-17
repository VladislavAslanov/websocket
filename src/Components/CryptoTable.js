import React, {useEffect, useState} from 'react';
import List from "./List";

const CryptoTable = () => {

  const [resultState, setResultState] = useState([])

useEffect(() =>  {
  let item = {
    Rank: null,
    Symbol: null,
    Title: null,
    Price: null,
    Changing: null,
  };

  let itemList = [];
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = async function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let result = JSON.parse(this.responseText);
      for(let i = 0; i < result.data.length; i++) {
        item = {
          Rank: result.data[i].rank,
          Symbol: result.data[i].symbol,
          Title: result.data[i].name,
          Price: result.data[i].priceUsd,
          Changing: result.data[i].changePercent24Hr,
        }
        itemList.push(item);
      }
      setResultState(itemList)
    }
  }
  xhr.open("get", "https://api.coincap.io/v2/assets");
  xhr.send();
  }, [])


    return (
      <div className={'container'}>
        <h1 className={'heading'}>Tabulka kryptoměn</h1>
        <form action="">
          <select name="sort" id="sort" className={'sortButton'}>
            <option value="rank">Rank</option>
            <option value="symbol">Zkratka</option>
            <option value="title">Název</option>
            <option value="price">Cena</option>
            <option value="changing">Změna 24h</option>
          </select>
        </form>
        <div className={'table'}>
          <div className={'parameters'}>
            {resultState.sort((a, b) => +a.Rank < +b.Rank ? -1 : 1).map((res, index) => <List key={index} {...res} />)}
          </div>
        </div>
      </div>
    )
}

export default CryptoTable;
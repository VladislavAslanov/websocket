import React, {useEffect, useState} from 'react';
import List from "./List";
import SortButton from "./SortButton";
import Search from "./Search";

const CryptoTable = () => {

  const [resultState, setResultState] = useState([])
  const [filteredItem, setFilteredItem] = useState('')

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

  const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,dogecoin')

  const foo = []

  pricesWs.onmessage = function (msg) {
      let parsed = JSON.parse(msg.data);
    foo.push(parsed)
  }
  }, [])


    return (
      <div className={'container'}>
        <h1 className={'heading'}>Tabulka kryptoměn</h1>
        <div className="functions">
          <div className="sortComponent">
            <SortButton props={resultState}/>
          </div>
          <div className="searchComponent">
            <Search setFilteredItem={setFilteredItem}/>
            <h3 className={'filteredResults'}>Filtered results: {filteredItem}</h3>
          </div>
        </div>

        <div className={'table'}>
          <div className={'navbar'}>
            <div className={'navbar_item rank'}>Rank</div>
            <div className={'navbar_item symbol'}>Zkratka</div>
            <div className={'navbar_item title'}>Název</div>
            <div className={'navbar_item price'}>Cena</div>
            <div className={'navbar_item changing'}>Změna 24h</div>
          </div>
          <div className={'table_items'}>
            {resultState.filter((item) => filteredItem === "" || item.Title.includes(filteredItem))
              .map((res, index) => <List key={index} {...res} />)}
          </div>
        </div>
      </div>
    )
}

export default CryptoTable;
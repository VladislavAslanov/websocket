import React, {useEffect, useState} from 'react';
import List from "./List";
import SortButton from "./SortButton";
import Search from "./Search";

const CryptoTable = () => {

  const [resultState, setResultState] = useState([])
  const [filteredItem, setFilteredItem] = useState('')
  const [asc, setAsc] = useState(1)

  useEffect(() => {
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,ripple,cardano')

    pricesWs.onmessage = function (msg) {
      let parsed = JSON.parse(msg.data);
      if (resultState.length > 0) {
        const dynamicChange = resultState.map((item) => {
          if (parsed.bitcoin && item.Symbol === 'BTC') {
            item.Price = parsed.bitcoin;
          } if (parsed.ethereum && item.Symbol === "ETH") {
            item.Price = parsed.ethereum
          } if (parsed.tether && item.Symbol === "USDT") {
            item.Price = parsed.tether
          } if (parsed.ripple && item.Symbol === "XRP") {
            item.Price = parsed.ripple
          } if (parsed.cardano && item.Symbol === "ADA") {
            item.Price = parsed.cardano
          }
          return item;
        });
        setResultState(dynamicChange);
      }
    }
  })

useEffect(() =>  {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = async function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let itemList = [];
      let result = JSON.parse(this.responseText);
      for(let i = 0; i < result.data.length; i++) {
        const item = {
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
        <div className="functions">
          <div className="sortComponent">
            <SortButton setAsc={setAsc} asc={asc}/>
          </div>
          <div className="searchComponent">
            <Search setFilteredItem={setFilteredItem}/>
            <h3 className={'filteredResults'}>Filtrované výsledky:</h3>
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
            {resultState
              .filter((item) => filteredItem === "" || item.Title.toLocaleLowerCase().includes(filteredItem.toLocaleLowerCase()))
              .sort((a, b) => Number(a.Rank) < Number(b.Rank) ? -asc : asc)
              .map((res, index) => <List key={index} {...res} />)}
          </div>
        </div>
      </div>
    )
}

export default CryptoTable;
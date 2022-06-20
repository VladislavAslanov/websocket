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
          if (parsed.bitcoin && item.symbol === 'BTC') {
            item.price = parsed.bitcoin;
          } if (parsed.ethereum && item.symbol === "ETH") {
            item.price = parsed.ethereum
          } if (parsed.tether && item.symbol === "USDT") {
            item.price = parsed.tether
          } if (parsed.ripple && item.symbol === "XRP") {
            item.price = parsed.ripple
          } if (parsed.cardano && item.symbol === "ADA") {
            item.price = parsed.cardano
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
          rank: result.data[i].rank,
          symbol: result.data[i].symbol,
          title: result.data[i].name,
          price: result.data[i].priceUsd,
          changing: result.data[i].changePercent24Hr,
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
              .filter((item) => filteredItem === "" || item.title.toLocaleLowerCase().includes(filteredItem.toLocaleLowerCase()))
              .sort((a, b) => Number(a.rank) < Number(b.rank) ? -asc : asc)
              .map((res, index) => <List key={index} {...res} />)}
          </div>
        </div>
      </div>
    )
}

export default CryptoTable;
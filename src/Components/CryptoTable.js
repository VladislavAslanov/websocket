import React, { Component } from 'react';

class CryptoTable extends Component {
constructor() {
  super();

  this.state = {
    cryptoItem: {
      Rank: null,
      Symbol: null,
      Title: null,
      Price: null,
      Changing: null,
    }
  };
};

componentDidMount() {
  let item = {
    Rank: null,
    Symbol: null,
    Title: null,
    Price: null,
    Changing: null,
  };

  let itemList = [];

  const xhr = new XMLHttpRequest()

  xhr.open("get", "https://api.coincap.io/v2/assets")
  xhr.send();

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
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
        }
        }
      )

}

  render() {
    return (
      <div className={'container'}>
        <h1 className={'heading'}>Table of cryptocurrencies</h1>
        <form action="">
          <select name="sort" id="sort" className={'sort'}>
            <option value="rank">Rank</option>
            <option value="symbol">Zkratka</option>
            <option value="title">Název</option>
            <option value="price">Cena</option>
            <option value="changing">Změna 24h</option>
          </select>
        </form>
        <div className={'table'}>
          <div className={'parameters'}>
            <div className={'parameters_item'}>Rank</div>
            <div className={'parameters_item'}>Zkratka</div>
            <div className={'parameters_item'}>Název</div>
            <div className={'parameters_item'}>Cena</div>
            <div className={'parameters_item'}>Změna 24h</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CryptoTable;
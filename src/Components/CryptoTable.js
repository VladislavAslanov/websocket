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
  }

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
          }
         }
        }
      )
    }

  render() {
    return (
      <div>
        {this.state.cryptoItem.Rank}
      </div>
    )
  }
}

export default CryptoTable;
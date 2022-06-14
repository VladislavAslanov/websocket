import React, { Component } from 'react';

class CryptoTable extends Component {
constructor() {
  super();

  this.state = {};

};

componentDidMount() {
  const xhr = new XMLHttpRequest()

  xhr.open("get", "https://api.coincap.io/v2/assets")
  xhr.send();

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        let result = JSON.parse(this.responseText);
        console.log(result);
      }
    }
  )
}

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default CryptoTable;
import React, { Component } from 'react';
import './App.css';
import CryptoTable from "./Components/CryptoTable";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <CryptoTable />
      </div>
    )
  }

}

export default App;

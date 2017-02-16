import React, { Component } from 'react';
import axios from 'axios';
import ebay from '../../config.js';


class EbayApiSearch extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div>
      Ebay Search
      {resp}
      </div>
    )
  }
}

export default EbayApiSearch;
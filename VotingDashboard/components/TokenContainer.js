import TokenCard from './TokenCard';
import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect} from "react";

function TokenContainer()
{
  const [tokens, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/0xEfC78FC7D48B64958315949279bA181C2114abbD/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      console.log(res.data.data.items);
      setItems(res.data.data.items)
      //console.log(res.data);
      //setItems(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  });
    


    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <TokenCard/>
                <TokenCard/>
                <TokenCard/>
        </div>
    )
}

export default TokenContainer;
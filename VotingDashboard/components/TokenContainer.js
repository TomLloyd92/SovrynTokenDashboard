import TokenCard from './TokenCard';
import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect} from "react";




function TokenContainer()
{

  const SOV_TOKEN_ADDRESS = '0xEfC78FC7D48B64958315949279bA181C2114abbD'
  const DOC_TOKEN_ADDRESS = '0xe700691da7b9851f2f35f8b8182c69c53ccad9db'

  const [tokenSov, setSovToken] = useState([]);
  const [tokenDoC, setDoCToken] = useState([]);

  useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${SOV_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setSovToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  });

    useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${DOC_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setDoCToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  });
    


    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/*SOV TOKEN */}
                <TokenCard 
                  tokenName = {tokenSov['contract_name']}
                  tokenTicker = {tokenSov['contract_ticker_symbol']}
                  token_URL = {tokenSov['logo_url']}
                />
                <TokenCard 
                  tokenName = {tokenDoC['contract_name']}
                  tokenTicker = {tokenDoC['contract_ticker_symbol']}
                  token_URL = {tokenDoC['logo_url']}
                />
                <TokenCard/>
        </div>
    )
}

export default TokenContainer;
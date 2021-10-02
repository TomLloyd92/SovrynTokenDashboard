import TokenCard from './TokenCard';
import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect} from "react";




function TokenContainer()
{

  const SOV_TOKEN_ADDRESS =   '0xEfC78FC7D48B64958315949279bA181C2114abbD'
  const DOC_TOKEN_ADDRESS =   '0xe700691da7b9851f2f35f8b8182c69c53ccad9db'
  const WRBTC_TOKEN_ADDRESS = '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d'
  const USDT_TOKEN_ADDRESS =  '0xEf213441a85DF4d7acBdAe0Cf78004E1e486BB96'
  const BPRO_TOKEN_ADDRESS =  '0x440cd83c160de5c96ddb20246815ea44c7abbca8'			
  const ETHs_TOKEN_ADDRESS =  '0x1D931Bf8656d795E50eF6D639562C5bD8Ac2B78f'			
  const MOC_TOKEN_ADDRESS	=   '0x9ac7fe28967b30e3a4e6e03286d715b42b453d10'		
  const XUSD_TOKEN_ADDRESS=	  '0xb5999795BE0EbB5bAb23144AA5FD6A02D080299F'			
  const FISH_TOKEN_ADDRESS=	  '0x055A902303746382FBB7D18f6aE0df56eFDc5213'		
  const BNBs_TOKEN_ADDRESS=	  '0x6D9659bdF5b1A1dA217f7BbAf7dBAF8190E2e71B'			
  const RIF_TOKEN_ADDRESS =   '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5'

  const [tokenSov, setSovToken] = useState([]);
  const [tokenDoC, setDoCToken] = useState([]);
  const [tokenWRBTC, setWRBTCToken] = useState([]);
  const [tokenUSDT, setUSDTToken] = useState([]);
  const [tokenBPRO, setBPROToken] = useState([]);
  const [tokenETHs, setETHsToken] = useState([]);
  const [tokenMoC, setMoCToken] = useState([]);
    const [tokenXUSD, setXUSDToken] = useState([]);
  const [tokenFISH, setFISHToken] = useState([]);
    const [tokenBNBs, setBNBsToken] = useState([]);
  const [tokenRIF, setRIFToken] = useState([]);

  useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${SOV_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      console.log(res)
      setSovToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

    useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${DOC_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setDoCToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

  useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${WRBTC_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setWRBTCToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

    useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${USDT_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setUSDTToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

     useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${BPRO_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setBPROToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

       useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${ETHs_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setETHsToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

         useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${MOC_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setMoCToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

           useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${XUSD_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setXUSDToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

             useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${FISH_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setFISHToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

               useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${BNBs_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setBNBsToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );

                 useEffect(() => {
    axios.get(`https://api.covalenthq.com/v1/30/address/${RIF_TOKEN_ADDRESS}/balances_v2/?&key=ckey_b5b84bdb25ad4ff4acc7c59812e`)
    .then(res => {
      setRIFToken(res.data.data.items[0])
    })
    .catch(err => {
      console.log(err);
    })
  }, []
  );
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/*SOV TOKEN */}
                <TokenCard
                  tokenName = {tokenWRBTC['contract_name']}
                  tokenTicker = {tokenWRBTC['contract_ticker_symbol']}
                  token_URL = {tokenWRBTC['logo_url']}
                  contractAddress = {tokenWRBTC['contract_address']} 
                />
                <TokenCard 
                  tokenName = {tokenSov['contract_name']}
                  tokenTicker = {tokenSov['contract_ticker_symbol']}
                  token_URL = {tokenSov['logo_url']}
                  contractAddress = {tokenSov['contract_address']} 
                />
                <TokenCard 
                  tokenName = {tokenDoC['contract_name']}
                  tokenTicker = {tokenDoC['contract_ticker_symbol']}
                  token_URL = {tokenDoC['logo_url']}
                  contractAddress = {tokenDoC['contract_address']} 
                />
                <TokenCard
                tokenName = {tokenRIF['contract_name']}
                tokenTicker = {tokenRIF['contract_ticker_symbol']}
                token_URL = {tokenRIF['logo_url']}
                contractAddress = {tokenRIF['contract_address']} 
                />
               
                <TokenCard
                  tokenName = {tokenBPRO['contract_name']}
                  tokenTicker = {tokenBPRO['contract_ticker_symbol']}
                  token_URL = {tokenBPRO['logo_url']}
                  contractAddress = {tokenBPRO['contract_address']} 
                />
                <TokenCard
                tokenName = {tokenETHs['contract_name']}
                tokenTicker = {tokenETHs['contract_ticker_symbol']}
                token_URL = {tokenETHs['logo_url']}
                contractAddress = {tokenETHs['contract_address']} 
                />
                <TokenCard
                tokenName = {tokenMoC['contract_name']}
                tokenTicker = {tokenMoC['contract_ticker_symbol']}
                token_URL = {tokenMoC['logo_url']}
                contractAddress = {tokenMoC['contract_address']} 
                />
                <TokenCard
                tokenName = {tokenXUSD['contract_name']}
                tokenTicker = {tokenXUSD['contract_ticker_symbol']}
                token_URL = {tokenXUSD['logo_url']}
                contractAddress = {tokenXUSD['contract_address']} 
                />
                <TokenCard
                tokenName = {tokenFISH['contract_name']}
                tokenTicker = {tokenFISH['contract_ticker_symbol']}
                token_URL = {tokenFISH['logo_url']}
                contractAddress = {tokenFISH['contract_address']} 
                />
                <TokenCard
                tokenName = {tokenBNBs['contract_name']}
                tokenTicker = {tokenBNBs['contract_ticker_symbol']}
                token_URL = {tokenBNBs['logo_url']}
                contractAddress = {tokenBNBs['contract_address']} 
                />
       
                 <TokenCard
                  tokenName = {tokenUSDT['contract_name']}
                  tokenTicker = {tokenUSDT['contract_ticker_symbol']}
                  token_URL = {tokenUSDT['logo_url']}
                  contractAddress = {tokenUSDT['contract_address']} 
                />
        </div>
    )
}

export default TokenContainer;
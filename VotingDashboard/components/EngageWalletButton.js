
import { ethers } from "ethers";
import { Component } from "react";
import provider from './Provider';

class EngageWallet extends Component
{

    async engageWallet(){
        await provider.send("eth_requestAccounts", []);
    }

    render(){
        return(
            <button onClick={this.engageWallet} className="sovYellow inline-block text-sm px-4 py-2 hover:text-white mr-4  divide-y-2  rounded border border-yellow-400   border-{#be8f01} ">
                Engage Wallet                
            </button>
        )
    }
}

export default EngageWallet;


import { ethers } from "ethers";
import { Component } from "react";


class EngageWallet extends Component
{

    async engageWallet(){
        
        window.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        // Prompt user for account connections
        await window.provider.send("eth_requestAccounts", []);
        const signer = window.provider.getSigner();
        console.log("Account:", await signer.getAddress());
        const address = signer.getAddress();

        const balance = await provider.getBalance(address);
        const balanceInEth = ethers.utils.formatEther(balance);
        console.log(balanceInEth);
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

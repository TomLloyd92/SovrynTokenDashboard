import { ethers } from 'ethers';

let provider;
async function setup() {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {

            provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            // Prompt user for account connections
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            console.log("Account:", await signer.getAddress());
            const address = signer.getAddress();

            const balance = await provider.getBalance(address);
            const balanceInEth = ethers.utils.formatEther(balance);
            console.log(balanceInEth);
    }
    else{
        console.log("NO PROVIDER!")
    }
}
setup();

export default provider;
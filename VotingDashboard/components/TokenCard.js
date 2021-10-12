import { Component } from "react";
import Token3D from "./Token3D"
import { ethers } from "ethers";
class TokenCard extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            balance: 'CONNECT WALLET TO VIEW BALANCE',
        };
    }

    componentDidMount(){
        this.getBalance();
    }

    async updateBalance()
    {
        const BTC_NO_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
        if(this.props.tokenAddress === BTC_NO_ADDRESS)
        {
            var providerBTC = new ethers.providers.Web3Provider(window.ethereum, "any");
            var signBTC = providerBTC.getSigner();
            var addressBTC = signBTC.getAddress();
            var bignumberbalance = await providerBTC.getBalance(addressBTC);
            var number = ethers.utils.formatEther(bignumberbalance);
            var balanceBTC = number;
            //Code for getting wallet balance of native token (RBTC)
            //For now set to N/A (Fix later)
            this.setState({
            balance: balanceBTC
            })
            return;
        }
        //ERC ABI for balance
        const minABI = [  
        {    
            constant: true,
            inputs: [{ name: "_owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "balance", type: "uint256" }],
            type: "function",
        }];

        console.log(this.props.tokenAddress)
        console.log(minABI);
        console.log(provider);

        const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
        var tokenContract = new ethers.Contract( this.props.tokenAddress, minABI, provider);

        provider.getSigner().getAddress();
        const signer = provider.getSigner();
        const address = signer.getAddress();
        //console.log(address);
        var balance = await tokenContract.balanceOf(address);

        const balanceInCoinDenomincation = ethers.utils.formatEther(balance);
            this.setState({
                balance: balanceInCoinDenomincation
            })
    }
    async getBalance(){
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
            await provider.getSigner().getAddress();

            //Recuring call till API loads data
            if(typeof this.props.tokenAddress !== "undefined"){
                this.updateBalance();
            }
            else{
                setTimeout(this.getBalance, 250);
            }
        }
        catch(err){
            console.log(err);
        }

    }

render(){
    return(
        <div className="x overflow-hidden shadow-lg bg-black max-w-sm rounded-3xl content-center">
            {/*<img class="w-full" src={this.props.logoURL}  alt="Forest" /> */}

            <Token3D
             Token_URL = {this.props.token_URL}
             />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{this.props.tokenName}</div>
                <p className="sovYellow text-center">
                {this.props.tokenTicker} 
                </p>
                <p className="text-center font-extrabold">
                </p>
                <p className="text-center font-extrabold">
                    {this.state.balance}
                </p>
            </div>
        </div>
        )
    }
}

export default TokenCard;
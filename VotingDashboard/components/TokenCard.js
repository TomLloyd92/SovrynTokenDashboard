import { Component } from "react";
import Token3D from "./Token3D"
import { ethers } from "ethers";
import provider from "./Provider";
class TokenCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            balance: 'CONNECT WALLET TO VIEW BALANCE'
        };
    }

    componentDidMount(){
        this.getBalance();
    }

    async getBalance(){
        const signer = provider.getSigner();
        console.log("Account:", await signer.getAddress());
        const address = signer.getAddress();

        const balance = await provider.getBalance(address);
        const balanceInEth = ethers.utils.formatEther(balance);
        this.setState({
            balance: balanceInEth
        })

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
                <p>
                    {this.state.balance}
                </p>
            </div>
        </div>
        )
    }
}

export default TokenCard;
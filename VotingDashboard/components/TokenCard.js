import { Component } from "react";
import { render } from "react-dom";
import Token3D from "./Token3D"
import { ethers } from "ethers";


class TokenCard extends Component
{

    static async getInitialProps(props)
    {
        
    }

    getBalance(){
        return 0;
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
                    {this.props.balance}
                </p>
            </div>

        </div>
        )
    }
}

export default TokenCard;
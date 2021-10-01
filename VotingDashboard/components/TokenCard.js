import { Component } from "react";
import { render } from "react-dom";
import Token3D from "./Token3D"




class TokenCard extends Component
{

render(){
    return(
        <div className="x overflow-hidden shadow-lg bg-black max-w-sm rounded-3xl content-center">
            {/*<img class="w-full" src={this.props.logoURL}  alt="Forest" /> */}

            <Token3D
             Token_URL = {this.props.token_URL}
             />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{this.props.tokenName}</div>
                <p className="sovYellow">
                {this.props.tokenTicker}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
        </div>
        )
    }
}

export default TokenCard;
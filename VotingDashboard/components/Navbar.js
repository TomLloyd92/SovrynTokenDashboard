
import React, { Component } from 'react';
import EngageWallet from './EngageWalletButton';
import { ethers } from 'ethers';

class Navbar extends Component
{


  async getBalance(){
    console.log(typeof(window.provider()));

  }


  render()
  {
    return (
  <header >
    <div className='flex flex-col sm:flex-row  justify-between h-auto content-center'>
        <div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap" >
            <div>
            <img className="object-contain h-10 w-20" src="https://icodrops.com/wp-content/uploads/2021/02/Sovryn_cover.jpeg" />
            </div>
            <button className="inline-block text-sm px-4 py-2 hover:text-white mr-4  border divide-y-2  rounded border-white " onClick={this.getBalance} >
                RSK Tokens
            </button>
            <button className="inline-block text-sm px-4 py-2 hover:text-white mr-4  border rounded border-white">
                Voting Dashboard
            </button>
            <button className="inline-block text-sm px-4 py-2 hover:text-white mr-4  border rounded border-white">
                Proposals
            </button>
        </div>
        <EngageWallet/>
        </div>
    </header>

  )}
}

export default Navbar;

import React, { Component } from 'react';

class Navbar extends Component
{


  render()
  {
    return (
  <header className='flex flex-col sm:flex-row  justify-between h-auto content-center'>
        <div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap" >
            <div>
            <img className="object-contain h-10 w-20" src="https://icodrops.com/wp-content/uploads/2021/02/Sovryn_cover.jpeg" />
            </div>
            <a href="#responsive-header" className="inline-block text-sm px-4 py-2 hover:text-white mr-4  border divide-y-2  rounded border-white ">
                RSK Tokens
            </a>
            <a href="#responsive-header" className="inline-block text-sm px-4 py-2 hover:text-white mr-4  border rounded border-white">
                Voting Dashboard
            </a>
            <a href="#responsive-header" className="inline-block text-sm px-4 py-2 hover:text-white mr-4  border rounded border-white">
                Proposals
            </a>
        </div>
    </header>

  )}
}

export default Navbar;
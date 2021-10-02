
import React, { Component } from 'react';

class HeaderCard extends Component
{


  render()
  {
    return (
        <div className="max-w-sm rounded-3xl content-center  shadow-lg bg-black ">
            <div className="px-10 mx-auto text-center max-w-7xl">
                <h2 className="text-5xl font-bold ">
                    RSK Network Tokens
                </h2>
                <p className="sovYellow mt-3 text-lg ">All the tokens availible in the Sovryn ecosystem, in one place.</p>
                <div className="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2"></div>
            </div>
        </div>
  )}
}

export default HeaderCard;





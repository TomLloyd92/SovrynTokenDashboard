import React from 'react';
import Head from 'next/head'
import Navbar from './Navbar';

export default props =>
{
    return(
        <div>
        <Head>
          <title>Voting Dashboard</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Navbar/>
        {props.children}
        </div>
    );
};
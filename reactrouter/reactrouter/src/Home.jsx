import React from 'react'
import { Link } from 'react-router';


function Home (){
    return(
        <>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        <h1>Home page</h1>
        </>
    );
}
export default Home;
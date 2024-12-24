import React from 'react'
import { Link } from 'react-router';
    

function Contact (){
    return(
        <>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        <h1>Heyy this Contact page</h1>
        </>
    );
}
export default Contact;
import React from 'react'
import { Outlet } from 'react-router';


function Layout (){
    return(
        <>
       <Home/>
       <Outlet/>
       <Footer/>
        </>
    );
}
export default Layout;
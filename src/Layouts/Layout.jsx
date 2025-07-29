import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import PreFooter from '../components/preFooter';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <PreFooter/>
            <Footer/>
        </>
    )
}

export default Layout;
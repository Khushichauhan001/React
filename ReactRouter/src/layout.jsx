import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){   // it use this layout as a base 
    return (
        <>
        <Header />
       <Outlet />
        <Footer />
        </>
    )
}

export default Layout
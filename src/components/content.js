import React, { useState } from 'react';
import NavigationBar from './pages/navTabs';
import Header from './header';
import Footer from './pages/footer';
import Home from './pages/Home';


export default function Portfolio() { 
    const [ currentPage, setCurrentPage ] =useState('Home')
    const pageRender = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } 
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const pageChange = (page) => setCurrentPage(page);

    return ( 
        <>
        <Header />
        <NavigationBar currentPage={currentPage} pageChange={pageChange} />
        {pageRender()}
        <Footer />
        </>
    )
}
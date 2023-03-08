import React, { useState } from 'react';
import NavigationBar from './pages/navTabs';
import Header from './header';
import Footer from './pages/footer';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

export default function CreatePortfolio() { 
    const [ currentPage, setCurrentPage ] =useState('Home')
    const pageRender = () => {
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
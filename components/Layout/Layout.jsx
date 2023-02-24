import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Modal from '../Modal/Modal';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Modal />
        </>
    )
}

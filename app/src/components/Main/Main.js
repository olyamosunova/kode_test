import React from 'react';
import './Main.css';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Cards />
                </div>
            </main>
        </>
    );
};

export default Main;

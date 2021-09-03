import React from 'react';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <main>
                <Container>
                    <Cards />
                </Container>
            </main>
        </div>
    );
};

export default Main;

import React from 'react';
import './Main.css';
import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import CategoryScreen from '../CategoryScreen/CategoryScreen';

const Main = () => {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Link to="/logout">Logout</Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container>
                    <CategoryScreen />
                </Container>
            </main>
        </div>
    );
};

export default Main;

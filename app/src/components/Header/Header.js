import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Header = ({ isBackLink = false }) => {
    let history = useHistory();

    const handlerClickBack = () => {
        history.goBack();
    };

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    { isBackLink && (
                        <Nav className="me-auto">
                            <Nav.Link onClick={ handlerClickBack }>Back</Nav.Link>
                        </Nav>
                    ) }

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/logout">Logout</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

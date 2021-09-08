import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = ({ isBackLink = false }) => {
    let history = useHistory();

    const handlerClickBack = () => {
        history.goBack();
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    { isBackLink && <button type="button" onClick={ handlerClickBack }>&lt; Back</button> }

                    <Link className="ml-auto" to="/logout">Logout</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

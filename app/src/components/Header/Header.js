import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

const Header = ({ clickLogout, isBackLink = false }) => {
    const history = useHistory();

    const handlerClickBack = () => {
        history.goBack();
    };

    const handlerClickLogout = () => {
        localStorage.removeItem('pokemonAuthorization');
        clickLogout();

        history.push('/login');
    };

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__nav'>
                    { isBackLink && <button type='button' onClick={ handlerClickBack }>&lt; Back</button> }

                    <button className='ml-auto' onClick={ handlerClickLogout }>Logout</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

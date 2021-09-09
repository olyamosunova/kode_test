import React from 'react';
import img from './pokeball.png';
import './NotFoundPage.css';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='empty-page'>
            <div className='empty-page__status'>
                4
                <img src={ img } alt='pokeball 0' />
                4
            </div>


            <p className='empty-page__text'>Page Not Found!</p>

            <Link className='empty-page__back button' to='/'>Go to back</Link>
        </div>
    );
};

export default NotFoundPage;

import React from 'react';
import { Link } from 'react-router-dom';
import gif from './cry.gif';
import './ErrorBlock.css';

const ErrorBlock = ({ message, backUrl, handlerClickBack }) => {
    return (
        <div className='error-block'>
            <p>{ message }</p>

            <img src={ gif } alt='sticker' />

            <Link className='button' to={ backUrl } onClick={ handlerClickBack }>Go to back</Link>
        </div>
    );
};

export default ErrorBlock;

import React from 'react';
import gif from './cry.gif';
import './ErrorBlock.css';

const ErrorBlock = ({ message }) => {
    return (
        <div className="error-block">
            <p>{ message }</p>

            <img src={ gif } alt="sticker" />
        </div>
    );
};

export default ErrorBlock;

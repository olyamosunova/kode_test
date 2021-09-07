import React from 'react';
import './ErrorBlock.css';
import gif from './cry.gif';

const ErrorBlock = ({ message }) => {
    return (
        <div className="error-block">
            <p>{ message }</p>

            <img src={gif} alt="sticker" />
        </div>
    );
};

export default ErrorBlock;

import React from 'react';
import './ErrorBlock.css';

const ErrorBlock = ({ message }) => {
    return (
        <div className="error-block">
            <p>{ message }</p>

            <img src="/images/cry.gif" alt="sticker" />
        </div>
    );
};

export default ErrorBlock;

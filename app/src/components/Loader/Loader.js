import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.css';

const Loader = () => {
    return (
        <div className='loader'>
            <CircularProgress color='primary' />
        </div>
    );
};

export default Loader;

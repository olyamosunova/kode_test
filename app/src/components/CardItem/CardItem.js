import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './CardItem.css';

const CardItem = ({ className, card, handlerClickCard }) => {
    return (
        <div className={ cx(className, { 'card-item': true }) } tabIndex='0' onClick={ handlerClickCard } >
            <div className='card-item__image'>
                <img src={ card.images?.small } alt={ card.name } />
            </div>

            <div className='card-item__info'>
                <p>{ card.name }</p>
                <p> { card.artist }</p>
            </div>

            <div className='card-item__controls'>
                <Link
                    onClick={ (evt) => evt.stopPropagation() }
                    to={ `/cards/${ card.id }` }
                    className='card-item__button'
                >
                    Go to detail page
                </Link>
            </div>
        </div>
    );
};

export default CardItem;

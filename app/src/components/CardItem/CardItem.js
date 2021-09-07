import React from 'react';
import './CardItem.css';
import cx from 'classnames';
import {Link} from 'react-router-dom';

const CardItem = ({ className, card }) => {
    return (
        <div className={cx(className, {'card-item': true})}>
            <div className="card-item__image">
                <img src={card.images?.small} alt={card.name} />
            </div>

            <div className="card-item__info">
                <p>{card.name}</p>
                <p> {card.artist}</p>
            </div>

            <div className="card-item__controls">
                <Link to={`/cards/${card.id}`} className="card-item__button">
                    Go to detail page
                </Link>
            </div>
        </div>
    );
};

export default CardItem;

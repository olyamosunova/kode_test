import React from 'react';
import './CardItem.css';
import cx from 'classnames';
import {Link} from 'react-router-dom';

const CardItem = ({ className, card, handlerClickCard }) => {
    const handlerClickDetail = (evt) => {
        evt.stopPropagation();
    };

    return (
        <div className={cx(className, {'card-item': true})} tabIndex={0} onClick={ handlerClickCard } >
            <div className="card-item__image">
                <img src={card.images?.small} alt={card.name} />
            </div>

            <div className="card-item__info">
                <p>{card.name}</p>
                <p> {card.artist}</p>
            </div>

            <div className="card-item__controls">
                <Link onClick={ handlerClickDetail } to={`/cards/${card.id}`} className="card-item__button">
                    Go to detail page
                </Link>
            </div>
        </div>
    );
};

export default CardItem;

import React from 'react';
import './ModalCard.css';

const ModalCard = ({ card }) => {
    const { name, images } = card;

  return (
      <div className="modal-card">
          <div className="modal-card__header">
              <p className="modal-card__title">{name}</p>
              <button type="button" aria-label="close modal"></button>
          </div>
          <div className="modal-card__body">
              <img src={images.large} alt={name} />
          </div>
      </div>
  );
};

export default ModalCard;

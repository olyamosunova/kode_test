import React, {useEffect, useRef, useState} from 'react';
import './ModalCard.css';
import cx from 'classnames';

const ModalCard = ({ card, handlerCloseModal }) => {
    const { name, images } = card;

    const ModalWrapper = useRef();

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setModalShow(true);

        const handleClickOutside = (evt) => {
            if(ModalWrapper.current && !ModalWrapper.current.contains(evt.target)) {
                setModalShow(false);
                handlerCloseModal();
            }
        };

        document.addEventListener('click', handleClickOutside);
    }, []);

  return (
      <div className="modal-card">
          <div className={cx("modal-card__wrapper", {'modal-card__wrapper--show': modalShow})} ref={ ModalWrapper }>
              <div className="modal-card__header">
                  <p className="modal-card__title">{ name }</p>
                  <button className="modal-card__close" type="button" onClick={ handlerCloseModal }>
                      <span>Close modal</span>
                  </button>
              </div>
              <div className="modal-card__body">
                  <img src={ images.large } alt={ name } />
              </div>
          </div>
      </div>
  );
};

export default ModalCard;

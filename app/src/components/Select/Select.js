import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import './Select.css';

const Select = ({ title = 'Type', items = [], onSelect, activeItem = '' }) => {
    const [selectOpened, setSelectOpened] = useState(false);
    const [selectValue, setSelectValue] = useState(activeItem);
    const [filteredItems, setFilteredItems] = useState(items);
    const searchInputEl = useRef();
    const selectEl = useRef();

    useEffect(() => {
        const handleClickOutside = (evt) => {
            if(selectEl.current && !selectEl.current.contains(evt.target)) {
                setSelectOpened(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        setFilteredItems(items);
        searchInputEl.current.value = '';
    }, [selectOpened]);

    const handlerClickSelect = () => {
        setSelectOpened(!selectOpened);
    };

    const handlerClickItem = (value) => {
        if(selectValue === value) {
            setSelectValue('');
        } else {
            setSelectValue(value);
        }

        setSelectOpened(false);
        onSelect(selectValue === value ? '' : value);
    };

    const handlerClickSearch = (evt) => {
        const value = evt.target.value.toLowerCase();
        const newItems = items.filter(item => item.toLowerCase().indexOf(value) > -1);

        if (value !== '') {
            setFilteredItems(newItems);
        } else {
            setFilteredItems(items);
        }
    };

    return (
        <div ref={ selectEl } className={ cx('select my-5', { 'select--open': selectOpened }) }>
            <div className='select__header' onClick={ handlerClickSelect }>
                <span>{ selectValue ? selectValue : title }</span>

            </div>
            <div className='select__body'>
                <div className='select__search'>
                    <input
                        ref={ searchInputEl }
                        onInput={ (evt) => handlerClickSearch(evt) }
                        placeholder='Type something...'
                    />
                </div>
                <div className='select__list'>
                    { filteredItems.map(item => (
                        <a
                            key={item}
                            className={cx('select__item', {'select__item--active': item === selectValue})}
                            onClick={() => handlerClickItem(item)}
                        >{ item }</a>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Select;

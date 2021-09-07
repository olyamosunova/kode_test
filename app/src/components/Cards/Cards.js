import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import './Cards.css';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from "react-router-dom";
import CardItem from '../CardItem/CardItem';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonSubtypes, setPokemonSubtypes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chosenType, setChosenType] = useState('');
    const [chosenSubtype, setChosenSubtype] = useState('');
    const [filteredCards, setFilteredCards] = useState(cards);
    const [pageCount, setPageCount] = useState(0);
    const [activePage, setActivePage] = useState(1);
    let history = useHistory();

    useEffect(() => {
        axios.get('https://api.pokemontcg.io/v2/types')
            .then(response => {
                setPokemonTypes(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios.get('https://api.pokemontcg.io/v2/subtypes')
            .then(response => {
                setPokemonSubtypes(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios.get('https://api.pokemontcg.io/v2/cards', {
            params: {
                pageSize: 4
            }})
            .then(response => {
                setCards(response.data.data);
                setFilteredCards(response.data.data);
                setPageCount(Math.round(response.data.totalCount / response.data.pageSize));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setIsLoaded(true));
    }, []);

    useEffect(() => {
        if (chosenType && chosenSubtype) {
            setFilteredCards(cards.filter(card => card.types.includes(chosenType) && card.subtypes.includes(chosenSubtype)));
        } else if(chosenType) {
            setFilteredCards(cards.filter(card => card.types.includes(chosenType)));
        } else if(chosenSubtype) {
            setFilteredCards(cards.filter(card => card.subtypes.includes(chosenSubtype)));
        }

        console.log(filteredCards);

    }, [chosenType, chosenSubtype]);

    useEffect(() => {
        setIsLoaded(false);

        axios.get('https://api.pokemontcg.io/v2/cards', {
            params: {
                pageSize: 4,
                page: activePage
            }})
            .then(response => {
                setCards(response.data.data);
                setFilteredCards(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setIsLoaded(true));
    }, [activePage]);

    const handlerSelectType = (value) => {
        setChosenType(value);
    };

    const handlerSelectSubtype = (value) => {
        setChosenSubtype(value)
    };

    const handlerPageClick = (evt, page) => {
        evt.preventDefault();
        setActivePage(page);
    };

    return (
        <>
            {!isLoaded
                ?
                <Loader />
                :
                <div className="cards">
                    <div className="cards__filter">
                        { pokemonTypes.length && (
                            <Select title="Type" items={ pokemonTypes } onSelect={handlerSelectType} />
                        )}

                        { pokemonSubtypes.length && (
                            <Select title="Subtype" items={ pokemonSubtypes } onSelect={handlerSelectSubtype} />
                        )}
                    </div>

                    <div className="cards__wrapper">
                        <div className="cards__list">
                            {filteredCards.map(card => (
                                <CardItem className="cards__item" key={card.id} card={card} />
                            ))}
                        </div>

                        { pageCount > 1 && (
                            <Pagination page={activePage} onChange={handlerPageClick} count={ pageCount } showFirstButton showLastButton />
                        ) }
                    </div>
                </div>
            }
            </>
    );
};

export default Cards;

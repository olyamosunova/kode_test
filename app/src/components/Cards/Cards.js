import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import './Cards.css';
import Pagination from '@material-ui/lab/Pagination';
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
        let query = chosenType && chosenSubtype
            ? `types:${chosenType} subtypes:${chosenSubtype}`
            : chosenType ? `types:${chosenType}` :  chosenSubtype && `subtypes:${chosenSubtype}`;

        axios.get('https://api.pokemontcg.io/v2/cards', {
            params: {
                pageSize: 4,
                q: query
            }})
            .then(response => {
                setFilteredCards(response.data.data);
                setPageCount(Math.round(response.data.totalCount / response.data.pageSize));
                setActivePage(1);
            })
            .catch(() => {
                setFilteredCards([]);
                setPageCount(0);
                setActivePage(1);
            });

    }, [chosenType, chosenSubtype]);

    useEffect(() => {
        let query = chosenType && chosenSubtype
            ? `types:${chosenType} subtypes:${chosenSubtype}`
            : chosenType ? `types:${chosenType}` :  chosenSubtype && `subtypes:${chosenSubtype}`;

        axios.get('https://api.pokemontcg.io/v2/cards', {
            params: {
                pageSize: 4,
                page: activePage,
                q: query
            }})
            .then(response => {
                setCards(response.data.data);
                setFilteredCards(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
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
                            <Select title="Type" items={ pokemonTypes } onSelect={ handlerSelectType } />
                        )}

                        { pokemonSubtypes.length && (
                            <Select title="Subtype" items={ pokemonSubtypes } onSelect={ handlerSelectSubtype } />
                        )}
                    </div>

                    <div className="cards__wrapper">
                        <div className="cards__list">
                            { filteredCards.map(card => (
                                <CardItem className="cards__item" key={card.id} card={card} />
                            ))}

                            { !filteredCards.length && <p>Pokemons not found by this filter</p> }
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

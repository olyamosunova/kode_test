import React, {useEffect, useState} from 'react';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import './Cards.css';
import Pagination from '@material-ui/lab/Pagination';
import CardItem from '../CardItem/CardItem';
import ModalCard from '../ModalCard/ModalCard';
import { useHistory } from "react-router-dom";
import { getQueryForCards, setSearchParams } from '../../utils';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import pokemon from 'pokemontcgsdk';
import { POKEMON_API_KEY } from '../../const';

const Cards = () => {
    let history = useHistory();
    const query = new URLSearchParams(history.location.search);

    pokemon.configure({apiKey: POKEMON_API_KEY});

    const [cards, setCards] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonSubtypes, setPokemonSubtypes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chosenType, setChosenType] = useState(query.get('type') ?? '');
    const [chosenSubtype, setChosenSubtype] = useState(query.get('subtype') ?? '');
    const [filteredCards, setFilteredCards] = useState(cards);
    const [pageCount, setPageCount] = useState(0);
    const [activePage, setActivePage] = useState(+query.get('page') ?? 1);
    const [activeModal, setActiveModal] = useState(null);
    const [serverError, setServerError] = useState(false);

    useEffect(() => {

        pokemon.type.all()
            .then(types => {
                setPokemonTypes(types);
            })
            .catch(() => {
                setServerError(true);
            });

        pokemon.subtype.all()
            .then(subtypes => {
                setPokemonSubtypes(subtypes);
            })
            .catch(() => {
                setServerError(true);
            });

        pokemon.card.where({ pageSize: 4, page: 1 })
            .then(response => {
                console.log(response);
                setCards(response.data);
                setFilteredCards(response.data);
                setPageCount(Math.round(response.totalCount / response.pageSize));
            })
            .catch(() => {
                setServerError(true);
            })
            .finally(() => setIsLoaded(true));
    }, []);

    useEffect(() => {
        let query = getQueryForCards(chosenType, chosenSubtype);

        pokemon.card.where({ pageSize: 4, page: 1, q: query })
            .then(response => {
                setFilteredCards(response.data);
                setPageCount(Math.round(response.totalCount / response.pageSize));
                setActivePage(1);
            })
            .catch(() => {
                setServerError(true);
            });

        history.push(`/cards${ setSearchParams(chosenType, chosenSubtype, activePage) }`);
    }, [chosenType, chosenSubtype]);

    useEffect(() => {
        let query = getQueryForCards(chosenType, chosenSubtype);

        pokemon.card.where({ pageSize: 4, page: activePage, q: query })
            .then(response => {
                setCards(response.data);
                setFilteredCards(response.data);
            })
            .catch(() => {
                setServerError(true);
            });

        history.push(`/cards${ setSearchParams(chosenType, chosenSubtype, activePage) }`);
    }, [activePage]);

    const handlerSelectType = (value) => {
        setChosenType(value);
    };

    const handlerSelectSubtype = (value) => {
        setChosenSubtype(value);
    };

    const handlerPageClick = (evt, currentPage) => {
        evt.preventDefault();
        setActivePage(currentPage);
    };

    return (
        <>
            {!isLoaded
                ?
                <Loader />
                :

                <>
                { serverError
                    ? <ErrorBlock message="Не удалось загрузить карточки. Попробуйте перезагрузить страницу." />
                    :
                    <div className="cards">
                        <div className="cards__filter">
                            { pokemonTypes.length && (
                                <Select title="Type" items={ pokemonTypes } onSelect={ handlerSelectType } activeItem={ chosenType } />
                            )}

                            { pokemonSubtypes.length && (
                                <Select title="Subtype" items={ pokemonSubtypes } onSelect={ handlerSelectSubtype } activeItem={ chosenSubtype } />
                            )}
                        </div>

                        <div className="cards__wrapper">
                            <div className="cards__list">
                                { filteredCards.map(card => (
                                    <CardItem
                                        className="cards__item"
                                        key={card.id}
                                        card={card}
                                        handlerClickCard={ () => setActiveModal(card) }
                                    />
                                ))}

                                { !filteredCards.length && <p>Pokemons not found by this filter</p> }
                            </div>

                            { pageCount > 1 && (
                                <Pagination
                                    page={ activePage }
                                    onChange={ handlerPageClick }
                                    count={ pageCount }
                                    showFirstButton showLastButton
                                />
                            ) }
                        </div>
                    </div>

                }
                </>

            }

            { activeModal && <ModalCard card={ activeModal } handlerCloseModal={ () => setActiveModal(null) } /> }
            </>
    );
};

export default Cards;

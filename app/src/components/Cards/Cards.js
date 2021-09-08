import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import pokemon from 'pokemontcgsdk';
import cx from 'classnames';
import Pagination from '@material-ui/lab/Pagination';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import CardItem from '../CardItem/CardItem';
import ModalCard from '../ModalCard/ModalCard';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import { getQueryForCards, setSearchParams } from '../../utils';
import { POKEMON_API_KEY } from '../../const';
import './Cards.css';

const Cards = () => {
    let history = useHistory();
    const query = new URLSearchParams(history.location.search);

    pokemon.configure({ apiKey: POKEMON_API_KEY });

    const [cards, setCards] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonSubtypes, setPokemonSubtypes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chosenType, setChosenType] = useState(query.get('type') ?? '');
    const [chosenSubtype, setChosenSubtype] = useState(query.get('subtype') ?? '');
    const [pageCount, setPageCount] = useState(0);
    const [activePage, setActivePage] = useState(query.get('page') ? +query.get('page') : 1);
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
                setCards(response.data);
                setPageCount(Math.round(response.totalCount / response.pageSize));
            })
            .catch(() => {
                setServerError(true);
            })
            .finally(() => setIsLoaded(true));
    }, []);

    useEffect(() => {
        let query = getQueryForCards(chosenType, chosenSubtype);
        setIsLoaded(false);

        pokemon.card.where({ pageSize: 4, page: 1, q: query })
            .then(response => {
                setCards(response.data);
                setPageCount(Math.round(response.totalCount / response.pageSize));
                setActivePage(1);
            })
            .catch(() => {
                setServerError(true);
            })
            .finally(() => setIsLoaded(true));

        history.push(`/cards${ setSearchParams(chosenType, chosenSubtype, activePage) }`);
    }, [chosenType, chosenSubtype]);

    useEffect(() => {
        let query = getQueryForCards(chosenType, chosenSubtype);
        setIsLoaded(false);

        pokemon.card.where({ pageSize: 4, page: activePage, q: query })
            .then(response => {
                setCards(response.data);
            })
            .catch(() => {
                setServerError(true);
            })
            .finally(() => setIsLoaded(true));

        history.push(`/cards${ setSearchParams(chosenType, chosenSubtype, activePage) }`);
    }, [activePage]);

    const handlerPageClick = (evt, currentPage) => {
        evt.preventDefault();
        setActivePage(currentPage);
    };

    return (
        <>
            <Header />
            <main className={ cx({ 'hidden': activeModal }) }>
                <div className="container">
                    <>
                        { serverError
                            ? <ErrorBlock
                                message="Не удалось загрузить карточки. Попробуйте перезагрузить страницу."
                            />
                            :
                            <div className="cards">
                                <div className="cards__filter">
                                    <Select
                                        title="Type"
                                        items={ pokemonTypes }
                                        onSelect={ (value) => setChosenType(value) }
                                        activeItem={ chosenType }
                                    />

                                    <Select
                                        title="Subtype"
                                        items={ pokemonSubtypes }
                                        onSelect={ (value) => setChosenSubtype(value) }
                                        activeItem={ chosenSubtype }
                                    />
                                </div>

                                <div className="cards__wrapper">
                                    { !isLoaded
                                        ?  <Loader />
                                        :
                                        <>
                                            <div className="cards__list">
                                                { cards.map(card => (
                                                    <CardItem
                                                        className="cards__item"
                                                        key={ card.id }
                                                        card={ card }
                                                        handlerClickCard={ () => setActiveModal(card) }
                                                    />
                                                ))}

                                                { !cards.length && <p>Pokemons not found by this filter</p> }
                                            </div>

                                            { pageCount > 1 && (
                                                <Pagination
                                                    page={ activePage }
                                                    onChange={ handlerPageClick }
                                                    count={ pageCount }
                                                    showFirstButton showLastButton
                                                />
                                            ) }
                                        </>
                                    }
                                </div>
                            </div>
                        }
                    </>
                </div>

                { activeModal && (
                    <ModalCard card={ activeModal } handlerCloseModal={ () => setActiveModal(null) } />
                ) }
            </main>
        </>
    );
};

export default Cards;

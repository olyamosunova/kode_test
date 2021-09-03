import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Pagination} from 'react-bootstrap';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import {Link} from 'react-router-dom';
import './Cards.css';

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
                // handle success
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });

        axios.get('https://api.pokemontcg.io/v2/subtypes')
            .then(response => {
                setPokemonSubtypes(response.data.data);
                // handle success
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });

        axios.get('https://api.pokemontcg.io/v2/cards', {
            params: {
                pageSize: 8
            }})
            .then(response => {
                setCards(response.data.data);
                setFilteredCards(response.data.data);
                setPageCount(Math.round(response.data.totalCount / response.data.pageSize));
                // handle success
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
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
                pageSize: 8,
                page: activePage
            }})
            .then(response => {
                setCards(response.data.data);
                setFilteredCards(response.data.data);
                // handle success
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => setIsLoaded(true));
    }, [activePage]);


    const handlerSelectType = (value) => {
        setChosenType(value);
    };

    const handlerSelectSubtype = (value) => {
        setChosenSubtype(value)
    };

    const handlerPageClick = (page) => {
        setActivePage(page);
    };

    return (
        <div>
            {!isLoaded
                ?
                <Loader />
                :
                <Row>
                    <Col lg={3} className="px-4 py-5">
                        { pokemonTypes.length && (
                            <Select title="Type" items={ pokemonTypes } onSelect={handlerSelectType} />
                        )}

                        { pokemonSubtypes.length && (
                            <Select title="Subtype" items={ pokemonSubtypes } onSelect={handlerSelectSubtype} />
                        )}
                    </Col>
                    <Col lg={9} className="p-5">
                        <Row>
                            {filteredCards.map(card => (
                                <Col lg={6} key={card.id} className="py-3">
                                    <Card>
                                        <Link to={`/cards/${card.id}`} className="card__link">
                                        <Card.Img variant="top" src={card.images.large} />
                                        <Card.Body>
                                            <Card.Title>{card.name}</Card.Title>
                                            <Card.Text>{card.artist}</Card.Text>
                                        </Card.Body>
                                        </Link>
                                    </Card>


                                </Col>
                            ))}
                        </Row>

                        { pageCount > 1 && (
                            <Pagination>
                                {[...Array.from({length: pageCount}, (_, i) => i + 1)].map(page => (
                                    <Pagination.Item key={page} active={page === activePage} onClick={() => handlerPageClick(page)}>
                                        {page}
                                    </Pagination.Item>
                                ))}
                            </Pagination>
                        ) }
                    </Col>
                </Row>
            }

        </div>
    );
};

export default Cards;

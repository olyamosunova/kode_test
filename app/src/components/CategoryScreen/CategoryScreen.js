import React, {useEffect, useState} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';

const CategoryScreen = () => {
    const [cards, setCards] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonSubtypes, setPokemonSubtypes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chosenType, setChosenType] = useState('');
    const [chosenSubtype, setChosenSubtype] = useState('');
    const [filteredCards, setFilteredCards] = useState(cards);

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

        axios.get('https://api.pokemontcg.io/v2/cards')
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


    const handlerSelectType = (value) => {
        setChosenType(value);
    };

    const handlerSelectSubtype = (value) => {
        setChosenSubtype(value)
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
                                        <Card.Img variant="top" src={card.images.large} />
                                        <Card.Body>
                                            <Card.Title>{card.name}</Card.Title>
                                            <Card.Text>{card.artist}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            }

        </div>
    );
};

export default CategoryScreen;

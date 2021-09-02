import React, {useEffect, useState} from 'react';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../Loader/Loader';

const CategoryScreen = () => {
    const [cards, setCards] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://api.pokemontcg.io/v2/cards')
            .then(response => {
                setCards(response.data.data);
                // handle success
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => setIsLoaded(true));
    }, []);

    useEffect(() => console.log(cards), [cards]);

    return (
        <div>
            {!isLoaded
                ?
                <Loader />
                :
                <Row>
                    <Col lg={4}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Type
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Subtype
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {cards.map(card => (
                                <Col lg={6} key={card.id}>
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

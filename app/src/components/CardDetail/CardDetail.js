import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardDetail.css';
import Loader from '../Loader/Loader';

const CardDetail = () => {
    let { cardId } = useParams();
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`https://api.pokemontcg.io/v2/cards/${cardId}`)
            .then(response => {
                setData(response.data.data);
                setIsLoaded(true);
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <div>
            <Header isBackLink={ true } />
            <main>
                <Container>
                    <div className="card-detail py-5">

                        { isLoaded ? (
                            <Row>
                                <Col lg={6}>
                                    <div className="card-detail__image">
                                        <img src={data.images?.large} alt={data.name} />
                                    </div>

                                    <p className="card-detail__description">{data.flavorText}</p>
                                </Col>
                                <Col lg={6}>
                                    <div className="card-detail__info">
                                        <p>Pokemon name: <b>{data.name}</b></p>
                                        <p>Supertype: <b>{data.supertype}</b></p>
                                        <p>Types: <b>{data.types.join(', ')}</b></p>
                                        <p>Subtypes: <b>{data.subtypes.join(', ')}</b></p>
                                    </div>

                                    <div className="card-detail__info">
                                        { data.attacks.map(item => <p key={item.name}>Attack <b>{item.name}</b></p>) }
                                    </div>
                                </Col>
                            </Row>
                        ) : <Loader /> }

                    </div>
                </Container>
            </main>
        </div>
    );
};

export default CardDetail;

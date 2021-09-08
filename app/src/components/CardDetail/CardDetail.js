import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pokemon from 'pokemontcgsdk';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import { POKEMON_API_KEY } from '../../const';
import './CardDetail.css';

const CardDetail = () => {
    let { cardId } = useParams();
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [serverError, setServerError] = useState(false);

    pokemon.configure({ apiKey: POKEMON_API_KEY });

    useEffect(() => {
        pokemon.card.find(cardId)
            .then(card => {
                setData(card);
            })
            .catch(() => {
                setServerError(true);
            })
            .finally(() => {
                setIsLoaded(true);
            });
    }, [cardId]);

    return (
        <>
            <Header isBackLink={ true } />
                { !isLoaded
                    ?
                    <Loader />
                    :
                    <>
                        { serverError
                            ? <ErrorBlock
                                message="Не удалось загрузить детальную информацию. Попробуйте перезагрузить страницу."
                            />
                            :
                            <main>
                                <div className="container">
                                    <div className="card-detail">
                                        <p className="card-detail__title">{ data.name }</p>

                                        <div className="card-detail__block">
                                            <div className="card-detail__image">
                                                <img src={ data.images?.large } alt={ data.name } />
                                            </div>
                                        </div>


                                        <div className="card-detail__block">
                                            <div className="card-detail__info">
                                                <p>Pokemon name: <b>{ data.name }</b></p>
                                                <p>Supertype: <b>{ data.supertype }</b></p>
                                                <p>Types: <b>{ data.types?.join(', ') }</b></p>
                                                <p>Subtypes: <b>{ data.subtypes?.join(', ') }</b></p>
                                            </div>

                                            { data.attacks?.length && (
                                                <div className="card-detail__info">
                                                    <ul>
                                                        { data.attacks?.map(item => (
                                                            <li key={ item.name }><b>{ item.name }</b></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <p className="card-detail__description">{ data.flavorText }</p>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        }
                    </>
                }
        </>
    );
};

export default CardDetail;

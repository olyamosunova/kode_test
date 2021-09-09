import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Authorization from '../Authorization/Authorization';
import CardDetail from '../CardDetail/CardDetail';
import Cards from '../Cards/Cards';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

const App = () => {
    const isAuthorizedLocal = localStorage.getItem('pokemonAuthorization');
    const [isAuthorized, setIsAuthorized] = useState(isAuthorizedLocal);
    const [serverError, setServerError] = useState(null);

    const loginHandler = ({ login, password }) => login === 'kode@kode.ru' && password === 'Enk0deng';

    const checkCode = async () => {
        let code = null;

        const OTR = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: '123456' });
                // reject('Server error');
            }, 250);
        });

        await OTR.then(response => {
            code = response.data;
            setServerError(null);
        })
            .catch(err => {
                console.error(err);
                setServerError(err);
            });

        return code;
    };

    const smsCodeHandler = async (login, code) => {
        const getCode = await checkCode(code);

        if (getCode === code) {
            localStorage.setItem('pokemonAuthorization', login);
            setIsAuthorized(login);
            return true;
        }

        return false;
    };

    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => {
                            return !isAuthorized ? <Redirect to='/login' /> : <Redirect to='/cards' />;
                        }}
                    />
                    <Route
                        exact
                        path='/login'
                        render={() => {
                            return !isAuthorized
                                ? <Authorization
                                    onLoginFormSubmit={ loginHandler }
                                    onCodeFormSubmit={ smsCodeHandler }
                                    serverError={ serverError }
                                />
                                : <Redirect to='/cards' />;
                        }}
                    />
                    <Route
                        exact
                        path='/cards'
                        render={() => {
                            return !isAuthorized
                                ? <Redirect to='/login' />
                                : <Cards handlerClickLogout={ () => setIsAuthorized(null) } />;
                        }}
                    />
                    <Route
                        exact
                        path='/cards/:cardId'
                        render={() => {
                            return !isAuthorized
                                ? <Redirect to='/login' />
                                : <CardDetail handlerClickLogout={ () => setIsAuthorized(null) } />;
                        }}
                    />
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;

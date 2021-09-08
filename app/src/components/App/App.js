import React, {useState} from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Authorization from '../Authorization/Authorization';
import CardDetail from '../CardDetail/CardDetail';
import Cards from '../Cards/Cards';
import { AuthorizationStatus } from '../../const';
import './App.css';

const App = () => {
    const [authorizationStatus, setAuthorizationStatus] = useState(
        localStorage.getItem('pokemonAuthorization') ? AuthorizationStatus.AUTH : AuthorizationStatus.NO_AUTH
    );

    const [serverError, setServerError] = useState(null);

    const loginHandler = ({ login, password }) => {
        return login === 'kode@kode.ru' && password === 'Enk0deng';
    };

    const checkCode = async () => {
        let code = null;

        let OTR = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: '123456' });
                // reject("Server error");
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
        let getCode = await checkCode(code);

        if (getCode === code) {
            localStorage.setItem('pokemonAuthorization', login);
            setAuthorizationStatus(AuthorizationStatus.AUTH);
            return true;
        }

        return false;
    };

    const renderLogoutPage = () => {
        localStorage.removeItem('pokemonAuthorization');
        setAuthorizationStatus(AuthorizationStatus.NO_AUTH);

        return <Redirect to='/' />;
    };

    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH
                                ? <Redirect to="/login" />
                                : <Redirect to="/cards" />;
                        }}
                    />
                    <Route
                        exact
                        path='/login'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH
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
                        path='/logout'
                        render={ renderLogoutPage }
                    />
                    <Route
                        exact
                        path='/cards'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH
                                ? <Redirect to='/login' />
                                : <Cards />;
                        }}
                    />
                    <Route
                        exact
                        path='/cards/:cardId'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH
                                ? <Redirect to='/login' />
                                : <CardDetail />;
                        }}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
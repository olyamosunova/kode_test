import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Auth from '../Auth/Auth';
import { AuthorizationStatus } from '../../const';
import Main from '../Main/Main';
import CardDetail from '../CardDetail/CardDetail';

const App = () => {
    // const [authorizationStatus, setAuthorizationStatus] = useState(
    //     AuthorizationStatus.NO_AUTH
    // );
    const [authorizationStatus, setAuthorizationStatus] = useState(
        AuthorizationStatus.AUTH
    );

    const loginHandler = ({ login, password }) => {
        if (login.value === 'kode@kode.ru' && password.value === 'Enk0deng') {
            return true;
        }
        return 'Неверный логин или пароль.';
    };

    const smsCodeHandler = (code) => {
        if (code === '123456') {
            setAuthorizationStatus(AuthorizationStatus.AUTH);
            return true;
        }
        return false;
    };

    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return authorizationStatus === AuthorizationStatus.AUTH ? (
                                <Redirect to="/cards" />
                            ) : (
                                <Redirect to="/login" />
                            );
                        }}
                    />
                    <Route
                        exact
                        path='/login'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH ?
                                <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
                                <Redirect
                                    to='/cards'
                                />;
                        }}
                    />
                    <Route
                        exact
                        path='/logout'
                        render={() => {
                            setAuthorizationStatus(AuthorizationStatus.NO_AUTH);

                            return authorizationStatus !== AuthorizationStatus.AUTH ?
                                <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
                                <Redirect
                                    to='/'
                                />;
                        }}
                    />
                    <Route
                        exact
                        path='/cards'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH ?
                                <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
                                <Main />;
                        }}
                    />
                    <Route
                        exact
                        path='/cards/:cardId'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH ?
                                <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
                                <CardDetail />;
                        }}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;

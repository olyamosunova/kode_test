import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Auth from '../Auth/Auth';
import { Container } from 'react-bootstrap';
import { AuthorizationStatus } from '../../const';
import Main from '../Main/Main';

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
                                <Main />
                            ) : (
                                <Redirect to="/login" />
                            );
                        }}
                    />
                    <Route
                        path='/login'
                        render={() => {
                            return authorizationStatus !== AuthorizationStatus.AUTH ?
                                <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
                                <Redirect
                                    to='/'
                                />;
                        }}
                    />
                    <Route
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
                </Switch>
            </Router>
        </div>
    );
};

// function App() {
//     // const [authorizationStatus, setAuthorizationStatus] = useState(AuthorizationStatus.AUTH);
//     const [authorizationStatus, setAuthorizationStatus] = useState(AuthorizationStatus.NO_AUTH);
//
//     const loginHandler = ({ login, password }) => {
//         if (login === 'kode@kode.ru' && password === 'Enk0deng') {
//             return 'success';
//         }
//         return 'Неверный логин или пароль.';
//     };
//
//     const smsCodeHandler = (code) => {
//         if (code === '123456') {
//             setAuthorizationStatus(AuthorizationStatus.AUTH);
//             return 'success';
//         }
//         return 'Неверный код.';
//     };
//
//   return (
//       <div className="app">
//           <Router>
//               <Switch>
//                   <Route
//                       exact
//                       path='/'
//                       render={() => {
//                           return authorizationStatus === AuthorizationStatus.AUTH ?
//                               <Main /> :
//                               <Redirect
//                                   to='/login'
//                               />;
//                       }}
//                   />
//                   <Route
//                       path='/login'
//                       render={() => {
//                           return authorizationStatus !== AuthorizationStatus.AUTH ?
//                               <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
//                               <Redirect
//                                   to='/'
//                               />;
//                       }}
//                   />
//                   <Route
//                       path='/logout'
//                       render={() => {
//                           setAuthorizationStatus(AuthorizationStatus.NO_AUTH);
//
//                           return authorizationStatus !== AuthorizationStatus.AUTH ?
//                               <Auth onLoginFormSubmit={ loginHandler } onCodeFormSubmit={smsCodeHandler} /> :
//                               <Redirect
//                                   to='/'
//                               />;
//                       }}
//                   />
//               </Switch>
//           </Router>
//       </div>
//   );
// }

export default App;

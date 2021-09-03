import React, { useState} from 'react';
import FormLogin from '../FormLogin/FormLogin';
import './Auth.css';
import FormSmsCode from '../FormSmsCode/FormSmsCode';
import Container from 'react-bootstrap/Container';
import { ERROR_MESSAGES } from '../../const';

const Auth = ({ onLoginFormSubmit, onCodeFormSubmit }) => {
    const [data, setData] = useState({
        login: {
            value: '',
            validationMessage: null
        },
        password: {
            value: '',
            validationMessage: null
        },
        code: {
            value: '',
            validationMessage: null
        }
    });

    const [isAuthorizationSuccess, setIsAuthorizationSuccess] = useState(true);
    const [showCodeForm, setShowCodeForm] = useState(false);

    const onInput = (evt) => {
        setData({
            ...data,
            [evt.target.name]: {
                value: evt.target.value,
                validationMessage: evt.target.value ? null : ERROR_MESSAGES.empty_field
            }
        });
    };

    const validateLoginForm = () => {
        if(!data.login.value) {
            setData((curData) => ({
                ...curData,
                login: {
                    ...curData.login,
                    validationMessage: ERROR_MESSAGES.empty_field
                },
            }));
        }

        if(!data.password.value) {
            setData((curData) => ({
                ...curData,
                password: {
                    ...curData.password,
                    validationMessage: ERROR_MESSAGES.empty_field
                },
            }));
        }

        return !data.login.validationMessage && !data.password.validationMessage;
    };

    const validateCodeForm = () => {
        if(!data.code.value) {
            setData((curData) => ({
                ...curData,
                code: {
                    ...curData.code,
                    validationMessage: ERROR_MESSAGES.empty_field
                },
            }));
        }

        return !data.code.validationMessage;
    };

    const submitCodeForm = (evt) => {
        evt.preventDefault();

        if (validateCodeForm()) {
            const resultCode = onCodeFormSubmit(data.code.value);

            if (resultCode) {
                return true;
            } else {
                setData((curData) => ({
                    ...curData,
                    code: {
                        ...curData.code,
                        validationMessage: ERROR_MESSAGES.incorrect_sms_code
                    },
                }));
            }
        }

        console.log(data);
    };

    const submitForm = (evt) => {
        evt.preventDefault();

        if(validateLoginForm()) {
            const resultLogin = onLoginFormSubmit(data);

            if (resultLogin) {
                setShowCodeForm(true);
            } else {
                setIsAuthorizationSuccess(resultLogin);
            }
        }
    };

    return (
        <Container className="auth">
            {showCodeForm
                ? <FormSmsCode submitForm={submitCodeForm} data={data} onInput={onInput} />
                : <FormLogin isAuthorizationSuccess={isAuthorizationSuccess} submitForm={submitForm} data={data} onInput={onInput} />
            }
        </Container>
    );
};

export default Auth;

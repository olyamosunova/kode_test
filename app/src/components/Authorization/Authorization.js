import React, {useEffect, useState} from 'react';
import FormLogin from '../FormLogin/FormLogin';
import './Authorization.css';
import FormSmsCode from '../FormSmsCode/FormSmsCode';
import Container from 'react-bootstrap/Container';
import { ERROR_MESSAGES, FORM_NAME } from '../../const';

const Authorization = ({ onLoginFormSubmit, onCodeFormSubmit, serverError }) => {
    const [isAuthorizationSuccess, setIsAuthorizationSuccess] = useState(true);
    const [showCodeForm, setShowCodeForm] = useState(false);

    const [state, setState] = useState({
        fields: {},
        errors: {}
    });

    useEffect(() => {
        if (serverError) {
            setState({
                ...state,
                errors: {}
            })
        }
    }, [serverError]);

    const handleValidation = (formName) => {
        let errors = {};
        let formIsValid = true;

        switch (formName) {
            case FORM_NAME.LOGIN:
                if (!state.fields.login) {
                    formIsValid = false;
                    errors['login'] = ERROR_MESSAGES.empty_field;
                }

                if (!state.fields.password) {
                    formIsValid = false;
                    errors['password'] = ERROR_MESSAGES.empty_field;
                }

                break;

            case FORM_NAME.CODE:
                if (!state.fields.code) {
                    formIsValid = false;
                    errors['code'] = ERROR_MESSAGES.empty_field;
                }

                break;
        }

        setState({ ...state, errors: errors });
        return formIsValid;
    };

    const loginSubmit = (evt) => {
        evt.preventDefault();

        if (handleValidation(FORM_NAME.LOGIN)) {
            if (onLoginFormSubmit(state.fields)) {
                setShowCodeForm(true);
                alert('Valid SMS code: 123456');
            } else {
                setIsAuthorizationSuccess(false);
            }
        }
    };

    const codeSubmit = async (evt) => {
        evt.preventDefault();

        if(handleValidation(FORM_NAME.CODE)) {
            const isValidCode = await onCodeFormSubmit(state.fields.login, state.fields.code);

            if (!isValidCode) {
                setState({ ...state, errors: {
                        code: ERROR_MESSAGES.incorrect_sms_code
                    }
                });
            }
        }
    };

    const handleChange = (evt) => {
        let fields = state.fields;
        fields[evt.target.name] = evt.target.value;
        setState({ fields, errors: {
                ...state.errors,
                [evt.target.name]: null
            }
        });
    };

    return (
        <div className="auth">
            <div className="container">
                { serverError && <p className="text-danger">Ошибка сервера: {serverError}</p> }

                { showCodeForm
                    ? <FormSmsCode handleChange={ handleChange } submitForm={ codeSubmit } errors={ state.errors } />
                    : <FormLogin isAuthorizationSuccess={ isAuthorizationSuccess } handleChange={ handleChange } submitForm={ loginSubmit } errors={ state.errors } />
                }
            </div>
        </div>
    );
};

export default Authorization;

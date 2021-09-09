import React, {useEffect, useState} from 'react';
import FormLogin from '../FormLogin/FormLogin';
import FormSmsCode from '../FormSmsCode/FormSmsCode';
import { ERROR_MESSAGES, FORM_NAME } from '../../const';
import './Authorization.css';

const Authorization = ({ handlerLoginFormSubmit, handlerCodeFormSubmit, serverError }) => {
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

    const validateForm = (formName) => {
        const errors = {};
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

            default:
                break;
        }

        setState({
            ...state,
            errors: errors
        });
        return formIsValid;
    };

    const submitLogin = (evt) => {
        evt.preventDefault();

        if (validateForm(FORM_NAME.LOGIN)) {
            if (handlerLoginFormSubmit(state.fields)) {
                setShowCodeForm(true);
                alert('Valid SMS code: 123456');
            } else {
                setIsAuthorizationSuccess(false);
            }
        }
    };

    const submitCode = async (evt) => {
        evt.preventDefault();

        if(validateForm(FORM_NAME.CODE)) {
            const isValidCode = await handlerCodeFormSubmit(state.fields.login, state.fields.code);

            if (!isValidCode) {
                setState({
                    ...state,
                    errors: {
                        code: ERROR_MESSAGES.incorrect_sms_code
                    }
                });
            }
        }
    };

    const handlerChange = (evt) => {
        const fields = state.fields;
        fields[evt.target.name] = evt.target.value;
        setState({
            fields,
            errors: {
                ...state.errors,
                [evt.target.name]: null
            }
        });
    };

    return (
        <div className='auth'>
            <div className='container'>
                { serverError && <p className='server-errors'>Server Error: { serverError }</p> }

                { showCodeForm
                    ? <FormSmsCode handlerChange={ handlerChange } submitForm={ submitCode } errors={ state.errors } />
                    : <FormLogin
                        isAuthorizationSuccess={ isAuthorizationSuccess }
                        handlerChange={ handlerChange }
                        submitForm={ submitLogin }
                        errors={ state.errors }
                    />
                }
            </div>
        </div>
    );
};

export default Authorization;

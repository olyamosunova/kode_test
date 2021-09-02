import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import FormLogin from '../FormLogin/FormLogin';
import './Auth.css';
import FormSmsCode from '../FormSmsCode/FormSmsCode';
import Container from 'react-bootstrap/Container';

const Auth = ({ onLoginFormSubmit, onCodeFormSubmit }) => {
    const [data, setData] = useState({ login: '', password: '', code: '' });
    const [formErrors, setFormErrors] = useState({ login: '', password: '', code: '', form: ''});
    const [showCodeForm, setShowCodeForm] = useState(false);

    const onInput = (evt) => {
        setData({...data, [evt.target.name]: evt.target.value});

        if(evt.target.value) {
            setFormErrors({...formErrors, [evt.target.name]: null});
        } else {
            setFormErrors({...formErrors, [evt.target.name]: 'Поле должно быть заполнено'});
        }

        console.log(data);
    };

    const validateLoginForm = () => {
        if(!data.login) {
            setFormErrors({...formErrors, login: 'Поле должно быть заполнено'});
        }

        if(!data.password) {
            setFormErrors({...formErrors, password: 'Поле должно быть заполнено'});
        }

        console.log(formErrors);
        return !formErrors.login && !formErrors.password;
    };

    const validateCodeForm = () => {
        if(!data.code) {
            setFormErrors({...formErrors, code: 'Поле должно быть заполнено'});
        }

        return !formErrors.code;
    };

    const submitForm = (evt) => {
        evt.preventDefault();

        if (validateLoginForm()) {
            const resultLogin = onLoginFormSubmit(data);

            if (resultLogin === 'success') {
                setShowCodeForm(true);
            } else {
                setFormErrors({...formErrors, form: resultLogin});
            }
        }
    };

    const submitCodeForm = (evt) => {
        evt.preventDefault();

        if (validateCodeForm()) {
            const resultCode = onCodeFormSubmit(data.code);

            if (resultCode === 'success') {
                return true;
            } else {
                setFormErrors({...formErrors, code: resultCode});
            }
        }
    };

    return (
        <Container className="auth">
            {showCodeForm
                ? <FormSmsCode submitForm={submitCodeForm} formErrors={formErrors} onInput={onInput} />
                : <FormLogin submitForm={submitForm} formErrors={formErrors} onInput={onInput} />
            }
        </Container>
    );
};

export default Auth;

import React, {useEffect, useState} from 'react';
import { ERROR_MESSAGES } from '../../const';
import cx from 'classnames';

const FormLogin = ({ isAuthorizationSuccess, submitForm, handlerChange, errors }) => {
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        if (errors['login'] || errors['password'] || !isAuthorizationSuccess) {
            setFormError(true);
        }
    }, [errors]);

    const handlerSubmitForm = (evt) => {
        setFormError(false);
        submitForm(evt);
    };

    return (
        <form
            className={ cx('form', { 'form--error': formError }) }
            onSubmit={ handlerSubmitForm }
        >
            { !isAuthorizationSuccess && <p className='form__error'>{ ERROR_MESSAGES.incorrect_authorization }</p> }

            <div className='form__block'>
                <label className={ errors['login'] && 'is-invalid' }>
                    <span>Login</span>
                    <input
                        name='login'
                        type='text'
                        placeholder='Enter login'
                        onChange={ handlerChange }
                    />
                </label>
                { errors['login'] && <div className='form__block-error'>{ errors['login'] }</div> }
            </div>

            <div className='form__block'>
                <label className={ errors['password'] && 'is-invalid' }>
                    <span>Password</span>
                    <input
                        name='password'
                        type='password'
                        placeholder='Enter password'
                        onChange={ handlerChange }
                    />
                </label>

                { errors['password'] && <div className='form__block-error'>{ errors['password'] }</div> }
            </div>

            <button className='button' type='submit'>Log in</button>
        </form>
    );
};

export default FormLogin;

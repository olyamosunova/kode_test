import React from 'react';
import { ERROR_MESSAGES } from '../../const';

const FormLogin = ({ isAuthorizationSuccess, submitForm, handleChange, errors }) => {
    return (
        <form className="form" onSubmit={ submitForm }>
            { !isAuthorizationSuccess && <p className="form__error">{ ERROR_MESSAGES.incorrect_authorization }</p> }

            <div className="form__block">
                <label className={ errors["login"] && "is-invalid" }>
                    <span>Login</span>
                    <input
                        name="login"
                        type="text"
                        placeholder="Enter login"
                        onChange={ handleChange }
                    />
                </label>
                { errors["login"] && <div className="form__block-error">{ errors["login"] }</div> }
            </div>

            <div className="form__block">
                <label className={ errors["password"] && "is-invalid" }>
                    <span>Login</span>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        onChange={ handleChange }
                    />
                </label>

                { errors["password"] && <div className="form__block-error">{ errors["password"] }</div> }
            </div>

            <button className="button" type="submit">Log in</button>
        </form>
    );
};

export default FormLogin;

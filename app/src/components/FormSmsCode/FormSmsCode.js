import React from 'react';

const FormSmsCode = ({ handleChange, submitForm, errors }) => {
    return (
        <form className="form" onSubmit={ submitForm }>
            <div className="form__block">
                <label className={ errors["code"] && "is-invalid" }>
                    <span>Code from SMS</span>
                    <input
                        name="code"
                        type="text"
                        placeholder="Enter code"
                        onChange={ handleChange }
                    />
                </label>
                { errors["code"] && <div className="form__block-error">{ errors["code"] }</div> }
            </div>

            <button className="button" type="submit">Send</button>
        </form>
    );
};

export default FormSmsCode;

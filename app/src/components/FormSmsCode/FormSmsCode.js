import React, {useEffect, useState} from 'react';
import cx from 'classnames';

const FormSmsCode = ({ handleChange, submitForm, errors }) => {
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        if (errors['code']) {
            setFormError(true);
        }
    }, [errors]);

    const handlerSubmitForm = (evt) => {
        setFormError(false);
        submitForm(evt);
    };

    return (
        <form
            className={ cx("form", { "form--error": formError }) }
            onSubmit={ handlerSubmitForm }
        >
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

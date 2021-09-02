import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {ArrowRightCircleFill} from 'react-bootstrap-icons';

const FormLogin = ({ submitForm, formErrors, onInput }) => {
    return (
        <Form onSubmit={submitForm}>
            { formErrors.form ? <p className="text-danger">{ formErrors.form }</p> : null }

            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    name="login"
                    type="text"
                    placeholder="Enter login"
                    onInput={onInput}
                    className={ formErrors.login ? 'is-invalid' : '' }
                />
                { formErrors.login ?
                    <Form.Control.Feedback type="invalid">
                        { formErrors.login }
                    </Form.Control.Feedback> : null }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onInput={onInput}
                    className={ formErrors.password ? 'is-invalid' : '' }
                />
                { formErrors.password ?
                    <Form.Control.Feedback type="invalid">
                        { formErrors.password }
                    </Form.Control.Feedback> : null }
            </Form.Group>
            <Button variant="light" type="submit">
                <ArrowRightCircleFill width={'46px'} height={'46px'} />
            </Button>
        </Form>
    );
};

export default FormLogin;

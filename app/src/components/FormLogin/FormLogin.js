import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {ArrowRightCircleFill} from 'react-bootstrap-icons';
import { ERROR_MESSAGES } from '../../const';

const FormLogin = ({ isAuthorizationSuccess, submitForm, data, onInput }) => {
    return (
        <Form onSubmit={ submitForm }>
            { !isAuthorizationSuccess && <p className="text-danger">{ ERROR_MESSAGES.incorrect_authorization }</p> }

            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    name="login"
                    type="text"
                    placeholder="Enter login"
                    onChange={ onInput }
                    className={ data.login.validationMessage && "is-invalid" }
                />
                { data.login.validationMessage && (
                    <Form.Control.Feedback type="invalid">
                        { data.login.validationMessage }
                    </Form.Control.Feedback>
                ) }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={ onInput }
                    className={ data.password.validationMessage && "is-invalid" }
                />
                { data.password.validationMessage && (
                    <Form.Control.Feedback type="invalid">
                        { data.login.validationMessage }
                    </Form.Control.Feedback>
                ) }
            </Form.Group>
            <Button variant="light" type="submit">
                <ArrowRightCircleFill width={"46px"} height={"46px"} />
            </Button>
        </Form>
    );
};

export default FormLogin;

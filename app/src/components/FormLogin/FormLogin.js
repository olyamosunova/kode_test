import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { ERROR_MESSAGES } from '../../const';

const FormLogin = ({ isAuthorizationSuccess, submitForm, handleChange, errors }) => {
    return (
        <Form onSubmit={ submitForm }>
            { !isAuthorizationSuccess && <p className="text-danger">{ ERROR_MESSAGES.incorrect_authorization }</p> }

            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    name="login"
                    type="text"
                    placeholder="Enter login"
                    onChange={ handleChange }
                    className={ errors["login"] && "is-invalid" }
                />
                { errors["login"] && (
                    <Form.Control.Feedback type="invalid">
                        { errors["login"] }
                    </Form.Control.Feedback>
                ) }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={ handleChange }
                    className={ errors["password"] && "is-invalid" }
                />
                { errors["password"] && (
                    <Form.Control.Feedback type="invalid">
                        { errors["password"] }
                    </Form.Control.Feedback>
                ) }
            </Form.Group>
            <Button variant="light" type="submit">
                <ArrowRightCircleFill width={ "46px" } height={ "46px" } />
            </Button>
        </Form>
    );
};

export default FormLogin;

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

const FormSmsCode = ({ handleChange, submitForm, errors }) => {
    return (
        <Form onSubmit={ submitForm }>
            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Code from SMS</Form.Label>
                <Form.Control
                    name="code"
                    type="text"
                    placeholder="Enter Code"
                    onChange={ handleChange }
                    className={ errors["code"] && "is-invalid" }
                />
                { errors["code"] && (
                    <Form.Control.Feedback type="invalid">
                        { errors["code"] }
                    </Form.Control.Feedback>) }
            </Form.Group>

            <Button variant="light" type="submit">
                <ArrowRightCircleFill width={ "46px" } height={ "46px" } />
            </Button>
        </Form>
    );
};

export default FormSmsCode;

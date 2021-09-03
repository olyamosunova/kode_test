import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {ArrowRightCircleFill} from 'react-bootstrap-icons';

const FormSmsCode = ({ submitForm, data, onInput }) => {
    return (
        <Form onSubmit={ submitForm }>
            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Code from SMS</Form.Label>
                <Form.Control
                    name="code"
                    type="text"
                    placeholder="Enter Code"
                    onInput={ onInput }
                    className={ data.code.validationMessage && 'is-invalid' }
                />
                { data.code.validationMessage && (
                    <Form.Control.Feedback type="invalid">
                        { data.code.validationMessage }
                    </Form.Control.Feedback>) }
            </Form.Group>

            <Button variant="light" type="submit">
                <ArrowRightCircleFill width={'46px'} height={'46px'} />
            </Button>
        </Form>
    );
};

export default FormSmsCode;

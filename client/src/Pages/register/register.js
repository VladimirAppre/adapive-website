import React, {useState} from "react";
import {Button, Container, Form} from 'react-bootstrap';

export const Register = () => {

  const [userData, setUserData] = useState({
    password: null,
    confirmPassword: null,
    login: null,
    email: null,
    errorMessage: false
  });

  const onSumbit = (event) => {
    event.preventDefault();

  }

  return (
    <>
      <Container style={{width: 'autho'}}>
        <Form onSubmit={(event) => onSumbit(event)}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email адрес:</Form.Label>
            <Form.Control type="email" placeholder="Введите email"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Логин:</Form.Label>
            <Form.Control type="login" placeholder="Логин" required/>
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Пароль:</Form.Label>
            <Form.Control key='password' type="password" placeholder="Пароль" required/>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Control key='confirmPassword' type="password" placeholder="Продублируйте пароль" required/>
          </Form.Group>

          <Button variant='primary' type='submit'>Зарегестрироваться</Button>
        </Form>
      </Container>
    </>
  )
}

import React, {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import Feedback from "./feedback";

const Contacts = () => {
  const [email, setEmail] = useState(null);
  const [userMessage, setUserMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    setEmail(e.target.email.value);
    setUserMessage(e.target.message.value)
  }

  return (
    <>
      {email ? <Feedback email={email} userMessage={userMessage}/> : <Container style={{width: 'autho'}}>
        <h1 className='text-center'> Свяжитесь со мной!</h1>
        <Form  onSubmit={(e) => onSubmit(e) } >
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' placeholder='Ввести Email' name='email' required />
            <Form.Text className='text-secondary'>
              Мы никогда не отправим ваш Email третьим лицам
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Сообщение:</Form.Label>
              <Form.Control as='textarea' rows='3' name='message' required />
            </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Подписаться на новости!'/>
          </Form.Group>
          <Button variant='primary' type='submit'>Отправить</Button>
        </Form>
      </Container>}
    </>
  );
}


export default Contacts;
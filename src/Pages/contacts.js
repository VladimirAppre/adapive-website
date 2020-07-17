import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap';

class Contacts extends Component {
  render() {
    return (
      <>
        <Container style={{width: '500px'}}>
          <h1 className='text-center'> Свяжитесь со мной!</h1>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control type='email' placeholder='Ввести Email'/>
              <Form.Text className='text-secondary'>
                Мы никогда не отправим ваш Email третьим лицам
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Сообщение:</Form.Label>
              <Form.Control as='textarea' rows='3'/>
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='check me out'/>
            </Form.Group>
            <Button variant='primary' type='submit'>Отправить</Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Contacts;
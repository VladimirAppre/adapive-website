import React, {useState} from "react";
import {Button, Form, Modal} from 'react-bootstrap';
import {Link} from "react-router-dom";

export function MyVerticallyCenteredModalRegistration(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center" className='text-center'>
          Войти
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control type="email" placeholder="Введите email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
          <span className="float-right ">Нет аккаунта? <Link to='/register/' onClick={props.onHide} className=''>Зарегестрируйся</Link></span>
        </Form>
      </Modal.Body>

    </Modal>
  );
}

const SignInModalComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Войти
      </Button>
      <MyVerticallyCenteredModalRegistration
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default SignInModalComponent;
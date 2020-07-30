import React, {useState,} from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

import './header.css';
import logo from './logo192.png'
import ModalComponent from "../modal";

const Header = () => {
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' className='navBar'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              className='d-inline-block align-top logo'
              alt='logo'
            />Adaptive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Link to='/' className='nav-link'>Домой</Link>
              <Link to='/about' className='nav-link'>Инфо</Link>
              <Link to='/contacts' className='nav-link'>Контакты</Link>
              <Link to='/blog' className='nav-link'>Блог</Link>
            </Nav>
            <Form
              inline>
              <FormControl
                onChange={(event) => onLabelChange(event)}
                value={label}
                type='text'
                placeholder='Поиск'
                className="mr-sm-2 headFormControl"
              />
              <ModalComponent
                title='Внимание!'
                text={`Ваш запрос: << ${label} >> не обрабатывается так как данный сайт был сделан для простой демонстрации адаптивной вёрстки React && Bootstrap, поэтому функционал поиска сюда не завез!`}
                buttonValue='поиск'
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}


export default Header;

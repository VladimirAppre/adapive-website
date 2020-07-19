import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

import './header.css';
import logo from './logo192.png'

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' className='navBar'>
          <Container>
            <Navbar.Brand href='/'>
              <img
                src={logo}
                className='d-inline-block align-top logo'
                alt='logo'
              />React
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Link to='/' className='nav-link'>Домой</Link>
                <Link to='/about' className='nav-link'>Инфо</Link>
                <Link to='/contacts' className='nav-link'>Контакты</Link>
                <Link to='/blog' className='nav-link'>Блог</Link>
              </Nav>
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='Поиск'
                  className="mr-sm-2 headFormControl"
                />
                <Button variant="outline-info">Поиск</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </>
    );
  }
}

export default Header;

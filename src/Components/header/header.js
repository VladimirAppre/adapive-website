import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import './header.css';
import logo from './logo192.png'

class Header extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar fixed={'top'} collapseOnSelect expand='md' bg='dark' variant='dark'>
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
                  <Nav.Link href='/'>Домой</Nav.Link>
                  <Nav.Link href='/'>О нас</Nav.Link>
                  <Nav.Link href='/'>Контакты</Nav.Link>
                  <Nav.Link href='/'>Блог</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Поиск'
                    className="mr-sm-2"
                  />
                  <Button variant="outline-info">Поиск</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}


export default Header;

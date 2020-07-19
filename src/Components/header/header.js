import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './header.css';
import logo from './logo192.png'
import Home from "../../Pages/home";
import About from "../../Pages/about";
import Contacts from "../../Pages/contacts";
import Blog from "../../Pages/blog";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar  collapseOnSelect expand='md' bg='dark' variant='dark' className='navBar'>
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
                <Nav.Link href='/about'>Инфо</Nav.Link>
                <Nav.Link href='/contacts'>Контакты</Nav.Link>
                <Nav.Link href='/blog'>Блог</Nav.Link>
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

        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/blog' component={Blog}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;

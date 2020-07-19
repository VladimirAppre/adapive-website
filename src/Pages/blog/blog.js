import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

import './blog.css';

class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <Media className='m-5 blogContainer'>
              <img
                className='mr-3 blogImg'
                src='data:image/png;base64,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'
              />
              <Media.Body>
                <h5>Java Script</h5>
                <p>мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и
                  функциональный стили.
                  Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для
                  программного доступа к объектам приложений.
                  <a href='https://ru.wikipedia.org/wiki/JavaScript' className='text-info'> Wikipedia</a>
                </p>
              </Media.Body>
            </Media>
            <Media className='m-5 blogContainer'>
              <img
                className='mr-3 blogImg'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'
              />
              <Media.Body>
                <h5>Python</h5>
                <p>Python — высокоуровневый язык программирования общего назначения, ориентированный на повышение
                  производительности разработчика и читаемости кода. Синтаксис ядра Python минималистичен. В то же время
                  стандартная библиотека включает большой объём полезных функций.
                  <a href='https://ru.wikipedia.org/wiki/Python' className='text-info'> Wikipedia</a>
                </p>
              </Media.Body>
            </Media>
            <Media className='m-5 blogContainer'>
              <img
                className='mr-3 blogImg'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
              />
              <Media.Body>
                <h5>C++</h5>
                <p>C++ — компилируемый, статически типизированный язык программирования общего назначения. Поддерживает
                  такие парадигмы программирования, как процедурное программирование, объектно-ориентированное
                  программирование, обобщённое программирование.
                  <a href='https://ru.wikipedia.org/wiki/C%2B%2B' className='text-info'> Wikipedia</a>
                </p>
              </Media.Body>
            </Media>
            <Media className='m-5 blogContainer'>
              <img
                className='mr-3 blogImg'
                src='https://static.tildacdn.com/tild3265-6366-4433-b236-353232396564/103230_normal.png'
              />
              <Media.Body>
                <h5>Java</h5>
                <p>Java — строго типизированный объектно-ориентированный язык программирования, разработанный компанией
                  Sun Microsystems. Разработка ведётся сообществом, организованным через Java Community Process, язык и
                  основные реализующие его технологии распространяются по лицензии GPL.
                  <a href='https://ru.wikipedia.org/wiki/C%2B%2B' className='text-info'> Wikipedia</a>
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md='3'>
            <h5 className='text-center mt-5'>Категории</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3 bg-light'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, molestiae?</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Blog;
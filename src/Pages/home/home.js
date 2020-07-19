import React, {Component} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import './home.css'
import CarouselBox from "../../Components/carusel-box/carousel-box";

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox/>
        <Container>
          <h2 className='text-center m-4'>Наша команда</h2>
          <div className='pt-2 row m-4 cardContainer'>

            <div className="col-md-6 col-xl-4 mt-3">
              <Card
                bg='light'
                border='success'
                text='primary'>
                <Card.Img
                  variant="top"
                  src='https://i.ibb.co/jGkdypC/IMG-20200619-145723.jpg'
                />
                <Card.Body>
                  <Card.Title className='text-center text-dark'>Will Find Team 1/2</Card.Title>
                  <Card.Text>Тут собственно я и Николай, трудимся над приложением Will Find. Так - же в нашей команде был Юрий и Сергей.
                  </Card.Text>
                  <Button variant='primary'>О команде</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-6 col-xl-4 mt-3">
              <Card
                bg='light'
                border='success'
                text='primary'>
                <Card.Body>
                  <Card.Title className='text-center text-dark'>Look on me Team</Card.Title>
                  <Card.Text>Олеся капитан команды, далее Сергей, Влад и Егор трудятся над приложением Look on my.
                  </Card.Text>
                  <Button variant='primary'>О команде</Button>
                </Card.Body>
                <Card.Img
                  variant="bottom"
                  src='https://i.ibb.co/q0pqqH1/IMG-20200619-145847.jpg'
                />
              </Card>
            </div>

            <div className="col-md-6 col-xl-4 mt-3">
            <Card
              bg='light'
              border='success'
              text='primary'>
              <Card.Img
                variant="top"
                src='https://i.ibb.co/xD7M60b/IMG-20200619-145924.jpg'
              />
              <Card.Body>
                <Card.Title className='text-center text-dark'>Will Find Team 2/2</Card.Title>
                <Card.Text>C Николаем уже познакомились, и тут у нас Сергей, трудимся над приложением Will Find.
                </Card.Text>
                <Button variant='primary'>О команде</Button>
              </Card.Body>
            </Card>
              </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
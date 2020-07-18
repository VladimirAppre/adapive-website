import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import reduxSagaImg from '../../src/assets/about/react-redux.gif';


class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey='design'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='design'>Дизайн</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='elbrus-team'>Комманда</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='programming'>Наглядные схемы</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='framework'>Фреймворки</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='library'>Библиотеки</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={1}></Col>
            <Col sm={8}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='design'>
                  <img src='https://i.ibb.co/f86Y6KQ/ava-job.jpg' style={{maxHeight: '650px'}}
                       className='img-fluid rounded shadow'/>
                  <p className='pt-3'>Сам себе за минуту дизайнер!</p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey='elbrus-team'>
                  <img src='https://i.ibb.co/6NMGNKw/Image-from-i-OS.jpg' className='img-fluid rounded shadow'/>
                  <p className='pt-3'>Команда из Эльбруса, Ежи 2020!</p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey='programming'>
                  <h4 className="text-secondary text-center pt-3" >REACT REDUX EXPRESS</h4>
                  <img src='https://i.redd.it/vezwyo0qq4lz.png' className='img-fluid rounded shadow'/>

                  <h4 className="text-secondary text-center pt-3">Redux Sagas</h4>
                  <img src={reduxSagaImg} className='img-fluid rounded shadow'/>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey='framework'>
                  <h4 className="text-secondary">
                    Большая пятёрка фронтенд-инструментов
                  </h4>
                  <p>
                    Если отталкиваться от популярности и распространённости инструментов фронтенд-разработки, то вот —
                    пять наиболее заметных JavaScript-фреймворков и библиотек:
                    <ul>
                      <li>React</li>
                      <li>Vue</li>
                      <li>Angular</li>
                      <li>Ember</li>
                      <li>Backbone.js</li>
                    </ul>

                    Вокруг каждого из этих инструментов сложилось значительное сообщество разработчиков.
                    И если вы ищете основу для своего очередного веб-проекта, то вы не прогадаете, сделав ставку на один
                    из этих инструментов. Вот сведения по ним за последние шесть месяцев, собранные средствами <a
                      href='https://www.npmtrends.com/' class='text-info'>npmtrends.com.</a></p>
                  <img
                    src='https://habrastorage.org/getpro/habr/post_images/9d5/abb/53d/9d5abb53d0d26031f50258c6967713c1.png'
                    className='img-fluid rounded shadow'/>

                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey='library'>
                  <h4>
                    <a href="https://reactjs.org/" className='text-decoration-none'>React</a>
                  </h4>
                  <p>
                    React - это библиотека JavaScript, созданная разработчиками Facebook и Instagram. Согласно опросу
                    Stack Overflow Survey 2017, React был признан самой популярной технологией среди разработчиков.
                    React также имеет честь быть самым популярным проектом JavaScript, согласно количеству звезд на
                    GitHub
                  </p>
                  <p>
                    Так почему React получает все внимание? С помощью React можно создать интерактивный интерфейс с
                    использованием декларативного подхода, в котором вы можете контролировать состояние приложения,
                    говоря: «Представление должно выглядеть так». Он использует компонентную модель, в которой
                    компоненты являются повторно используемыми элементами пользовательского интерфейса, и каждый
                    компонент имеет свое собственное состояние.
                  </p>
                  <p>
                    React использует виртуальную модель DOM, так что вам не нужно беспокоиться о прямом манипулировании
                    с DOM. Другие примечательные особенности React включают однонаправленный поток данных,
                    дополнительный синтаксис JSX и инструмент командной строки для создания проекта React с нуля.
                  </p>
                  <img className='img-fluid rounded shadow'
                       src='https://cms-assets.tutsplus.com/uploads/users/1795/posts/29540/image/Essential-JavaScript-Frameworls-Libraries-Tools-React.jpg'/>
                  <br />
                  <br />
                  <h4>
                    <a href="https://d3js.org/" className='text-decoration-none'>D3: Документы, управляемые данными</a>
                  </h4>
                  <p>
                    D3 (или D3.js) - мощная библиотека JavaScript для создания интерактивных визуализаций с
                    использованием веб-стандартов, таких как SVG, HTML и CSS. В отличие от других библиотек
                    визуализации, D3 предлагает лучший контроль над окончательным визуальным результатом.
                  </p>
                  <p>
                    D3 работает, связывая данные с DOM и затем преобразуя их в документ. Она также имеет собственную
                    экосистему, которая состоит из плагинов и библиотек, которые расширяют ее базовые функциональные
                    возможности. Библиотека существует с 2011 года, и в ней есть множество документации и учебников,
                    которые помогут вам начать работу.
                  </p>
                  <img className='img-fluid rounded shadow'
                       src='https://cms-assets.tutsplus.com/uploads/users/1795/posts/29540/image/Essential-JavaScript-Frameworls-Libraries-Tools-d3.jpg'/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default About;
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import forestBridge from '../../assets/forest-bridge.jpg'
import forestFog from '../../assets/forest-fog.jpg'
import forestRed from '../../assets/forest-red.jpg'
import forestGreen from '../../assets/forest-green.jpg'
import forestMountain from '../../assets/forest-mountain.jpg'

class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={forestGreen}
              alt='img forest'/>
            <Carousel.Caption>
              <h3>forestGreen image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, obcaecati!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={forestMountain}
              alt='img forest'/>
            <Carousel.Caption>
              <h3>forestMountain image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, obcaecati!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={forestBridge}
              alt='img forest'/>
            <Carousel.Caption>
              <h3>forestBridge image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, obcaecati!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={forestFog}
              alt='img forest'/>
            <Carousel.Caption>
              <h3>forestFog image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, obcaecati!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={forestRed}
              alt='img forest'/>
            <Carousel.Caption>
              <h3>forestRed image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, obcaecati!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselBox;
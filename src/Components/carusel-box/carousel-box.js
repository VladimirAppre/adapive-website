import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel-box.css'
import forestBridge from '../../assets/forest/forest-bridge.jpg'
import forestFog from '../../assets/forest/forest-fog.jpg'
import forestRed from '../../assets/forest/forest-red.jpg'
import forestGreen from '../../assets/forest/forest-green.jpg'
import forestMountain from '../../assets/forest/forest-mountain.jpg'
//: Будет время отрефакторю в itemListImg $$ ItemImgInfo а пока так грубо

const CarouselBox = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={forestGreen}
            alt='img forest'/>
          <Carousel.Caption>
            <h3 className='titleImage'>Зеленый лес, 4k</h3>
            <p className='textImage'>Какое-то описание изображения, мы воспользуемся Lorem ipsum dolor sit amet,
              consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src={forestMountain}
            alt='img forest'/>
          <Carousel.Caption>
            <h3 className='titleImage'>Лес, горы, 4k</h3>
            <p className='textImage'>Какое-то описание изображения, мы воспользуемся Lorem ipsum dolor sit amet,
              consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src={forestBridge}
            alt='img forest'/>
          <Carousel.Caption>
            <h3 className='titleImage'>Лес и красивый мост, 4k</h3>
            <p className='textImage'>Какое-то описание изображения, мы воспользуемся Lorem ipsum dolor sit amet,
              consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src={forestFog}
              alt='img forest'/>
            <Carousel.Caption>
              <h3 className='titleImage'>Лес и туман, 4k</h3>
              <p className='textImage' >Какое-то описание изображения, мы воспользуемся Lorem ipsum dolor sit amet, consectetur!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={forestRed}
              alt='img forest'/>
            <Carousel.Caption>
              <h3 className='titleImage'>Красный и белый лес, 4k</h3>
              <p className='textImage'>Какое-то описание изображения, мы воспользуемся Lorem ipsum dolor sit amet, consectetur!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselBox;
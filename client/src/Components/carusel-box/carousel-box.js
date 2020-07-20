import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel-box.css'

//* Будет время отрефакторю в itemListImg $$ ItemImgInfo а пока так грубо

const CarouselBox = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            alt='img forest'/>
          <Carousel.Caption>
            <h3 className='titleImage'>Зеленый лес, 4k</h3>
            <p className='textImage'>Какое-то описание изображения 1, я воспользуюсь Lorem ipsum dolor sit amet,
              consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/1374295/pexels-photo-1374295.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            alt='img forest'/>
          <Carousel.Caption>
            <h3 className='titleImage'>Лес, горы, 4k</h3>
            <p className='textImage'>Какое-то описание изображения 2, я воспользуюсь Lorem ipsum dolor sit amet,
              consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            alt='img forest'/>
          <Carousel.Caption>
            <h3 className='titleImage'>Лес и красивый мост, 4k</h3>
            <p className='textImage'>Какое-то описание изображения 3, я воспользуюсь Lorem ipsum dolor sit amet,
              consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/158672/fog-forest-mountain-world-clouds-158672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='img forest'/>
            <Carousel.Caption>
              <h3 className='titleImage'>Лес и туман, 4k</h3>
              <p className='textImage'>Какое-то описание изображения 4, я воспользуюсь Lorem ipsum dolor sit amet,
                consectetur!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://images.pexels.com/photos/691571/pexels-photo-691571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='img forest'/>
            <Carousel.Caption>
              <h3 className='titleImage'>Красный и белый лес, 4k</h3>
              <p className='textImage'>Какое-то описание изображения 5, я воспользуюсь Lorem ipsum dolor sit amet,
                consectetur!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselBox;
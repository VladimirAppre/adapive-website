import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageItem = ({id, url, title, description}) => {

  return (
      <Carousel.Item key={id}>
        <img
          className='d-block w-100'
          src={url}
          alt='img forest'/>
        <Carousel.Caption>
          <h3 className='titleImage'>{title}</h3>
          <p className='textImage'>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
)
}



export default ImageItem;
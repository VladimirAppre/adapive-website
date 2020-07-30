import React, {useEffect, useState} from "react";

import Carousel from "react-bootstrap/Carousel";
import ImageStockService from "../mock- services/image-stock-service";

const ImageList = ({data}) => {
  if (data) {
    const items = data.map(imgObj => {
      const {id, url, title, description} = imgObj;
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
    })
    return (
      <div>
        <Carousel>
          {items}
        </Carousel>
      </div>
    )
  }

  return null
}




const ListImage = () => {

  const [imageState, setImageState] = useState(null);
  const [error, setError] = useState(null)
  const imageStockService = new ImageStockService();

  const fetchData = async () => {
    try {
      const response = await imageStockService.getImages();
      await setImageState(response)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      {error && <p>Что то пошло не так...</p>}
      <ImageList
        data={imageState}
      />
    </>)
}

export default ListImage;





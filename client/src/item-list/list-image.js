import React, {useEffect, useState} from "react";

import Carousel from "react-bootstrap/Carousel";
import ImageStockService from "../mock- services/image-stock-service";

const ImageList = ({data}) => {

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




const ListImage = () => {

  // const [imageState, setImageState] = useState(null);
  // const [error, setError] = useState(null)
  const imageStockService = new ImageStockService();

  // useEffect(() => {
  //
  //   const fetchData = async () => {
  //     try {
  //       const response = await imageStockService.getImages();
  //       await setImageState(response)
  //       console.log(imageState)
  //     } catch (e) {
  //       setError(e)
  //     }
  //   }
  //   fetchData()
  //
  // }, []);

  return (
    <>
      <ImageList
        data={imageStockService.data}
      />
    </>)
}

export default ListImage;





import React, {useEffect, useState} from "react";
import ImageItem from "../item-image";

import '../Components/carusel-box/carousel-box.css'
import Carousel from "react-bootstrap/Carousel";
import ImageStockService from "../mock- services/image-stock-service";

const ImageList = ({data}) => {

  return (
    <div>
      <Carousel>
        {
          data.map(imgObj => {
            const {id, url, title, description} = imgObj;
            return (
              <ImageItem
                description={description}
                id={id}
                url={url}
                title={title}
              />
            )
          })
        }
      </Carousel>
    </div>
  )
}


const ListImage = () => {

  const [imageState, setImageState] = useState(null);
  const imageStockService = new ImageStockService();

  useEffect(() => {
    imageStockService
      .getImages()
      .then((images) => {
        setImageState(images)
      })
  }, []);


  return (
    <>
      <ImageList
        data={imageStockService.data}
      />
    </>)
}

export default ListImage;





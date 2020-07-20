import React from "react";

export default class ImageStockService {
  data = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'Лес и красивый мост, 4k',
      description: "Какое-то описание изображения 1, я воспользуюсь Lorem ipsum dolor sit amet, consectetur!",
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1374295/pexels-photo-1374295.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'Лучи солнца на фоне леса и гор',
      description: "Какое-то описание изображения 2, я воспользуюсь Lorem ipsum dolor sit amet, consectetur!",
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'Лес и красивый мост, 4k',
      description: "Какое-то описание изображения 3, я воспользуюсь Lorem ipsum dolor sit amet, consectetur!",
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/158672/fog-forest-mountain-world-clouds-158672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Лес и туман, 4k',
      description: "Какое-то описание изображения 4, я воспользуюсь Lorem ipsum dolor sit amet, consectetur!",
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/691571/pexels-photo-691571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Красный и белый лес, 4k',
      description: "Какое-то описание изображения 5, я воспользуюсь Lorem ipsum dolor sit amet, consectetur!",
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'Закат на фоне красивого озера, 4k',
      description: "Какое-то описание изображения 6, я воспользуюсь Lorem ipsum dolor sit amet, consectetur!",
    },
  ];

  getImages () {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(this.data);
      },40)
    })
  }
}
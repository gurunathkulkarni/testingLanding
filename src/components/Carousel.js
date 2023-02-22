import React from "react";
import { Carousel } from 'react-carousel-minimal-next';
import img1 from '../assets/app/client1.png';
import img2 from '../assets/app/client2.png';
import img3 from '../assets/app/client3.png';
import img4 from '../assets/app/client4.png';
import img5 from '../assets/app/client5.png';
import img6 from '../assets/app/client6.png';
// import img from '../assets/'

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

export default function CarouselComponent() {
  return (
    <div>
      <h4>Client</h4>
      <Carousel
        data={data}
        time={5000}
        // width="350px"
        // height="300px"
        // captionStyle={captionStyle}
        // radius="10px"
        // slideNumber={true}
        // slideNumberStyle={slideNumberStyle}
        // captionPosition="bottom"
        automatic={true}
        dots={true}
        // pauseIconColor="white"
        // pauseIconSize="40px"
        // slideBackgroundColor="darkgrey"
        // slideImageFit="cover"
        // thumbnails={true}
        // thumbnailWidth="100px"
        // style={{
        //   textAlign: "center",
        //   maxWidth: "850px",
        //   maxHeight: "500px",
        //   margin: "40px auto",
        // }}
      />
    </div>
  );
}


const data = [
    {
      image: img1,
    //   caption: "San Francisco"
    },
    {
      image: img2,
    //   caption: "Scotland"
    },
    {
        image: img3
    },
    {
        image: img4
    },
    {
        image: img5
    },
    {
        image: img6
    }
  ];

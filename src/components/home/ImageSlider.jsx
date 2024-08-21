import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets2/slidesimg/slide1.png"
import slide2 from "../assets2/slidesimg/slide2.jpg"
import slide3 from "../assets2/slidesimg/slide3.png"


const AutoImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 3000,       // Speed in milliseconds (3000ms = 3 seconds)
  };

  const images = [
    { id: 1, src: slide3, alt: 'Slide 1' },
    { id: 2, src: slide1, alt: 'Slide 2' },
    { id: 3, src: slide2, alt: 'Slide 3' },
  ];

  return (
    <div style={{}}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height:"400px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoImageSlider;

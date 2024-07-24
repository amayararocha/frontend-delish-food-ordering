import React from 'react';
import Slider from 'react-slick';
import { topMeal } from './topMeal';
import CarouselItem from './CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeal.map((item, index) => (
          <div key={index}>
            <CarouselItem image={item.image} title={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;

import React from 'react';
import ItemComponent from './ItemComponent';
import Slider from 'react-slick';
import './CategoryComponent.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoryComponent = ({ title, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoryComponent;

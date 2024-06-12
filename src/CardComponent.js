import React from 'react';
import './CardComponent.css';

const CardComponent = ({ title, image, items, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <a href={link} className="link">See all offers</a>
      <div className="item-list">
        {items && items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;

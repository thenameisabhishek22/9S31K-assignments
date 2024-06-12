import React from 'react';
import './ItemComponent.css';

const ItemComponent = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default ItemComponent;

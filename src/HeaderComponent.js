import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">Amazon</div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="account">Account</div>
        <div className="cart">Cart</div>
      </div>
    </header>
  );
};

export default HeaderComponent;

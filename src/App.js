import React from 'react';
import HeaderComponent from './HeaderComponent';
import CategoryComponent from './CategoryComponent';
import FooterComponent from './FooterComponent';
import './App.css';

const App = () => {
  const categories = [
    {
      title: "Best Sellers in Beauty",
      items: [
        { image: "https://m.media-amazon.com/images/I/71QBCKSUpdL._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/51lV2Pem64L._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/61wHkCENFtL._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/61Jnn0D30RL._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/51ECtYHLw6L._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/419w4PBH11L._AC_SY200_.jpg"},
      ],
    },
    {
      title: "Up to 70% off | Best Sellers in Books",
      items: [
        { image: "https://m.media-amazon.com/images/I/619U3eefi7L._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/715gVCbYKtL._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/81e5Foz07yL._AC_SY200_.jpg"},
        { image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_SY200_.jpg"},
      ],
    },
    // Add more categories as needed
  ];

  return (
    <div className="App">
      <HeaderComponent />
      <main>
        {categories.map((category, index) => (
          <CategoryComponent key={index} title={category.title} items={category.items} />
        ))}
      </main>
      <FooterComponent />
    </div>
  );
};

export default App;

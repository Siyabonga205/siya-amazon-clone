import React from 'react';
import './Products.css'
import Product from './Product';

const Products = () => {
  return (
    <>
     <div className='products_row'>
      <Product id='1'
      title="Redragon S101 Gaming Keyboard, M601 Mouse, RGB Backlit Gaming Keyboard, Programmable Backlit Gaming Mouse, Value Combo Set [New Version]"
      image='https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg'
      rating='4.1'
      price='39.99'
      />
        <Product id='2'
      title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
      image='https://m.media-amazon.com/images/I/8189uwDnMkL._AC_UY218_.jpg'
      rating='3.8'
      price='24.99'
      />
      </div>
      <div className='products_row'>
      <Product id='3'
      title="NEW SteelSeries Arctis Nova 1 Multi-System Gaming Headset — Hi-Fi Drivers — 360° Spatial Audio — Comfort Design — Durable — Ultra Lightweight — Noise-Cancelling Mic — PC,"
      image='https://m.media-amazon.com/images/I/71pY4rbIg0L._AC_UY218_.jpg'
      rating='4.7'
      price='43.99'
      />
      <Product id='4'
      title="X Rocker Falcon Pedestal PC Office Computer Gaming Chair,"
      image='https://m.media-amazon.com/images/I/71a34zpJkbL._AC_UL400_.jpg'
      rating='5'
      price='200.00'
      />
        <Product id='5'
      title="Texas Instruments TI-30XIIS Scientific Calculator, Black with Blue Accents"
      image='https://m.media-amazon.com/images/I/7106ob3ATYL._AC_UL320_.jpg'
      rating='5'
      price='9.88'
      />
      </div>
    </>
   
  );
};

export default Products
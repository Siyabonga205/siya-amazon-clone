import './Checkout.css';
import React, {useContext} from 'react';
import ShoppingContext from '../context/shopping/shoppingContext';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg" alt=""/>

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your Shopping Basket</h2>


                {basket.map(item => (<CheckoutProduct 
                key={item.id}
                id={item.id}
                 title={item.title}
                  image={item.image}
                   price={item.price} 
                   rating={item.rating}
                />))}
            </div>
        </div>
        <div className='checkout_right'>Subtotal</div>

    </div>
  )
}

export default Checkout
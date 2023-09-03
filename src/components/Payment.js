import React, { useContext, useEffect, useState } from 'react';
import axios from '../axios'
import ShoppingContext from '../context/shopping/shoppingContext';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';

const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user, getBasketTotal } = shoppingContext;

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate the special strip secret which will allow us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);
 
   const handleSubmit = async (e) => {
   e.preventDefault();
   setProcessing(true);

   const payload = await stripe.confirmCardPayment(clientSecret, 
   {payment_method: { card: elements.getElement(CardElement) },
   }).then(({paymentIntent}) => {
    // payment intent = payment confirmation
    setSucceeded(true);
    setError(null);
    setProcessing(false);
    history.push("/orders");
   })
   };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? "e.error.message" : "");
    };
  return (
    <div className='payment'>
     <div className='payment_container'>
        <h1>Checkout <Link to='/checkout'>{basket?.length} items</Link></h1>
        <div className='payment_section'>
            <div className='payment_title'>
         <h3>Delivery Address</h3>
            </div>
            <div className='payment_address'>
                <p>{user?.email}</p>
                <p>123 ReactJS Road</p>
                <p>Cape Town, SA</p>
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment_items'>
                {basket.map((item) => (<CheckoutProduct 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                image={item.image}
                price={item.price}
                rating={item.rating}
                />))}
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment method</h3>
            </div>
            <div className='patment_details'>
                {/* {Stripe code will go here} */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                <div className='payment_price_container'>
                    <CurrencyFormat 
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing? <p>Processing</p>: "Buy now"}</span>
                    </button>
                </div>
                {error && <div>{error}</div>}
                </form>
            </div>
            </div>
     </div>
    </div>
  )
}

export default Payment
import './App.css';
import { useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductsDetails from './components/ProductsDetails';
import ShoppingContext from './context/shopping/shoppingContext';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { auth } from './firebase';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

const promise = loadStripe(
  'pk_test_51Nlm02J3G7iMnVd7JLtxhkDlOKzFudqIGh6ftDadPob8SbgZ2fFwhUYH5AvQcQQLx4z19Ttn63Adchfqgi5yb9pm00xYgCKIVz'
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    console.log("User is -> ", authUser);

    if(authUser) {
      setUser(authUser)
    } else {
      setUser(null)
    }
  });
}, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
    <Route path='/home'>
    <Home />
    </Route>
    <Route path='/products' exact>
      <Products />
    </Route>
    <Route path='/products/:id'>
      <ProductsDetails />
    </Route>
    <Route path='/checkout'>
      <Checkout />
    </Route>
    <Route path='/payment'>
      <Elements stripe={promise}>
      <Payment />
      </Elements>
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='*'>
      <NotFound/>
    </Route>
    </Switch>
    </main>
    </>
  );
}

export default App;

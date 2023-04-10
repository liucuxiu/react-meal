import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      <div className="App">
        { cartIsShown && <Cart onCloseCart={hideCartHandler}/> }
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
      </div>
    </CartProvider>

  );
}

export default App;

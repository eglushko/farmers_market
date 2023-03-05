import React from 'react';
import { useState } from 'react';

import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import CartProvider from './store/CartProvider';

import './App.css';

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  }

  const closeCartHandler = () => {
    setCartIsOpen(false);
  }

  return (
    <CartProvider>
      {cartIsOpen && <Cart onClose={closeCartHandler} />} 
      <Header onOpenCart={openCartHandler}></Header>
      <Products />
    </CartProvider> 
  );
};

export default App;

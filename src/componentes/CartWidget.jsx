import React from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
const CartWidget = () => {
    const {totalUnidades} = useContext (CartContext);
  
    return (

    <div>CartWidget <span>{totalUnidades()}</span></div>
  )
}

export default CartWidget
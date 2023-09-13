import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Cart = () => {
  const { cart, deleteAll, deleteOne } = useContext(CartContext);
  return <div>
    <h3>CART</h3>
      {cart.map((prod)=>(
        <div key={prod.id}>
          <img src={prod.img} alt={prod.title} width="280px"/>
          <div>
            <h3>{prod.title}</h3>
            <h3>{prod.cantidad}</h3>
            <button onClick={ () => deleteOne(prod.id) }>Eliminar*</button>
          </div>
        </div>
      ))}
      <h2>Total: $</h2>
      <button onClick={deleteAll}>Vaciar Cariito</button>
  </div>
}

export default Cart
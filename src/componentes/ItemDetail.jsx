import React, { useState, useContext } from 'react';
import Contador from './Contador';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom'
 
const ItemDetail = ({item}) => {
  const [show, setShow] = useState(true);
  
  //usando destructuring extraigo de mi contexto la funcion que necesito
  const { addToCart } = useContext(CartContext);
  
  const onAdd = (qty) => {
   // console.log('Funciona' + qty + "unidades");
    setShow(false)
    addToCart(item, qty)
  }
  
  return (
    <>
    {/* <div>
      <img src={item.img} alt={item.title} />
      <div>
        <h2>ItemDetail</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, iure? Fuga quibusdam eveniet autem at reprehenderit similique nemo perferendis officiis. Eum possimus corporis ab cupiditate nobis dolore animi deleniti aliquam!</p>
        <h3>${item.price}-</h3>
        <Contador stock={10} onAdd={onAdd}/>
      </div>
    </div> */}
    
    <Card key={item.id}>
      <Card.Img variant="top" src={item.img} alt={item.title}></Card.Img>
      <Card.Body>
        { show
          ? ( <h2>No agregaste nada al carrito</h2> )
          : ( <h2>Agregaste unidades al carrito</h2> )
        }
        <Card.Title>{item.title}!</Card.Title>
        <Card.Text>
          <p>${item.price}.-</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, iure? Fuga quibusdam eveniet autem at reprehenderit similique nemo perferendis officiis. Eum possimus corporis ab cupiditate nobis dolore animi deleniti aliquam!</p>
        </Card.Text>
        {show
          ? (<Contador stock={item.stock} onAdd={onAdd}/>)
          : (<Link to="/cart">Ir al carrito</Link>)
        }
      </Card.Body>
    </Card>
  </>
  )
}

export default ItemDetail
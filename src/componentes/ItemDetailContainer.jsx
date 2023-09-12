import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../mock/products';

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProd} = useParams();
  useEffect (()=>{
    const getProduct = () => {
      return new Promise ((res, rej)=> {
        //aplico el metodo find que me devuelve un objeto en particular, este objeto lo guardo con el nombre prod
        const product = products.find((prod)=> prod.id === +idProd )
        
        setTimeout(()=>{
            res(product);
          },500);
      })
    };

    getProduct()
      .then((res)=>{
        setItem(res);
      })
      .catch((error)=>{
        console.log(error);
      })
      .finally(()=>{
        setLoading(false);
      });

  }, [idProd]);

  if (loading) {
    return (
      <h3>CARGANDO...</h3>
    )
  }

  return (
    <div><ItemDetail item = {item}/></div>
  )
}

export default ItemDetailContainer
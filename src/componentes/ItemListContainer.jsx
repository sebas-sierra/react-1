import React, { useEffect, useState } from 'react';
import { products } from '../mock/products';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // const valor = useParams();
  // console.log  (valor.categoryName)
  
  const { categoryName } = useParams();
  useEffect(() => {
    const getProducts = () => {
      return new Promise((res, rej) => {
        const prodFiltrados = products.filter((prod)=> prod.category === categoryName);
        const ref = categoryName ? prodFiltrados : products;
        setTimeout(() => {
          res(ref);
        }, 1500);
      });
    };

    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log('rej', error);
      })
      .finally(()=>{
        setLoading(false);
      });
      return ()=> setLoading(true)
  }, [categoryName]);
  
  //console.log(items);
  if (loading) {
    return (
    <h3>CARGANDO...</h3>
    )
  }

  return (
    <>
      <ItemList items={items}/>
    </>
    )
  }

export default ItemListContainer
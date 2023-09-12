import React from 'react';
import { Link, Outlet  } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import ItemListContainer from './ItemListContainer';

const ClaseSeis = () => {
   // const valor = useParams();
    //console.log  (valor.categoryName)
    
  return (
    <div>
        <Card className="mb-2">
            <Card.Header>Clase 6 - Promises: Asincronia y MAP</Card.Header>
            <Card.Body>
                <Card.Title>Promesa - Poniendo en uso el Hook useEffect</Card.Title>
                
                <Card.Text>
                    <p>Una 'Promesa' va de la mano co los Procesos Asincronos. Por ejemplo: cuando vamos a un restaurant y hacemos nuestro pedido a un mozo, el mozo se dirije a la cocina y pide la orden. Mientras en la cocina se prepara nuestra comida, el mozo sigue su tarea y atiende el resto de las mesas. Cuando nuestro pedido esta listo, se da la orden y el mozo nos entrega nuestra comida.<br />
                    En este ejemplo mientras en la cocina se preparaba nuestro pedido el mozo nunca dejo de seguir con su tarea, es decir no se quedo parado esperando a que el pedido este listo sino que siguio trabajando.</p>
                    <p>Cuando nosotros trabajamos con codigo una promesa representa algo, una operacion que sera resuelta luego, despues de la tarea principal (Por ejemplo, la pantalla muestra una 'barra de loading' mientras la promesa se resuelve para que el navegador pueda pintar, por ejemplo una lista de items con los datos obtenidos en el sitio web). Una promesa nos permite representar y seguir el ciclo de vida de una tarea/ operacion (una funcion).</p>
                    <p>Pero rara vez codeamos una Promesa a mano, sino que por lo general usamos algun metodo que nos devuelve una Promesa, un metodo como Fetch, Axios, Ajaxs. Cada vez que pedidmos datos, informacion, a una fuente externa esta nos devuelve una Promesa, se denomina 'Promesa' porque no sabemos en que momento llegara esa data que solicitamos y asi entonces la Promesa queda saldada.</p>
                    <p>Una promesa lleva dos parametros (a,b), (res, rej) o (response, rejected). Son DOS parametros: el primero es para resolver la Promesa de una manera optima, el segundo parametro se ejecuta cuando la Promesa es rechazada. Cada vez que usamos una Promesa podemos obtener una respuesta que puede ser positiva 'Then' o negativa 'Catch'. En nuestro caso la usamos para obtener una respuesta 'positiva', es decir traer la informacion que necesitamos de manera correcta. Para esto trabajamos basicamente solo con el primer parametro 'Response'.</p>
                    <p>Una Promesa nos devuelve un array de objetos, para poder renderizar los objetos dentro del array y mostrarlos en pantalla. Para esto hay que recorrer el array e ir capturando la informacion de cada objeto. Esto lo conseguimos usando el metodo MAP, este metodo nos permite generar un nuevo array tomando como base un array ya existente y utilizando una funcion transformadora.</p>
                </Card.Text>

                <Button href='/claseseis/productos/furniture'>Furniture</Button>
                <Button href='/claseseis/productos/decoracion'>Decoracion</Button>
                <Button href='/claseseis/productos/mesas'>Mesas</Button> 
                <br /><br />
                <Link to={'productos'} >Todos</Link>
                <Link to={'productos/furniture'} >Furniture</Link>
                <Link to={'productos/decoracion'} >Decoracion</Link>
                <Link to={'productos/mesas'} >Mesas</Link>
                <br /><br />
                <Outlet/>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default ClaseSeis
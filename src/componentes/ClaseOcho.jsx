import React from 'react'

import Card from 'react-bootstrap/Card';

const ClaseOcho = () => {
  return (
    <div>
      <Card>
        <Card.Header>Clase 8 - Rutas - react-router-dom</Card.Header>
        
        <Card.Body>
          <Card.Title></Card.Title>
          
          <Card.Text>
            <a href="http://reactrouter.com/en/main">React-router-dom </a> En este link se encuentra toda la documentacion sobre la libreria de rutas de React. <br />
            <p>Por defecto React no cuenta con un mecanismo de navegacion integrado, el routing se maneja como una dependencia aparte. Existen distintas soluciones, react-router-dom es una de ellas.</p><br />
            <p>1- Corremos el comando de instalacion "npm install react-router-dom" </p>
            <p>2- Importamos el modulo y sus componentes dentro de nuestro proyecto desde el modulo react-router-dom (Tener en cuenta que si estamos desarrollando una aplicacion para celulares con React-native no nos va a servir la libreria react-router-dom ya que si estamos desarrollando una app estrictamente para moviles no contamos con un elemento DOM)</p><br />
            <p>Componentes:
              <ul><li>Browser Router - Este el componente padre, con este componente encapsulamos nuestra aplicacion para nuestras puedan funcionan dentro de el.</li>
              <li>Routes - Dentro de este componente van mis rutas, es decir que los componentes que busquemos renderizar dentro de nuestra aplicacion en una ruta particular deben ir envueltos con el componente Routes. Por ejemplo si nuestra navbar va a ser la misma a lo largo de toda la aplicacion va fuera de Routes.</li>
              <li>Route - Es el componente que debemos usar para cada ruta en particular y lleva dos parametros 'path' (donde creamos la ruta) y 'element' (donde vinculamos el componente que queremos renderizar en la ruta creada).</li>
              <li>Link - Son un equivalente a las etiquetas 'a', la diferencia es que este componente nos evita el refresh de la pagina que si nos ocaciona una etiqueta 'a', en los componentes Link no usamos 'href' sino que usamos un 'to' para indicar la ruta de renderizado del componente </li>
              <li>NavLink - Es practicamente igual al componente Link con la diferencia de que agrega una clase 'active' con la que podemos darle estilos al boton/link que llevo a la ruta para destacarla como ruta activa.</li></ul>
            </p>
            <p>Para importar:
              <ul><li>Para poder usar los componentes BrowserRouter, Routes, Route dentro de nuestra aplicacion es necesario importarlos desde 'react-router-dom' dentro de nuestro archivo App o el Main</li>
              <li>Y para poder usar los componentes Link y Navlink es necesario importar Link desde react-router-dom al componente donde sea requerido.</li>
              </ul>
            </p>
            <p>3- Definimos los parametros dinamicos. <br /> Dentro de nuestra aplicacion podemos tener tanto rutas estaticas como rutas dinamicas. <br />Para esto la libreria react-router-dom nos proporciona el Hook 'useParams'. Cuando definimos una ruta (en el parametro 'path' dentro del componente 'Route') podemos usar ':' + 'nombre de una variable' de esta manera react va a leer nuestra variable como un parámetro dinámico. </p>
            <p>Entonces ahora sabiendo que 'useParams' lee el parametro dinamico desde nuestra URL podemos filtrar el array que nos devuelve el fetch y renderizar solo los objetos que indiquemos en cada parametro dinamico dentro del componente indicado en el parametro 'element' de nuestro componente 'route'.</p>
            <p>Dentro del componente donde hacemos el fetch definimos una variable usando 'nombre de una variable' = useParams() </p>

            
          </Card.Text>
        </Card.Body>
        </Card> <br />
        </div>
  )
}

export default ClaseOcho
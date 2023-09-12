import React, {useEffect, useState} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ClaseSiete = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => {
      return res.json()
    })
    .then ((res) => {setData(res)})
    .catch((error) => {
      console.log(error);
    })

  }, []);



  return (
    <div>
      <Card className="mb-2">
        <Card.Header>CLASE 7 - Consumiendo APIs</Card.Header>
        <Card.Body>
          <Card.Title>Solicitud de informacion a un endpoint </Card.Title>
          <Card.Text>
            <p>Herramienta recomendada (Es una extension para Google Chrome) - React Developers Tools</p>
            <p>Modelo Cliente-Servidor <br /> Los navegadores web se comunican con los servidores usando el Protocolo de Transferencia de HyperTexto (HyperTextTransfer Protocol HTTP). Siempre que un cliente solicita informacion a un servidor la peticion se realiza siguiendo algun protocolo de transferencia de datos. <br /> Para que esta peticion se relice de manera efectiva debemos proveer al menos de dos cosas: <ul><li>La URL (el endpoint al que se accede)</li><li>Un metodo que define la accion segun la peticion que hagamos, GET, POST, DELETE o UPDATE.</li></ul>  </p>
            <p>La Fetch API nos permite acceder a recursos dentro de un servidor de manera asíncrona. Este tipo de peticiones nos permiten realizar solicitudes HTTP sin necesidad de recargar toda la página. <br /> Fetch utiliza promesas, es decir, que siempre que la usemos nos devolvera un objeto con dos métodos, uno then() y otro catch() a los que pasaremos una función que será invocada cuando se obtenga la respuesta o se produzca un error.</p>
            <p>Pero para poder obtener la informacion como la necesitamos tenemos que hacer uso de funciones que nos permitan transformar la respuesta en informacion manipulable (en este caso necesitamos traer un array de productos).</p>
            <p>.JSON es una funcion que nos va a permitir llegar a la info almacenada en la API en el formato en que la necesitamos. Pero esto no es suficiente ya que esta funcion nos devuelve otra promesa. <br /> Esto sucede porque el navegador desconoce cuanto tardara en resolver nuestra peticion, por lo que nos entrega una nueva promesa. </p>
            <p>Para resolver este problema, Javascript nos propone usar un 'return' de algo dentro del '.then' de esta forma el proximo '.then' va a interpretar que su rol es resolver la promesa anterior.</p>
            <p>Ahora si, despues de resolver la promesa y haber traido la info solicitada puedo guardarla en un state y  ejecutar un metodo map para poder renderizarla en el navegador.</p>
            <p>Fetch es quiza la forma mas sencilla de solicitar informacion, por defecto fetch es un metodo para obtener informacion es decir hacer un GET desde una URL especificada por nosotros.</p>
            <a href="http://fakestoreapi.com">fakestoreapi.com</a><br />
            <a href="http://rickandmortyapi.com">rickandmortyapi.com</a>
            </Card.Text>
        </Card.Body>
      </Card>
      <Row xs={1} md={3} className='g-4'>
        {data.map((producto)=>(
        <Col>
        <Card key={producto.id}>

          <Card.Img src={producto.image} width="100px" alt={producto.title} />
          <Card.Body>
            <Card.Title>
              {producto.title} 
            </Card.Title>
          </Card.Body>
        </Card>
        </Col>
        ))}
      </Row>
    </div>
  )
}

export default ClaseSiete
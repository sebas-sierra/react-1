import React from 'react';
import Card from 'react-bootstrap/Card';

const ClaseCuatro = () => {
  return (
    <div>
      <Card className="mb-2">
        <Card.Header>CLASE 4 - Componentes I - Props</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>Todos los componentes pueden enviar enviar y recibir PROPS de otro componente, las PROPS no sirven para dividir el codigo y generar una logica
            Recordar que al igual que en JS como a las funciones les puedo pasar informacion usando los parametros, en React puedo pasar PROPS a los Componentes
            Una PROP es un valor que se envia a un componente, es un par KEY - VALUE, en KEY coloco el nombre que le voy a dar a mi PROP y en VALUE le asigno el valor que va a guardar esa  KEY.
            A traves de una PROP puedo enviar a mi componente un array, un objeto, una funcion, un boleano, un numero, un string ó componentes.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ClaseCuatro
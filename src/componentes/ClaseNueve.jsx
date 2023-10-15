import React from 'react';

import Card from 'react-bootstrap/Card';
// import FormA from './FormA';

const ClaseNueve = () => {
  return (
    <div>
      <Card>
        <Card.Header>Clase 9 - Eventos / Formularios </Card.Header>
        
        <Card.Body>
          <Card.Title>Tipos de eventos</Card.Title>
          
          <Card.Text>
            <ul>
              <li>Automaticos - Los eventos se disparan con programacion en un momento 'X' determinado por el desarrollador.</li>
              <li>Manual - Interaccion del usuario con la UI.</li>
            </ul>

            <p>Podemos hablar de dos metodos de manipulacion de formularios dentro de React Js:</p>
            <ul>
              <li>Formularios con inputs no controlados.</li>
              <li>Formularios con inputs controlados (cada input necesita su propio estado).</li>
            </ul>
            <p>Para poder trabajar manejando los inputs de mi formulario de manera controlada tengo dos opciones, aplicar una o la otra depende de la cantidad de input que solicite al usuario a traves de mi UI.</p>
              <ul>
                <li>Si mi formulario tiene menos de 6 inputs seria suficiente con setear un estado para cada input de mi formulario</li>
                <li>En caso de mi formulario tenga mas de 6 inputs, lo mas adecuado seria poder setear un estado al que envie la info de mis inputs de forma dinamica</li>
              </ul> 
          
            
            {/* <FormA/> */}
            {/* <FormB/> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ClaseNueve
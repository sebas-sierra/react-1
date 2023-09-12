import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const EjemploState = () => {
    const [texto, setTexto] = useState('Eric');
    const cambiarTexto = () => {
        if (texto === 'Eric') {
            setTexto('Hola Mundo!');
        } else {
            setTexto('Eric');
        }

    };
    return (
    <>
        <Card.Title>- Hook useEffect | Ejemplo Cambiar Texto - Array de dependencias</Card.Title>
        <Card.Text>
        <Button variant="secondary" size="lg" disabled>{texto}</Button>
            <Button onClick={cambiarTexto} variant="primary">Cambiar Texto</Button>
        </Card.Text>
    </>
  );
};

export default EjemploState
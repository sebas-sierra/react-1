import React, {useState}  from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Contador = ({stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(1); 
    
    const sumar = () => {
        //cantidad < stock && setCantidad(cantidad + 1)

        //cantidad < stock ? setCantidad(cantidad + 1) : alert("No se puede seguir sumando cantidad")
        
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else (alert ("No se puede seguir sumando cantidad"))
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad(1)
    };

    return (
        <div>
            <Card className="mb-2">
                <Card.Header>Contador</Card.Header>
                <Card.Body>
                <InputGroup className="mb-3">
                    <Button disable={cantidad === stock} onClick={sumar} variant="outline-secondary">+</Button>
                    <Button onClick={reset} variant="outline-secondary">Reset</Button>
                    <Button onClick={restar} variant="outline-secondary">-</Button>
                    <Button onClick={() => { onAdd(cantidad) }} variant="outline-secondary">Agregar a mi carrito</Button>
                    <Form.Control
                        placeholder={cantidad}
                        aria-label="Recipient's username with two button addons"
                    />
                </InputGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contador
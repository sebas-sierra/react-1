import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    return (
        <Card key={producto.id}>
            <Card.Img variant="top" src={producto.img} alt={producto.title}></Card.Img>
            <Card.Body>
                <Card.Title>{producto.title}!</Card.Title>
                <Card.Text><p>${producto.price}.-</p></Card.Text>
                <Button href="productos/:categoryName" variant="outline-primary" size="sm">{producto.category}</Button>
                <Link to={`/claseseis/productos/itemdetail/${producto.id}`}>Ver detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default Item
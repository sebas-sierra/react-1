import React from 'react';
import Item from './Item';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({ items }) => {
    return (
        <>
            <Row xs={1} md={2} className='g-4'>
                {items.map((producto) => {
                    return (
                        <Col>
                            <Item producto={producto} key={producto.id} />
                        </Col>
                        )
                })}
            </Row>
        </>
    )
}

export default ItemList
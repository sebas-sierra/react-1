import React, {useState} from 'react';
import EjemploState from './EjemploState';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const ClaseCinco = ({stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(1); 
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
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
            <Card.Header>CLASE 5 - Componentes II - Estados y Ciclos de vida</Card.Header>
            <Card.Body>
                <Card.Text>
                    - Todos los eventos van con 'camelCase'<br />
                    - Cuando tengo que pasar parametros dentro de un elemento HTML en un evento onClick, si o si es necesario poner un callBack a la funcion para que no se ejecute automaticamente. Si no se necesita pasar parametros a la funcion, entonces no hay que usar callBack.<br />
                    - Los estados van a permitirme persistir informacion dentro de un componente mientras este visible en pantalla o hasta que actualice mi navegador. Cada componente posee como una especie de memoria interna, distinta al localStorage o una base de datos.<br />
                    - Cada vez que haya un cambio de estado, un cambio de prop o un evento que dispare un cambio de estado o de prop mi componenete se volvera a renderizar.<br />
                    - Para modificar un elemento de mi componente con una interaccion, debemos asignar un estado al elemento para que refleje la modificacion para esto usamos el hook useState(). Dicha modificacion se hace usando la funcion seteadora 'setState' que hace de puente entre nuestra funcion y el estado de mi elemento.<br />
                </Card.Text>

                <Card.Title>- Hook useState | Ejemplo Contador - </Card.Title>
                <InputGroup className="mb-3">
                    <Button disable={cantidad === stock} onClick={sumar} variant="outline-secondary">+</Button>
                    <Button onClick={reset} variant="outline-secondary">Reset</Button>
                    <Button onClick={restar} variant="outline-secondary">-</Button>
                    <Button onClick={() => { onAdd(cantidad) }} variant="outline-secondary">Agregar al carrito</Button>
                    <Form.Control
                        placeholder={cantidad}
                        aria-label="Recipient's username with two button addons"
                    />
                </InputGroup>
                
                <Card.Text>
                    - Los componentes y sus ciclos de vida, esto abarca el proceso a traves del cual un componente se monta (se renderiza en pantalla), se actualiza (se vuelve a renderizar debido a un cambio de PROP o de estado) y se desmonta.
                </Card.Text>
                
                <EjemploState/>
                <Card.Text>
                    El hook useEffect sirve para ejecutar codigo despues del renderizado de mi componente, su funcionamiento es similar al metodo 'asincronia' de JS, pero no lo es. Me sirve para escribir codigo que se tienen que ejecutar luego del renderizado de mi componente.<br/><br/>
                    El Hook useEffect() que recibe dos parametros: - uno es una funcion de callBack - y el otro (que puede ir o no) es un array de dependencias, que puede estar vacio o no. Si el array NO EXISTE, la funcion callBack se ejecuta cada vez que se renderiza el componente. Si el Array esta vacio se ejecutara solo UNA vez. y si el array de dependencias incluye la dependencia, entonces se ejecutara cada vez que detecte un cambio de estado en ella.<br/><br/>
                    Todo el codigo dentro del hook useState ejecuta despues del render de mi componente, se comporta como algo similar a las llamadas asincronicas<br/>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ClaseCinco
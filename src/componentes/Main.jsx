import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ClaseTres from "./ClaseTres";
import ClaseCuatro from "./ClaseCuatro";
import ClaseCinco from "./ClaseCinco";
import ClaseSeis from "./ClaseSeis";
import ClaseSiete from "./ClaseSiete";
import ClaseOcho from "./ClaseOcho";
import ClaseNueve from './ClaseNueve';
import PokeApi from "./PokeApi";
import ItemDetailContainer from "./ItemDetailContainer";
import Contador from "./Contador";
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom'; 
import ItemListContainer from './ItemListContainer';

const Main = () => {

  const onAdd = (cantidad) => {
    console.log('Funciona' + cantidad + "unidades");
  }
  
  //console.log(props);
  return (
      <Container className='main'>
        <Row>
          <Col sm={8}>
            <Routes>
              <Route path='/clasetres' element={<ClaseTres/>} saludo="HOLA, Soy un titulo!!"/>
              <Route path='/clasecuatro' element={<ClaseCuatro/>} />
              <Route path='/clasecinco' element={<ClaseCinco/>}  stock={10} onAdd={onAdd}/>
              <Route path='/claseseis/' element={<ClaseSeis/>} >
                <Route path='productos' element={ <ItemListContainer/> } />
                <Route path='productos/:categoryName' element={ <ItemListContainer/> } />
                <Route path='productos/itemdetail/:idProd' element={ <ItemDetailContainer/> } />
                  {/* <Route path='furniture' element={ <p>Furniture</p> } />
                  <Route path='decoracion' element={ <p>Decoracion</p> } />
                  <Route path='mesas' element={ <p>Mesas</p> } /> */}
              </Route>            
              <Route path='/clasesiete' element={<ClaseSiete/>} />
              <Route path='/claseocho' element={<ClaseOcho/>} />
              <Route path='/clasenueve' element={<ClaseNueve/>} />
              <Route path='/pokeapi' element={<PokeApi/>} />
              <Route path='/itemdetail' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Col>
          
          <Col sm={4}>
            <Contador stock={10} onAdd={onAdd}/>
          </Col>
          
        </Row>
      </Container>
  )
}

export default Main
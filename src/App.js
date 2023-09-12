//import logo from './logo.svg';
//importar la hoja de css
//import './App.css';

//importar la hoja de sass
import './styles.scss';

//importar la libreria de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

import { BrowserRouter } from 'react-router-dom';

import CartProvider from './context/CartContext';


const App = () => {
  return (
  <BrowserRouter>
  <CartProvider>
    <Header />
    <Main/>
    <Footer/>
    </CartProvider>
  </BrowserRouter>
  )

}

export default App;
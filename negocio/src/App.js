import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import { CartProvider} from './context/CartContext';





function App() {
  return(
    <div className="App">
      <BrowserRouter> 
      <CartProvider>
      <Navbar/> 
      <Routes>
      <Route path='/' element={<ItemlistContainer greeting={<h1 className='titulo'>Todos Nuestros Productos</h1>} />}/>
      <Route path='/category/:categoryId'element={<ItemlistContainer greeting={<h2 className='titulo'>Productos Por Categoria</h2>}/>}/>
      <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
 
  
}

export default App;

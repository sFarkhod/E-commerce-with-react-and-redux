import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route, Routes} from 'react-router-dom'
import Product from './component/Product';
import Products from './component/Products';
import Cart from './component/Cart';


function App() {

  // fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(json=>console.log(json)
  // )

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;

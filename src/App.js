import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Items />}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Cart from "./Cart/Cart"
import Favour from './Favour/Favour';
// import Profile from "Profile/Profile"


import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [showPanel, setShowPanel] = useState(false);
  const [openCart, SetOpenCart] = useState(true)
  const [cart, SetCart] = useState([]);


  // function addProdToCart(newProd) {
  //   setCart(prev => [...prev, newProd]);
  // }


  function addProdToCart(newProd) {

    let alreadyAdded = false

    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == newProd.id) {
            alreadyAdded = true
        }

    }

    if (!alreadyAdded) {

        
        SetCart(prev => [...prev, newProd])

    }
    else {
        SetCart(cart.filter(p => p.id !== newProd.id));
    }
}

  return(
  <>
  <div className='MainApp'>
    <Cart onCloseCart={() =>  SetOpenCart(false)} openCart={openCart} cart={cart} />
    <Header onOpenCart={() => SetOpenCart(true)} openCart={openCart} cart={cart} />
    <Routes>
        <Route path='/' element={<><Main addProdToCart={(newProd) => addProdToCart(newProd)} /></>}></Route>

        <Route path='/favour' element={<><Favour /></>}></Route>
        {/* <Route path='/prof' element={<Profile/>}></Route> */}
    </Routes>
    
    
  </div>
  
    
  </>
  )
}
export default App;
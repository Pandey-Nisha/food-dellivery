import React, { lazy,Suspense, useState } from 'react'
import Navbar from './Component/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder';
import Home from './Pages/Home/Home';
// import Login from './Component/Login/Login';
const Login = lazy(() => import ('./Component/Login/Login'))


const App = () => {

  const [showLogin, setShowLogin] = useState(false) ;
  return (
  <>
   {showLogin?<Suspense fallback ={<div>Loading...</div>}> <Login setShowLogin = {setShowLogin}/> </Suspense>: <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/cart' element= {<Cart/>} />
        <Route path='/placeorder' element= {<Placeorder/>} />
      </Routes>
      
    </div>
  </>
  )
}

export default App

import React from 'react'
import Navbar from '../navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home.jsx';
import RestaurantDetails from '../restaurant/RestaurantDetails.jsx';
import Cart from '../cart/Cart.jsx';
import Profile from '../profile/Profile';

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default CustomerRoute
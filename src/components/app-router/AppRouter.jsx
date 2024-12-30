import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Grocery from '../navComponents/Grocery'
import Mobile from '../navComponents/Mobile'
import Fashion from '../navComponents/Fashion'
import Electronics from '../navComponents/Electronics'
import HomeFurniture from '../navComponents/HomeFurniture'
import Appliances from '../navComponents/Appliances'
import FlightBooking from '../navComponents/FlightBooking'
import Beauty from '../navComponents/Beauty'
import TwoWheelers from '../navComponents/TwoWheelers'
import ProductDetail from '../navComponents/productDetail/ProductDetail'
const AppRouter = () => {
  return (
    <Routes>
        <Route path='/grocery' element={<Grocery/>}/>
        <Route path='/grocery/:id' element={<ProductDetail/>} />

        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/mobile/:id' element={<ProductDetail/>} />

        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/fashion/:id' element={<ProductDetail/>} />

        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/electronics/:id' element={<ProductDetail/>} />

        <Route path='/home&furniture' element={<HomeFurniture/>}/>
        <Route path='/home&furniture/:id' element={<ProductDetail/>} />

        <Route path='/appliances' element={<Appliances/>}/>
        <Route path='/appliances/:id' element={<ProductDetail/>} />

        <Route path='/flight-booking' element={<FlightBooking/>}/>
        <Route path='/flight-booking/:id' element={<ProductDetail/>} />

        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/beauty/:id' element={<ProductDetail/>} />

        <Route path='/two-wheelers' element={<TwoWheelers/>}/>
        <Route path='/two-wheelers/:id' element={<ProductDetail/>} />
    </Routes>
  )
}

export default AppRouter
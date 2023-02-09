import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Cart from '../Components/Cart/Cart';
import Home from '../Components/Homepage/Home';
import Login from '../Components/Login/Login';
import MobileAcc from '../Components/Acc/MobileAcc';
import MensData from '../Components/Men/MensData';
import SingleProductPage from '../Components/Men/SingleProductPage';
import WomenHome from '../Components/WomensData/WomenHome';
import WomensData from '../Components/WomensData/WomensData';
import OrderSuccessfull from '../Payment/OrderSuccessfull';
import PaymentForm from '../Payment/PaymentForm';
import PrivateRoute from './PrivateRoute';

function Routs() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/WomenHome' element={<WomenHome/>} />
        <Route  path='/MensData' element={ <PrivateRoute><MensData/></PrivateRoute> } />
        <Route path='/WomensData' element={<PrivateRoute><WomensData/></PrivateRoute>}/>
        <Route path='/MobileAcc' element={<MobileAcc/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path ='/Cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path='/checkout/payment' element={<PrivateRoute><PaymentForm/></PrivateRoute>} />
        <Route path='/OrderSuccessfull' element={<PrivateRoute><OrderSuccessfull/></PrivateRoute>}/>
        <Route path='/register' element={<h1>REGISTER PAGE</h1>} />
      </Routes>
      
    </div>
  )
}

export default Routs;

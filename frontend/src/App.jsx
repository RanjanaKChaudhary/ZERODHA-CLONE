import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './landing_pages/Navbar'
import HomePage from './landing_pages/home/HomePage'
import SignUp from './landing_pages/signup/SignUp'
import AboutPage from './landing_pages/about/AboutPage'
import ProductPage from './landing_pages/product/ProductPage'
import PricingPage from './landing_pages/pricing/PricingPage'
import SupportPage from './landing_pages/support/SupportPage'
import Footer from './landing_pages/Footer'
import NotFound from './landing_pages/NotFound'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/about' element={<AboutPage/>}/>
             <Route path='/product' element={<ProductPage/>}/>
             <Route path='/pricing' element={<PricingPage/>}/>
             <Route path='/support' element={<SupportPage/>}/>
             <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
};
export default App

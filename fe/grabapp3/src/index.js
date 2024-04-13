import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import App from './Detail/App.js';
import  Head from './head/head.js'
import End from './end/end.js'
import Home from './Home/Index.js';
import Listch from './listch/listch.js';
import Checkout from './checkout/Checkouts.js'

function Appss(){
  return(
<div>
  <BrowserRouter>
  <Head/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/App' element={<App/>}/>
    <Route path='/Listch' element={<Listch/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
  </Routes>
  <End/>
  </BrowserRouter>
</div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Appss />);


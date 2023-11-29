import React from 'react';
import './App.css';
import './css/Home.css';
import { Routes, Route } from 'react-router-dom';
import Home from './port/Home.jsx';
import Aboud from './port/aboud.jsx';
import Html from './port/tarix/html';
import Css from './port/tarix/css';
import Js from './port/tarix/js';
import Treact from './port/tarix/Treact.jsx';
import Portfolio from './port/portfolio.jsx';
import Cantact from './port/cantact.jsx';
const App = () => {
  return (  
    <React.Fragment>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/aboud' element={<Aboud/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/js' element={<Js/>}/>
        <Route path='/treact' element={<Treact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/cantact' element={<Cantact/>}/>
      </Routes>      
    </React.Fragment>
  );
}

export default App

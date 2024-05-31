import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import PassChange from "./components/PassChange";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/password-change' element={<PassChange/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

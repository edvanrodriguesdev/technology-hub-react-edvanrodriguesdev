
import { GlobalStyle } from './styles/global';
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';


function App() {



  return (
    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='dashboard' element={ <Dashboard /> } />
        <Route path='*' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;

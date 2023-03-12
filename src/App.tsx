import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Page1 from './page1';
import Page2 from './page2';
import Navbar from './navbar';
import TableTree from './tableTree';

function App() {
  return (
    <div>
      <Navbar/>
      <HashRouter>
        <Routes>
          <Route path='p1' element={<Page1/>} />
          <Route path='p2' element={<Page2/>} />
          <Route path='table' element={<TableTree/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

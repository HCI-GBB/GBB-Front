//App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Nickname from './components/Nickname';


function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/nickname' element = {<Nickname />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

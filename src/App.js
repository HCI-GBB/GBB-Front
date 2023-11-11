//App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Nickname from './components/Nickname';
import Hobby from './components/Hobby';
import Result from './components/Result';
import ResultDetail from './components/ResultDetail';


function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/nickname' element = {<Nickname />} />
        <Route path='/hobby' element = {<Hobby />} />
        <Route path='/result' element = {<Result/>}/>
        <Route path='/resultdetail' element = {<ResultDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

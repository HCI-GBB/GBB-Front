// Topbar.js(GOOD OR BAD GBB IN BRAIN 상단 로코 컴포넌트)
import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className='Topbar'>
        <div className='logo'>
            <Link to="/">   
            <span id ='GOOD'>GOOD </span>
            <span id = 'orBAD'>or BAD</span>   
            <br></br>
            <span id = 'GBB'>GBB</span>
            <br></br>
            <span id = 'inBrain'>in Brain</span>
            </Link>
        </div>
    </div>
  );
};

export default Topbar;

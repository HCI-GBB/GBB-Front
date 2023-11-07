//Main.js
import React from 'react';
import Topbar from '../common/Topbar';
import './Main.css';
import {Link} from 'react-router-dom';

const Main = () => {
  return (
    <div className='Main'>
        <Topbar />
      <div className='header'>GOOD or BAD in Brain</div>
      <div className='subheader'>뇌파 기반 취미 추천 서비스</div>

      <nav>
        <Link to="/nickname">
            <div className='gonickname'>바로 사용해보기</div>
        </Link>
    </nav>
    </div>


  );
};

export default Main;

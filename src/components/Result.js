import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../common/Topbar';
import './Result.css';
import BottomLink from '../common/BottomLink';

const Result = () => {
  // localStorage에서 memberId와 nickname 가져오기
  const nickname = window.localStorage.getItem('nickname');

  return (
    <div>
      <Topbar />

      {/* 사용자의 닉네임을 표시 */}
      <p id="resultnickname">{nickname} 님의 취미를 측정 중입니다.</p>
      
      <img 
        src={process.env.PUBLIC_URL + '/Spinner-1s-200px.gif'} 
        alt='Brainimg'
        style={{
          position: 'absolute',
          left: '50%',
          top: '65%',
          transform: 'translate(-50%, -50%)',
          width: '500px', 
          height: '500px', 
        }}
      />
     
      <Link to="/resultdetail">
        <button className="goresultdetail">
          다음
        </button>
      </Link>

      <BottomLink />
    </div>
  );
};

export default Result;

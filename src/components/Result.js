//Result.js(취미측정중 페이지)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../common/Topbar';
import './Result.css';
import BottomLink from '../common/BottomLink';

const Result = () => {
  // localStorage에서 memberId와 nickname 가져오기
  const nickname = window.localStorage.getItem('nickname');
  const navigate = useNavigate();

  //다음페이지 넘어가기
  const navigateToResultDetail = () => {
    navigate('/resultdetail');
  };
  //1분 후에 다음페이지로 넘어가도록
  setTimeout(navigateToResultDetail, 60000);

  return (
    <div>
      <Topbar />

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
     


      <BottomLink />
    </div>
  );
};

export default Result;

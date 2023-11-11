//Hobby.js
import React, { useState } from 'react';
import Topbar from '../common/Topbar';
import HobbyList from '../common/HobbyList';
import './Hobby.css';
// import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import BottomLink from '../common/BottomLink';

function Hobby() {
  const navigate = useNavigate();
  const [goodHobbies, setGoodHobbies] = useState([]);
  const [badHobbies, setBadHobbies] = useState([]);

  //다음 버튼 클릭 시 실행되는 함수(백엔드와 연결예정)
  const handleNextClick = () => {
    // axios.post('/api/Hobbyendpoint', { goodHobbies, badHobbies })
    //   .then(response => {
    //     console.log('데이터 전달 성공', response.data);
    //      navigate(`/result?nickname=${response.data.nickname}&goodHobbies=${goodHobbies.join(',')}&badHobbies=${badHobbies.join(',')}`);
    //   })
    //   .catch(error => {
    //     console.error('에러', error);
    //   });


    // 백엔드 연결 전 가상의 navigate(백엔드 연결 시 삭제)
    navigate('/result');
  };

  return (
    <div>
      <Topbar />
      <div className='goodhobby'>좋아하는 취미를 고르세요(최대 4개)</div>
      <div className='goodhobbylist'>
        <HobbyList setHobbies={setGoodHobbies} />
      </div>
      <div className='badhobby'>싫어하는 취미를 고르세요(최대 4개)</div>
      <div className='badhobbylist'>
        <HobbyList setHobbies={setBadHobbies} />
      </div>

      <button className="buttonnext" onClick={handleNextClick}>
        다음
      </button>

      <BottomLink />
    </div>
  );
}

export default Hobby;

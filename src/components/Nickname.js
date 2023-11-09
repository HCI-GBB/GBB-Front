// Nickname.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Topbar from '../common/Topbar';
//import axios from 'axios';  백엔드랑 연결할 때 주석 풀 예정
import './Nickname.css';
import BottomLink from '../common/BottomLink';

function Nickname() {
  const [nickname, setNickname] = useState('');

  const handleCheckDuplicate = async () => {
    try {
      // 닉네임이 비어있을 경우
      if (!nickname.trim()) {
        alert('닉네임을 입력하세요.');
        return;
      }

      // 백엔드와 연결예정
      //const response = await axios.post('http://your-backend-api/check-nickname', { nickname });

      // 백엔드 연결 전 가상 랜덤 응답 데이터 (실제 백엔드와 통합할 때 주석 처리할거임)
      const response = { data: { isDuplicate: Math.random() < 0.5 } };

      if (response.data.isDuplicate) {
        alert('중복된 닉네임입니다. 새로운 닉네임을 입력해주세요.');
      } else {
        alert('사용가능한 닉네임입니다.');
      }

    } catch (error) {
      console.error('서버 요청 오류:', error);
      alert('서버 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='Nickname'>
      <Topbar />

      <div className='Nicknameinput'>닉네임을 입력하세요</div>

      <input
        className='Nicknametext'
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      
      <button className="repeatcheckbutton" onClick={handleCheckDuplicate}>
        중복확인
      </button>
      
      <Link to="/hobby">
        <button className="gohobbybutton" disabled={!nickname.trim()}>
          뇌파측정하러가기
        </button>
      </Link>

      <BottomLink />
    </div>
  );
}

export default Nickname;


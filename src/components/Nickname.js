import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Topbar from '../common/Topbar';
import axios from 'axios';
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

      // (백엔드와 연결) 닉네임 Post
      const response = await axios.post('http://13.125.90.6:8080/api/v1/login', 
        { 
          'nickname' : nickname 
        }
      );

      // 받아온 memberId와 nickname를 localStorage에 저장
      window.localStorage.setItem('memberId', response.data.memberId);
      window.localStorage.setItem('nickname', response.data.nickname);
  
      // 백엔드에서 반환하는 데이터 확인
      console.log(response.data);
      console.log('HTTP 응답 코드:', response.status);

      if (response.data.isDuplicate) {
        alert('중복된 닉네임입니다. 새로운 닉네임을 입력해주세요.');
      } else {
        alert('사용가능한 닉네임입니다.');
      }

    } catch (error) {
      console.error('서버 요청 오류:', error);
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

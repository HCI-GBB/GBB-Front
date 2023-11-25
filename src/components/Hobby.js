import React, { useState, useEffect } from 'react';
import './Hobby.css';
import Topbar from '../common/Topbar';
import BottomLink from '../common/BottomLink';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Hobby = () => {
  const [likes, setLikes] = useState([]);
  const [hates, setHates] = useState([]);
  const navigate = useNavigate();

  const hobbies = [
    '책 읽기',
    '음악감상',
    '운동',
    '게임',
    'OTT 시청',
    '춤 추기',
    '코딩',
    '쇼핑',
    '사진 찍기',
    '수다 떨기'
  ];

  const handleHobbyClick = (hobby, selectedHobbies, setSelectedHobbies) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((selected) => selected !== hobby));
    } else if (selectedHobbies.length < 2) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const handleNextClick = () => {
    // 선택한 좋아하는 취미와 싫어하는 취미를 서버로 전송

  const memberId=2;
  
    axios({
      method: 'post',
      url: 'http://13.125.90.6:8080/api/v1/hobby',
      data: {
        likes : likes,
        hates: hates
      }, 
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'memberId' : memberId
      }
    })
      .then((response) => {
        console.log('취미 정보가 성공적으로 전송되었습니다.');
        // navigate를 사용하여 다음 페이지로 이동
        navigate('/result');
      })
      .catch((error) => {
        if(error.response){
          console.error('취미 정보 전송 중 요류 발생');
        }
      });
    }

  useEffect(() => {
    // 좋아하는 취미 상태를 사용하여 원하는 작업 수행
    console.log('선택된 좋아하는 취미:', likes);
  }, [likes]);

  useEffect(() => {
    // 싫어하는 취미 상태를 사용하여 원하는 작업 수행
    console.log('선택된 싫어하는 취미:', hates);
  }, [hates]);

  return (
    <div>
      <Topbar />

      {/* 좋아하는 취미 선택 */}
      <div className='goodhobby'>
        <h2>좋아하는 취미를 선택하세요</h2>
        <div className='goodhobbylist'>
          <div className="hobby-container">
            {hobbies && hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`hobby-item ${likes.includes(hobby) ? 'selected' : ''}`}
                onClick={() => handleHobbyClick(hobby, likes, setLikes)}
              >
                {hobby}
              </div>
            ))}
          </div>
        </div>
        <div className='selectgoodhobby'>
          <p>선택된 좋아하는 취미: {likes.join(', ')}</p>
        </div>
      </div>

      {/* 싫어하는 취미 선택 */}
      <div className='badhobby'>
        <h2>싫어하는 취미를 선택하세요</h2>
        <div className='badhobbylist'>
          <div className="hobby-container">
            {hobbies && hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`hobby-item ${hates.includes(hobby) ? 'selected' : ''}`}
                onClick={() => handleHobbyClick(hobby, hates, setHates)}
              >
                {hobby}
              </div>
            ))}
          </div>
        </div>
        <div className='selectbadhobby'>
          <p>선택된 싫어하는 취미: {hates.join(', ')}</p>
        </div>
      </div>

      {/* 다음 버튼 */}
        <button className='buttonnext' onClick={handleNextClick}>다음</button>

      <BottomLink />
    </div>
  );
};

export default Hobby;

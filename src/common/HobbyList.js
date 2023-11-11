// HobbyList.js
import React, { useState, useEffect } from 'react';
import './HobbyList.css';

const HobbyList = ({ setHobbies }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const hobbies = [
    '책 읽기',
    '음악감상',
    '운동',
    '청소',
    'OTT 시청',
    '춤 추기',
    '낮잠',
    '노래부르기',
    '테마파크 가기',
    '수다 떨기',
    '게임',
    '영화감상',
    '여행',
    '사진 찍기',
    '설거지 하기',
  ];

  //취미 선택 시 사용될 함수
  const handleHobbyClick = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((selected) => selected !== hobby));
    } else if (selectedHobbies.length < 4) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  // 선택한 취미 부모컴포넌트에게 전달
  useEffect(() => {
    // setHobbies(selectedHobbies); //백엔드 연결 시 주석 해제
  }, [selectedHobbies, setHobbies]);

  return (
    <div>
      <div className="hobby-container">
        {hobbies && hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`hobby-item ${selectedHobbies.includes(hobby) ? 'selected' : ''}`}
            onClick={() => handleHobbyClick(hobby)}
          >
            {hobby}
          </div>
        ))}
      </div>
      <div className='selecthobby'>
        <p>선택된 취미: {selectedHobbies.join(', ')}</p>
      </div>
    </div>
  );
};

export default HobbyList;

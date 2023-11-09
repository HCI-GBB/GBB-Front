// Hobby.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Hobby() {
  // useParams를 사용하여 URL에서 닉네임 값을 받아옴
  const { nickname } = useParams();

  return (
    <div>
      <h1>{nickname}님의 취미 페이지</h1>
      <p>취미페이지</p>
    </div>
  );
}

export default Hobby;

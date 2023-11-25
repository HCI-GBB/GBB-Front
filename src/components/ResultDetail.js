import React, { useEffect, useState } from 'react';
import Topbar from '../common/Topbar';
import BottomLink from '../common/BottomLink';
import axios from 'axios';
import './ResultDetail.css';

const ResultDetail = () => {
  const nickname = window.localStorage.getItem('nickname');
  const memberId = 1;
  //const [priorityHobby, setPriorityHobby] = useState('');
  const [data, setData] = useState(null); 

  useEffect(() => {
    const hobbyId = 23;

    axios.get(`http://13.125.90.6:8080/api/v1/result/${hobbyId}`, {
      headers: {
        'Content-Type': 'application/json',
        'memberId': memberId,
      },
      params: {
        hobbyId : hobbyId,
      },
    })
    .then((response) => {
      console.log('서버에서 성공적으로 가져왔습니다.');
      console.log('HTTP 응답코드 :',response.status);
      setData(response.data.data); 
      //setPriorityHobby(response.data.data.interest[0]); 
    })
    .catch((error) => {
      if (error.response) {
        console.error("서버에서 정보 가져오던 중 오류 발생:", error.response.data);
      }
    });
  }, [memberId]);

  return (
    <div>
      <Topbar />
      <div className='explanation'>
      📌 자신이 흥미를 느끼는 것에 몰입하는 것은 집중력과 별로 관계가 없다고 합니다.<br></br>
        흥미를 덜 느끼더라도 꼭 해야 하는 일에 집중할 수 있고, 그 상태가 지속되어야 "집중력이 있다"고 말할 수 있습니다.<br></br>
        GBB는 흥미와 집중력을 구분해서 사용자의 취미활동을 분석해줍니다.
      </div>

      <p id="resultdetailnickname">{nickname}(님)에게 가장 적합한 취미는 입니다.</p>

      {/* 내가 흥미를 느끼는 취미 활동 */}
      <img
        src={process.env.PUBLIC_URL + '/brainimg.png'}
        alt='Brainimg'
        style={{ position: 'absolute', left: '9%', top: '334px' }}
      />
      <div className='detailselectbrainhobby'>
        <span id="selectbrain">내가 흥미</span>를 느끼는 취미 활동
      </div>

      <ul>
        {data && data.interest.map((interest, index) => (
          <li key={index}>{interest} ({data.interest_percent[index]}%)</li>
        ))}
      </ul>


      {/* 내가 집중할 수 있는 취미 활동 */}
      <img
        src={process.env.PUBLIC_URL + '/brainimg.png'}
        alt='Brainimg'
        style={{ position: 'absolute', left: '54%', top: '334px' }}
      />
      <div className='detailfocusbrainhobby'>
        <span id="focusbrain">내가 집중</span>할 수 있는 취미 활동
      </div>

      <ul>
        {data && data.focus.map((focus, index) => (
          <li key={index}>{focus} ({data.focus_percent[index]}%)</li>
        ))}
      </ul>

      <BottomLink />
    </div>
  );
};

export default ResultDetail;






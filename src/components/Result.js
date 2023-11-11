// Result.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import axios from 'axios'; 
import Topbar from '../common/Topbar';
import './Result.css';
import BottomLink from '../common/BottomLink';

const Result = () => {
  const location = useLocation();
  const [nickname, setNickname] = useState('');
  const [goodHobbies,setGoodHobbies] = useState([]);
  const [badHobbies,setBadHobbies] = useState([]);
  const [brain, setBrain] = useState(null);

  useEffect(() => {
    const fetchNickname = async () => {
      try {

        /* (백엔드와 연결 예정)
        //백엔드에서 닉네임 가져오기
        const nicknameresponse = await axios.get('http://ybackendapi/getnicknameendpoint', {
            params: {
                nickname: new URLSearchParams(location.search).get('nickname'),
            },
        });
        const retrievedNickname = nicknameresponse.data.nickname;
        setNickname(retrievedNickname);

        //백엔드에서 내가 선택한 취미 가져오기
        const hobbyresponse = await axios.get('http://backendapi/gethobbyendpoint' , {
            params: {
                nickname: retrievedNickname,
            },
        });
        const retrievedHobbies = hobbiesResponse.data;
        setGoodHobbies(retrievedHobbies.goodHobbies);
        setBadHobbies(retrievedHobbies.badHobbies);
        console.log('좋아하는 취미와 싫어하는 취미 데이터 가져오기 성공');

        //백엔드에서 뇌가 반응한 취미 가져오기
        const brainresponse = await axios.get('http://backendapi/getbrainendpoint' , {
            params: {
                nickname :retrievedNickname,
            },
        });
        const retrievedBrain = brainresponse.data.brain;
        setBrain(retrievedBrain);
        console.log('뇌가 반응하는 취미 데이터 가져오기 성공');
        */ 
        
        //닉네임,취미 가져오기 오류처리
        } catch (error) {
            console.error('에러:', error);
        }
    };

    fetchNickname();
  }, [location]);


  return (
    <div>
      <Topbar />

      <p id ="resultnickname"> {nickname} (님) 테스트결과는 다음과 같습니다.</p>
      <div className='selectmehobby'>
        <span id = "selectme">내</span>가 선택한 취미 활동
      </div>
      <div>
        <span id = "selectgood">좋아하는</span>
            <div className='selectgoodlist'>
                {goodHobbies && goodHobbies.map((goodhobby, index) => (
                    <span key = {index}>{goodhobby}</span>
                ))}
            </div>
        <span id = "selectbad">싫어하는</span>
            <div className='selectbadlist'>
                    {badHobbies && badHobbies.map((badhobby, index) => (
                        <span key = {index}>{badhobby}</span>
                    ))}
            </div>
      </div>

      <div className='versus'>VS</div>

      <img 
        src={process.env.PUBLIC_URL + '/brainimg.png'} 
        alt='Brainimg'
        style={{position: 'absolute', right: '510px', top: '280px'}}/>
      <div className='selectbrainhobby'>
        <span id = "selectbrain">뇌</span>가 반응한 취미 활동
            <div className='selectedbrainlist'>
                    {brain && brain.map((brainactivity, index) => (
                        <span key = {index}>{brainactivity}</span>
                    ))}   
            </div>
      </div>

      <Link to="/resultdetail">
        <button className="goresultdetail">
          나에게 맞는 취미 보러가기
        </button>
      </Link>

      <BottomLink />
    </div>
  );
};

export default Result;


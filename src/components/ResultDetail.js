//ResultDetail.js
import React, {useEffect, useState} from 'react';
import Topbar from '../common/Topbar';
import BottomLink from '../common/BottomLink';
//import axios from 'axios';
import './ResultDetail.css';



const ResultDetail = () => {
    const [nickname, setNickname] = useState('');
    const [brain, setBrain] = useState(null);

    useEffect(() => {
        const fetchNickname = async () => {
          try {

            /* 백엔드와 연결예정
            // 닉네임 가져오기
            const nicknameresponse = await axios.get('http://backendapi/getnicknameendpoint');
            const retrievedNickname = nicknameresponse.data.nickname;
            setNickname(retrievedNickname);
            console.log('닉네임 데이터 가져오기 성공:', retrievedNickname);

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

          } catch (error) {
            console.error('에러:', error);
          }
        };
        fetchNickname();
    }, []); 



  return (
    <div>
      <Topbar />

      <p id ="resultdetailnickname"> {nickname}(님)에게 가장 적합한 취미는 (가장 우선순위 취미) 입니다.</p>
      
      <img 
        src={process.env.PUBLIC_URL + '/brainimg.png'} 
        alt='Brainimg'
        style={{position: 'absolute', left: '169px', top: '334px'}}/>
      <div className='detailselectbrainhobby'>
        <span id = "selectbrain">뇌</span>가 반응한 취미 활동
            <div className='selectedbrainlist'>
                    {brain && brain.map((brainactivity, index) => (
                        <span key = {index}>{brainactivity}</span>
                    ))}   
            </div>
      </div>

      <BottomLink />
    </div>
  );
};

export default ResultDetail;



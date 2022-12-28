import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//커스터마이징 스타일
import './css/soye.scss';
//라우터
import { BrowserRouter } from 'react-router-dom';

//script의 경우 랜더링의 시간이 랜덤. React는 render를 한번 더 돌려서 강제로 삽입시켜줌

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

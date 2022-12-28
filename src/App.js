import logo from './logo.svg';
import './App.css';
import Notice from './component/Notice';
import noticeDb from './data/notice.json';

/*
function App() {
  return (
    <div className="App">
       컴포넌트 자바스크립트실행문!! 옵션 매개인자로 인식
      <Notice title='공지사항' contents ={['공지사항' , '공지사항2']}></Notice>
      <Notice title='문의알림' contents ={['문의드립니다' , '재문의' , '감사합니다.']}></Notice>
      <Notice title='견적리스트' contents ={['Arr말고 obj로 해야하는데..']} ></Notice>
    </div>
  );
}*/


//json 사용하기

function App() {

  const noticejs = noticeDb; //json은 컴포넌트가 아닌 DB파일이므로 return에 바로 사용

  return (
    <div className="App">
       {/* 컴포넌트 자바스크립트실행문!! 옵션 매개인자로 인식 */}
      <Notice title = {noticejs.title} 
      cls = {noticejs.cls}
      contents = {noticejs.content}></Notice>
    </div>
  );
}


export default App;

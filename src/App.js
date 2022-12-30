/*import logo from './logo.svg';*/
/*
import Notice from './component/Notice';
import noticeDb from './data/notice.json';
import './App.css';
import logo from './img/logo.svg';*/




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


/*
function App() {

  const noticejs = noticeDb; //json은 컴포넌트가 아닌 DB파일이므로 return에 바로 사용

  return (
    <div className="App">
    
        컴포넌트 자바스크립트실행문!! 옵션 매개인자로 인식 
      <Notice title = {noticejs.title} 
      cls = {noticejs.cls}
      contents = {noticejs.content}></Notice>
    </div>
  );
}*/

/*
function App() {

  return (
    <div className="App">
    
    부트스트랩의 그리드 시스템을 활용해서 빠른 제작구현
    <header id="hd" className="fixed-top border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center"> {/*fluid = 아무리커져도 옆으로만 커지고 작아져라_옆에 붙어서 반응형
        <h1 className='col-2 mx-auto mx-md-0'>
          <a hreft='#top'>
            <img src={logo}/>
          </a>
        </h1>
        d-none d-md-flex -> 작은 사이즈(모바일)때 안나오고 768사이즈에 나타남
        <ul id="gnb" className="d-flex font20 fw600 mb-0 d-none d-md-flex ">
          <li className='px-1'><a href="#about">인물탐방</a></li>
          <li className='px-1'><a href="#portfolio">작업들</a></li>
          <li className='px-1'><a href="#contact">연락</a></li>
          <li className='px-1'><a href="#printerview">사전인터뷰</a></li>
        </ul>
        <a href="https://github.com/soyeya" target="_blank" className="git btn bgActive text-white">Gif</a>
      </div>
    </header>
    </div>
  );
}

export default App;

*/

import Hd from './component/Hd';
import Work from './component/Work';


function App() {

    return (
      <div className="App">
      
  <Hd bgColor='bg-white'></Hd>
  <div id="portfolio" className='pt-5'>
    <h2 className='pt-5 text-center'>나의 작품</h2>
  </div>
  <Work contentId = "react" title = "리액트"></Work>
  <Work contentId = "ec" title = "쇼핑몰"></Work>
      </div>
    );
  }
  
  export default App;
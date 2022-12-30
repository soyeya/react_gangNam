import naviDb from '../data/navi.json';
import logo from '../img/logo.svg';

const Hd = (props) => {

    const naviJs = naviDb.naviDB; //Array 네비게이션 DB만 추출하기

    return (
       
        <header id="hd" className={"fixed-top border-bottom " + props.bgColor}>
        <div className="container-fluid d-flex justify-content-between align-items-center"> {/*fluid = 아무리커져도 옆으로만 커지고 작아져라_옆에 붙어서 반응형*/}
          <h1 className='col-2 mx-auto mx-md-0'>
            <a hreft='#top'>
              <img src={logo}/>
            </a>
          </h1>
          {/* d-none d-md-flex -> 작은 사이즈(모바일)때 안나오고 768사이즈에 나타남 */}
          <ul id="gnb" className="d-flex font20 fw600 mb-0 d-none d-md-flex ">
            {/* <li className='px-1'><a href="#about">인물탐방</a></li>
            <li className='px-1'><a href="#portfolio">작업들</a></li>
            <li className='px-1'><a href="#contact">연락</a></li>
            <li className='px-1'><a href="#printerview">사전인터뷰</a></li> */}

            {
                naviJs.map( (item, index) => {

                    return(

                        <li className='px-1'>
                            <a href={item.naviLink} className={index > 0 ? "" : "activeColor"} > {item.navititle}</a></li>
    
                    )
                })


            }
          </ul>
          <a href="https://github.com/soyeya" target="_blank" className="git btn bgActive text-white">Gif</a>
        </div>
      </header>
       
    );
}

export default Hd;
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

function Notice(props){
    //이곳은 Xml이다. xml은 반드시 막는 태그와 닫는 태그의 짝이 맞아야 한다. 
    //부모의 태그가 하나
    //컴포넌트의 첫번째 인자 props(스펠링상관없음)의 기능은 실행의 옵션에 접근 할 수 있다.
    //컴포넌트함수는 손오공, 컴포넌트는 손오공분신
    
      return(
    
    <>
    <h2>{props.title}</h2> 
    <p>{props.contents.length}건의 게시글이 있습니다.</p>
    {/* ul>li*5{공지사항제목} */}
    <ul className={`${props.cls[0]} ${props.cls[1]}`}> 
      {
        props.contents.map( (item, index) => {
        //  console.log(item, index);
          //map 메서드는 정렬객체(props.contents)를 선택자로 한다. (정렬객체만 사용가능)
          
          return (
        //   <li>
        //   <span>{index + 1}</span>
        //   {item}</li>

        <li key= {'list'+ index}> 
        {/* jason 데이터를 따로 빼서 사용하는 경우  */}
        {/* key의 경우, 실질적으로 에러문제는 없으나 리액트내에서 본인의 리스트처리를 하는데 필요로하므로 리스트와 인덱스번호를 붙여 번호를 매김_ 하지않으면 console창에서 경고창이 계속 발현됨_ 그래서 해주는게 좋다 */}
            <p>{item.subject}</p>
            <div>{item.contents}</div>
        </li>
          );
        })
      }
      {/* <li>공지사항제목</li>
      <li>공지사항제목</li>
      <li>공지사항제목</li>
      <li>공지사항제목</li>
      <li>공지사항제목</li> */}
    </ul>
    </>// 별다른 글자가 없어도 부모태그가 있음을 의미
    
      );
    }
    

export default Notice;
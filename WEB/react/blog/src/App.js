//eslint-disable
import './App.css';
import {useState} from "react";

function App() {

    let [title,chTitle] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [like, changeLike] = useState(0);

  return (
    <div className ="App">
      <div className ="black-nav">
          <h4 style={{color : "red",fontSize : '16px'}}>블로그 </h4>

      </div>
        <button onClick={()=>{
            let copy = [...title];
            copy[0] = '여자코트 추천';
            chTitle(copy)
        }}>새로고침</button>
        <button onClick={()=>{
            let copy = [...title];
            copy.sort();
            chTitle(copy);
        }}>가나다 순으로 정렬</button>
        <List title1={title[0]} likes={like} chlike={changeLike()}/>
        <div className="list">
            <h4>글제목: {title[1]}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>글제목: {title[2]}</h4>
            <p>2월 17일 발행</p>
        </div>

        <Modal/>

    </div>
  );
}

function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}
function List(props) {
    return (
    <div className="list">
        <h4>글제목: {props.title1} <span onClick={ () => {props.chlike(props.likes+1)}} > 👍 </span> {props.likes} </h4>
        <p>2월 17일 발행</p>
    </div>
    )
}

export default App;

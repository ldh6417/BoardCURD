import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BoardDispatchContext } from '../App'

const New=()=>{
  const [board,setBoard] = useState({title:"",name:"",content:""});
  const {onCreate} = useContext(BoardDispatchContext);
  const  nav = useNavigate(); 

  const onChangeBoardData = (e)=>{
    setBoard({
      ...board,[e.target.name]:e.target.value
    })
  }
  
  const onClickCreateBoard = ()=>{
    onCreate(board.title,board.name,board.content)
    nav("/",{replace:true}) //뒤로가기 금지
  }

  return<>
  <div className="form-container">
  <h2>새 글 작성</h2>
    <div className="input-group">
      <label>제목</label>
      <input name="title" value={board.title} onChange={onChangeBoardData} type="text" placeholder="제목을 입력하세요" />
    </div>
    <div className="input-group">
      <label>작성자</label>
      <input name="name" value={board.name} onChange={onChangeBoardData}  type="text" placeholder="이름" />
    </div>
    <div className="input-group">
      <label>내용</label>
      <textarea name="content" value={board.content} onChange={onChangeBoardData}  rows="10" placeholder="내용을 작성해주세요"></textarea>
    </div>
    <div className="form-actions">
      <button type="button" className="cancel-btn">취소</button>
      <button type="button" className="submit-btn" onClick={onClickCreateBoard}>등록하기</button>
    </div>
</div>
  </>
}
export default New;
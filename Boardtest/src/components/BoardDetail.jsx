import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardStateContext } from "../App";
import { BoardDispatchContext } from "../App";

const BoardDetail=()=>{
  const nav = useNavigate();
  const {id} = useParams();
  const state = useContext(BoardStateContext);
  const {onDelete} = useContext(BoardDispatchContext);
  const targetBoard = state.find((item)=>String(item.id) === String(id));


  const onClickDelete = ()=>{
    window.alert("정말 게시물을 삭제하시겠습니까?")
    onDelete(id)
    nav("/",{replace:true}) //뒤로가기 금지
  }


  return<>
  <div className="detail-container">
      <header className="detail-header">
        <div className="detail-info">
          <span className="info-id">게시글 번호: {targetBoard.id}</span>
          <span className="info-date">
            작성일: {new Date(targetBoard.createdDate).toLocaleDateString()}
          </span>
        </div>
        <h2 className="detail-title">{targetBoard.title}</h2>
        <div className="detail-name">
          작성자: <strong>{targetBoard.name}</strong>
        </div>
      </header>

      <section className="detail-content">
        {targetBoard.content}
      </section>

      <footer className="detail-footer">
        <button className="btn-list" onClick={() => nav("/")}>
          목록보기
        </button>
        <div className="btn-group">
          <button className="btn-edit" onClick={() => nav(`/edit/${id}`)}>
            수정하기
          </button>
          <button className="btn-delete" onClick={onClickDelete}>
            삭제하기
          </button>
        </div>
      </footer>
    </div>
  </>
}
export default BoardDetail;
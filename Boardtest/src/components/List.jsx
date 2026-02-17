import { useNavigate } from "react-router-dom";
import Board from "./Board";

const List = ({state})=>{

const nav = useNavigate();

 return<>
 <div className="board-container">
  <h2>커뮤니티 게시판</h2>
  <div className="board-header">
    <span className="total-count">전체 글 <b>{state.length}</b>개</span>
    <button className="write-btn" onClick={()=>nav("/new")}>글쓰기</button>
  </div>

  <table className="board-table">
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>날짜</th>
      </tr>
    </thead>
    <tbody>
  {state.length > 0 ? (
    state.map((item) => <Board key={Number(item.id)} {...item} />)
  ) : (
    <tr>
      <td colSpan="4" style={{ padding: "50px", color: "#999" }}>
        등록된 게시글이 없습니다.
      </td>
    </tr>
  )}
</tbody>
  </table>
</div>
    </>
}
export default List;
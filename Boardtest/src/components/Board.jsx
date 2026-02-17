import { useNavigate } from "react-router-dom";


const Board=({id,title,name,createdDate})=>{
  const nav = useNavigate();
 return<>
 <tr className="board-item-row" onClick={() => nav(`/BoardDetail/${id}`)}>
      <td className="col-no">{id}</td>
      <td className="col-title">{title}</td>
      <td className="col-writer">{name}</td>
      <td className="col-date">{new Date(createdDate).toLocaleDateString()}</td>
    </tr>
 </>
}
export default Board;
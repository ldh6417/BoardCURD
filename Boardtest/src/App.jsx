import { useRef } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import { createContext } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useReducer } from 'react';
import New from './components/New';
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';



const mockData = [
 {
 id: 1,
 createdDate: new Date(2026,1,1).getTime(),
 title: "테스트1",
 name:"일도훈",
 content: "1번 일기 내용",
 },
 {
 id: 2,
 createdDate: new Date(2026,1,15).getTime(),
 title: "테스트2",
 name:"이도훈",
 content: "2번 일기 내용",
 },
 {
 id: 3,
 createdDate: new Date(2026,0,25).getTime(),
 title: "테스트3",
 name:"삼도훈",
 content: "3번 일기 내용",
 },
];

export const BoardStateContext =createContext();
export const BoardDispatchContext =createContext();
//useReducer
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>{
        item.id === action.id ? action.data : item
      });
    case "DELETE":
      return state.filter((item)=>String(item.id) !== String(action.id));
    default:
      return state;
  }
}

function App() {
const [state, dispatch] = useReducer(reducer, mockData);
const idRef = useRef(4);
const onCreate=(title,name,content)=>{
  const newBoard = {
      id:idRef.current++,
      title,
      name,
      content,
      createdDate:new Date().getTime()
    }
    dispatch({type:"CREATE", data:newBoard});
}

const onUpdate = (id, title, name, content, createdDate)=>{
    const newBoard = {
      id,
      title,
      name,
      content,
      createdDate
    }
    dispatch({type:"UPDATE", data:newBoard});
  }

  const onDelete = (id)=>{
    dispatch({type:"DELETE", id});
  }







  return (
    <>
    <BoardStateContext.Provider value={state}>
    <BoardDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
    <Header/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/BoardDetail/:id' element={<BoardDetail />}/>
      <Route path='/edit/:no' element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
     </Routes>
    </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
    </>
  )
}

export default App

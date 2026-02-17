import { useContext } from "react";
import { BoardStateContext } from "../App";
import List from "./List";


const Home = ()=>{
const state = useContext(BoardStateContext);
  
 return<>
 <List state={state}/>
 </>
}
export default Home;
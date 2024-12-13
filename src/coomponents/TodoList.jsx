
import { useContext } from "react"
import Item from "./Item"
import { Todo_Store } from "../store/App_Store"
const TodoList =()=>{

  const [itemlist]=useContext(Todo_Store);
    

    return (
        <>
        {itemlist.map((i)=>(
          <Item key={i.work} item={i} />   
        ))}
         
        </>
    )
}
export default TodoList
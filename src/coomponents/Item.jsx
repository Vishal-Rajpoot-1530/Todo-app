import { useContext } from "react";
import css from "./Item.module.css"
import { MdDeleteForever } from "react-icons/md";
import { Todo_Store } from "../store/App_Store";
const Item=({item})=>{

     const handleDelete=useContext(Todo_Store);
     
    return (
        <div className={css.item}>
            <p>{item.work}</p>
            <p>{item.date}</p>
            <button onClick={()=>handleDelete[1](item.work)}><MdDeleteForever /></button>
        </div>
    )
}

export default Item
import { useRef  } from "react";
import { IoBagAdd } from "react-icons/io5";
import css from "./InputBox.module.css"

const InputBox = ({ setTodoItems }) => {
    const works=useRef();
    const dates=useRef();
     
    const handleOnClick = (e) => {
         
        if(works.current.value==""|| dates.current.value==""){
            return  ;
        }
        let reversedString;
        {
            let strArray = dates.current.value.split("-");
            let reversedArray = strArray.reverse();
            reversedString = reversedArray.join("-");
        }
        const sendData = {
            work: works.current.value,
            date: reversedString
        };
        setTodoItems(sendData);
        works.current.value="";
        dates.current.value="";
    }
    
    
    return (
        <div className={css.input}>
            <input type="text"  ref={works} placeholder="enter to do hare"   required />
            <input type="date"  ref={dates} required />
            <button onClick={ handleOnClick}><IoBagAdd /></button>
        </div>
    )
}

export default InputBox
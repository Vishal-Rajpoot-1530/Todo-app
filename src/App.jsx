import { useState } from 'react'
import Header from './coomponents/Header'
import InputBox from './coomponents/InputBox'
import TodoList from './coomponents/TodoList'
import WelcomMassage from './coomponents/WelcomMassage'
import './App.css'
import { Todo_Store } from './store/App_Store'

function App() {
  const [todoItem, settodoItem ] = useState([]);

  const handleSetTodoItems = (data) => {
    const newTodoItems=[...todoItem,data];
    settodoItem(newTodoItems);
  }

  const handleDelete=(work)=>{
     
    const newTodoItems=todoItem.filter(item => item.work !== work);
    settodoItem(newTodoItems);
  }

  return (
    <Todo_Store.Provider value={[todoItem, handleDelete]}>
      <div className='app'>
        <Header></Header>
        <InputBox setTodoItems={handleSetTodoItems}></InputBox>
        {
          todoItem.length==0 &&  <WelcomMassage></WelcomMassage>
        }
         
        <TodoList ></TodoList>
        

      </div>

    </Todo_Store.Provider>
  )
}

export default App

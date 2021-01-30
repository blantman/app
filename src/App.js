
import React from "react";
import ToDoList from "./ToDo";
import Context from "./conte"
import AddTask from "./AddTask";

function App () {
  const [todo, setToDo] = React.useState( [
    {id:1, completed: false, titile: "реакт"},
    {id:2, completed: false, titile: "cделать"},
    {id:3, completed: false, titile: "купить"}
  ])

  function toggleToDo(id) {
    setToDo(todo.map( todo => { 
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

function removeToDo(id) {
  setToDo(todo.filter(todo => todo.id !== id))
}

function addToDo(titile) {
  setToDo(todo.concat([{
    titile, id:Date.now(), completed:false
  }]))
}

  return(
    <Context.Provider value={{ removeToDo }}>
    <div className='title'>
      <h1>do that</h1>
      <AddTask onCreate={addToDo}/>
      {todo.length ? <ToDoList todo={todo} onToggle={toggleToDo} /> : <p>nice</p>}
    </div>
    </Context.Provider>
  )
}

export default App

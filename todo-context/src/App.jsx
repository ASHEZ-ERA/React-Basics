import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'

function App() {
const [todos, setTodos] = useState([])

 const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo},...prev])
 }

 const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo === todo.id ? todo : prevTodo)))
 }

 const toggleComplete = (id) => {
  setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : {}))
 }

 const deleteTodo = (id) => {
  setTodos(prev => prev.filter((prevTodo) => prevTodo.id !== id))
 }

 useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length > 0){
    setTodos(todos)
  }
},[])

useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
  return (
    <TodoProvider value={{todos, toggleComplete, addTodo, updateTodo, deleteTodo}}>
      <TodoForm/>
      {todos.map((todo)=> {
        return <div key={todo.id}>
          <TodoItems todo={todo}/>
        </div>
      })}
    </TodoProvider>
  )
}

export default App

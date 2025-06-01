import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItems({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button type="button" onClick={()=> {
        if(todo.completed) return 
        if(isTodoEditable){
          editTodo()
        }else {
          setIsTodoEditable((prev) => !prev)
        }
      }}>{isTodoEditable ? "save" : "edit"}</button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItems;

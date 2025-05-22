import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "addTodo",
  TOGGLE_TODO: "toggleTodo",
  DELETE: "deleteTodo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

//   {
//     /**this is for the counter */
  

//   // switch (action.type) {
//   //   case "increment":
//   //     return { count: state.count + 1 };
//   //   case "decrement":
//   //     return { count: state.count - 1 };
//   //   default:
//   //     return state;
//   // }
// }

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  {
    /**Counter logic */
  }

  // function increment() {
  //   dispatch({ type: "increment" });
  // }
  // function decrement() {
  //   dispatch({ type: "decrement" });
  // }

  return (
    <>
      {/* TODO-LIST */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}

      {/* this is for the counter */}

      {/**<button style={{ width: 30, height: 30 }} onClick={increment}>
        +
      </button>
      {state.count}
      <button style={{ width: 30, height: 30 }} onClick={decrement}>
        -
      </button>*/}
    </>
  );
}

export default App;

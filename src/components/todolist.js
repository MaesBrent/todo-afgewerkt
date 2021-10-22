import React from "react";
// import components
import Todo from "./Todo.js";
function Todolist({todos,setTodos,filteredTodos}) {
  console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </ul>
      
    </div>
  );
}


export default Todolist

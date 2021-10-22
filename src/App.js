import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form.js";
import Todolist from "./components/todolist";

function App() {
 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos]= useState([]);

// run once when the app starts
useEffect(()=>{
  getLocalTodos();
},[])

 // use effect
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  },[todos, status])

  // functions
  function filterHandler(){
    switch(status){
      case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }
  // Save to local
  function saveLocalTodos(){
      localStorage.setItem("todos",JSON.stringify(todos));
    };
  

  function getLocalTodos() {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
     let todoLocal= JSON.parse(localStorage.getItem("todos"))
     const setTodos=(todoLocal)
    }
  };
  return (
    <div className="app">
      <header>
        <h1>Brent's Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
       />
      <Todolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
    
  );
  }
 
  



export default App;



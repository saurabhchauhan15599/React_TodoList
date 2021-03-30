import React, { useState } from 'react';
import "./index.css";
import TodoList from "./TodoList";

const App = ()=> {

  // for displaying input field below 
  const [inputList,setInputList]=useState();
  // for storing the todo list items and then displaying
  const [Items,setItems]=useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value)
  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
  };

  const deleteItems= (id) =>{
    console.log('deldeted')
  setItems((oldItems) =>{
    return oldItems.filter((arrElem,index)=>{
      return (index!==id);
    });
  });
  };

  return (
    <div className="container container-fluid">
      <div className="main-todo ">
      <div className="heading-todo">
        <h2>To-Do List</h2>
      </div>
      <div className="add-items">
        <input type="text" className="add-list" placeholder="enter item" required
        onChange={itemEvent} />
        <button className="select-items btn btn-danger" onClick={listOfItems}>+</button>
      </div>
      <div className="show-list">
        <ol>
          {Items.map((itemval,index) =>{
            return <TodoList 
            key={index} 
            id={index} 
            text={itemval} 
            onSelect={deleteItems} />;
          })}
        </ol>
      </div>
      </div>
    </div>
  );
};

export default App;

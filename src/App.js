import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

   // Update state methods
  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    // Take whatever is currently in the input and set as new todo
    if (input !== "") {  // Only update if there is a value written here

      // Copy existing into a new array (with spread operator) and add new todo item
      const updatedTodo = [...todos, input];
      setTodos(updatedTodo);
      setInput(""); // Reset form to blank since we consumed that todo
    }
  };

  useEffect(() => {
    // Populate the to-do list with Pokemon abilities
    fetch("https://pokeapi.co/api/v2/pokemon/4")
      .then(response => response.json())
      .then(data => {
        setTodos(data.abilities.map(ability => ability.ability.name));
      }
    );
  }, []);

  return (
    <>
      <div className="App">
        {/* Make an input field to collect new todo items */}
        <label for='newTodo'>Enter ToDo: </label>
        <input type="text" id='newTodo' value={input} onChange={updateInput}></input>
 
        {/* A button to submit todos */}
        <button onClick={addTodo}>Enter</button>
        {/* List log of inputted todos */}
        <h3>My Current Todos:</h3>
 
        <ul>
          {todos.map((todo) => <ToDo text={todo} />)}
        </ul>
      </div>
    </>
  );
}

export default App;


import React, { useState } from "react";

export const Todo = () => {
  //const storedTodos = localStorage.getItem("todos"); //parse???
  // const [todos, setTodos] = useState(storedTodos || []); // initialise state as local storage object
  const [todos, setTodos] = useState([]); // initialise state as local storage object
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ];
      setTodos(updatedTodos);
      setNewTodo("");
      console.log(todos);
    }
    // setItem - localStorage using updatedTodos const
    // localStorage.setItem("todos", todos);
  };

  const deleteTodo = (id) => {
    // const updatedTodos = [
    //   ...todos,
    //   { id: Date.now(), text: newTodo, completed: false }
    // ];
    //
    setTodos(todos.filter((todo) => todo.id !== id));
    // set local storage again here with updated todos (same as in add todo)
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="pt-6 pb-6 pl-10  ">
      <h1 className="text-2xl pb-5">Todos</h1>
      <div className="sm:mr-2 mb-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="p-1 border-pink-500 border-2 rounded bg-transparent text-white  text-center mb-2 w-48"
          placeholder="New Todo..."
        />
        <button
          className="lg:ml-5 sm:ml-1 p-1 border-pink-500 border-2 rounded text-green-500 hover:bg-pink-500 hover:text-white transition "
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="text-white">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="border-pink-500 border-2 mr-5"
            />
            <span
              className={todo.completed ? "line-through" : ""}
            >
              {todo.text}
            </span>
            <button
              className="border-pink-500 border-2 ml-2 text-green-500"
              onClick={() => deleteTodo(todo.id)}

            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
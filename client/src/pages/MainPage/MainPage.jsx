import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

import "./MainPage.scss";

const MainPage = () => {
  const [text, setText] = useState("");
  const { userId } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  const getTodo = useCallback(async () => {
    try {
      await axios
        .get("/api/todo", {
          headers: { "Content-Type": "application/json" },
          params: { userId },
        })
        .then((response) => setTodos(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const createTodo = useCallback(async () => {
    if (!text) return null;
    try {
      await axios
        .post(
          "/api/todo/add",
          { text, userId },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          setTodos([...todos], response.data);
          setText("")
          getTodo()
        });
    } catch (error) {
      console.log(error);
    }
  }, [text, userId, todos, getTodo]);


  const removeTodos = useCallback(async (id)=> {
try {
  await axios.delete(`/api/todo/delete/${id}`, {id}, {
    headers: {'Content-Type': 'application/json'}
  })
  .then(() => getTodo())

} catch (error) {
  console.log(error);
}
  }, [getTodo]);

  useEffect(()=> {
    getTodo()
  }, [getTodo])

  return (
    <div className="container">
      <div className="main-Page">
        <h4>Add task</h4>
        <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="input-feld col s12">
              <input
                type="text"
                id="text"
                name="input"
                className="validate"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <label htmlFor="input">Task</label>
            </div>
          </div>
          <div className="row">
            <button
              className="waves-effect waves-light btn grey"
              onClick={createTodo}
            >
              Add task
            </button>
          </div>
        </form>

        <h3>Active tasks:</h3>
        <div className="todos">
         {
           todos.map((todo, index) => {
             return (
              <div className="row flex todos-item" key={index}>
              <div className="col todos-num">{index + 1}</div>
              <div className="col todos-text">{todo.text}</div>
              <div className="col todos-buttons">
                <i className="material-icons grey-text">check</i>
                <i className="material-icons orange-text">warning</i>
                <i className="material-icons red-text" onClick={() => removeTodos(todo._id)}>delete</i>
            </div>
          </div>
             )
           })
         }
        </div>
      </div>
    </div>
  );
};

export default MainPage;

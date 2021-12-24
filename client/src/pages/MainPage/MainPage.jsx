import React, { useState, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

import "./MainPage.scss";

const MainPage = () => {
  const [text, setText] = useState("");
  const {userId} = useContext(AuthContext);

  const createTodo = useCallback(async () => {
    try {
      await axios.post(
        "/api/todo/add",
        { text, userId },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => console.log(response))
    } catch (error) {
      console.log(error);
    }
  }, [text, userId]);

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
                onChange={(e) => setText(e.target.value)}
              />
              <label htmlFor="input">Task</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn grey"
            onClick={createTodo}
            >
              Add task
            </button>
          </div>
        </form>

        <h3>Active tasks:</h3>
        <div className="todos">
          <div className="row flex todos-item">
            <div className="col todos-num">1</div>
            <div className="col todos-text">Text</div>
            <div className="col todos-buttons">
              <i class="material-icons grey-text">check</i>
              <i class="material-icons orange-text">warning</i>
              <i class="material-icons red-text">delete</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

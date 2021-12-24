import React from "react";

import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="container">
      <div className="main-Page">
        <h4>Add task</h4>
        <form className="form form-login">
          <div className="row">
            <div className="input-feld col s12">
              <input type="text" id="text" name="input" className="validate" />
              <label htmlFor="input">Task</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn grey">Add task</button>
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

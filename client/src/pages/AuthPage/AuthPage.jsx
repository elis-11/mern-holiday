import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./AuthPage.scss";

const AuthPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <div className="container">
            <div className="auth-page">
              <Route path="/login">
                <h3>Autorization</h3>
                <form className="form form-login">
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="email" name="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="wawes-effect wawes-light btn grey">
                      Login
                    </button>
                    <Link to="/registration" className="btn-outline btn-reg">
                      Don't you have an account?
                    </Link>
                  </div>
                </form>
              </Route>
              <Route path="/registration">
                <h3>Registration</h3>
                <form className="form form-login">
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="email" name="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="wawes-effect wawes-light btn grey">
                      Registration
                    </button>
                    <Link to="login" className="btn-outline btn-reg">
                      Do you have an account?
                    </Link>
                  </div>
                </form>
              </Route>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthPage;

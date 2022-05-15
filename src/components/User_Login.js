import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function User_Login() {
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    axios.post(`${window.backendapi1}/user/userlogin`, data).then((res) => {
      if (res.data.success) {
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("userEmail", data.userEmail);

        if(data.userEmail === "admin@gmail.com"){
          navigate("/home_admin");
        }
        else{
          navigate("/home_customer");
        }
        alert("Sign in successfully.");

      } else {
        alert("Email or password Incorrect.");
      }
    });
  };

  return (
    <div>
      <div className="page-head">
        <Sidebar />
        <div className="page-header">
          <h1>
            <a href="#">
              <i className="fa fa-users"></i> &nbsp;&nbsp;LOGIN
            </a>
          </h1>
        </div>
      </div>
      <div className="form-container">
        <form className="form-data" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="userEmail"
              // value={this.state.userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              name="userEmail"
              placeholder="Email Address"
              tabIndex={1}
              required
            ></input>
          </div>
          <a className="text-right" href="/forgotpassword">
            Forgot Password?
          </a>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="userPassword"
              // value={this.state.userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              name="userPassword"
              placeholder="Password"
              tabIndex={2}
              required
            ></input>
          </div>

          <div>
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-warning btndata"
              tabIndex={3}
            >
              {" "}
              <i className="fa fa-user"></i>&nbsp; LOGIN
            </button>
          </div>
          <br />
          <a className="text-right" href="/register">
            Do not have an account ? Register
          </a>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function User_Forgotpassword() {

  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");

const  onSubmit = async (e) => {
  e.preventDefault();

  const data = {
      userEmail: userEmail
  }

  await axios.post(`${window.backendapi1}/user/userforgotpassword`, data).then((res) => {

      if (res.data.success) {
          this.setState(data.data)
          alert('Email has been sent')
          navigate('/login');
      }

  })


}

  return (
    <div>
    <div className="page-head">
      <Sidebar />
      <div className="page-header">
        <h1>
          <a href="#">
            <i className="fa fa-users"></i> &nbsp;&nbsp;FORGOT PASSWORD
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
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            name="userEmail"
            placeholder="Email Address"
            tabIndex={1}
            required
          ></input>
        </div>

        <div>
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-warning btndata"
            tabIndex={2}
          >
            {" "}
            <i className="fa fa-user"></i>&nbsp; SEND MAIL
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

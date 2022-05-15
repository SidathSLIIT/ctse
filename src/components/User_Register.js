import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

export default function User_Register() {
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState(0);
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(userPassword.length < 6 ){
        setTimeout((err)=>{
            return alert("Password must contain atleast 6 characters"); 
        },2000);
        
    }
    if( userPassword !== userConfirmPassword){
        setTimeout((err)=>{
            return alert("Password miss matching"); 
        },2000);
        
    }
    else{
        
    const data = {
        userEmail: userEmail,
        userPhone:userPhone,
        userPassword: userPassword
    }
    axios.post(`${window.backendapi1}/user/userregister`, data).then((res) =>{
        if(res.data.success){
            navigate('/login');
            alert('Registered successfully!')
        }

        else{
            alert('Registration unsuccessful. Try again later.')
        }
    });
    
    }
};


  return (
    <div>
            <div className="page-head">
              <Sidebar />
              <div className="page-header">
                <h1>
                  <a href="#">
                    <i className="fa fa-users"></i> &nbsp;&nbsp;REGISTER
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
    
                <div className="form-group">
                  <input
                    className="form-control"
                    type="tel"
                    id="userPhone"
                    // value={this.state.userPhone}
                    onChange={(e) => {
                      setUserPhone(e.target.value);
                    }}
                    name="userPhone"
                    placeholder="Contact Number"
                    tabIndex={2}
                    required
                  ></input>
                </div>
    
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
                    tabIndex={3}
                    required
                  ></input>
                </div>
    
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    id="userConfirmPassword"
                    // value={this.state.userConfirmPassword}
                    onChange={(e) => {
                      setUserConfirmPassword(e.target.value);
                    }}
                    name="userConfirmPassword"
                    placeholder="Confirm Password"
                    tabIndex={4}
                    required
                  ></input>
                </div>
    
                <div>
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="btn btn-warning btndata"
                    tabIndex={5}
                  >
                    {" "}
                    <i className="fa fa-user"></i>&nbsp; REGISTER
                  </button>
                </div>

                <br/>
                <a className="text-right" href="/login">Already have an account?</a>
              </form>
            </div>
          </div>
  )
}

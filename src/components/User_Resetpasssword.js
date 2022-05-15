import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function User_Resetpasssword() {

  let navigate = useNavigate();
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");


const  onSubmit = async (e) => {
  e.preventDefault();

  if(userPassword.length < 8 ){
      setTimeout((err)=>{
          return alert("Password must contain atleast 8 characters");
      },2000);

  }
  if( userPassword !== userConfirmPassword){
      setTimeout((err)=>{
          return alert("Password miss matching");
      },2000);

  }
  const data = {
      userPassword: userPassword
  }

  await axios.put(`${window.backendapi1}/user/userresetpassword/${this.props.match.params.resetToken}`,data).then((res) =>{

  if(res.data.success){
              this.setState(data.data)
              navigate('/login');
          }

  })

};

  return (
    <div>
            <div className="page-head">
              <div className="page-header">
                <h1>
                  <a href="#">
                    <i className="fa fa-key"></i> &nbsp;&nbsp;RESET PASSWORD
                  </a>
                </h1>
              </div>
            </div>
            <div className="form-container">
              <form className="form-data" method="POST">
    
    
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    id="userPassword"
                    onChange={(e) => {
                      setUserPassword(e.target.value);
                    }}
                    name="userPassword"
                    placeholder="New Password"
                    tabIndex={1}
                    required
                  ></input>
                </div>
    
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    id="userConfirmPassword"
                    onChange={(e) => {
                      setUserConfirmPassword(e.target.value);
                    }}
                    name="userConfirmPassword"
                    placeholder="Confirm Password"
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
                    <i className="fa fa-key"></i>&nbsp; RESET PASSWORD
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}

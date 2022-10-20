import "./style/stylesignup.css";
import Logo from "./Logo.png";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const [FirstName,setFirstName]=useState("");
  const [LastName,setLastName]=useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [RePassword,setRePassword]=useState("");
  return (
    <>
      <div className="signup_outer">
        <div className="signup_outer_inner">
          <div className="signup_outer_inner_row1">
            <img src={Logo}></img>
              <h2>Logo</h2>
          </div>
          <div className="signup_outer_inner_row2">
            <h2>Welcome!👋</h2>
          </div>
          <div className="signup_outer_inner_row3">
            <label>Please signup to your account</label>
          </div>
          <div className="signup_outer_inner_row4">
          <div className="signup_outer_inner_row4_left">
            <input type="text" placeholder="FirstName" 
              onChange={(e)=>{
                setFirstName(e.target.value);
              }}
            />
            </div>

            <div className="signup_outer_inner_row4_right">
            <input type="text" placeholder="LastName"
             onChange={(e)=>{
                setLastName(e.target.value);
              }} />
            </div>
            </div>
            <div className="signup_outer_inner_row5">
          <input type="text" placeholder="Email" 
             onChange={(e)=>{
                setEmail(e.target.value);
              }}
          />
          </div>
          <div className="signup_outer_inner_row6">
          <input type="password" placeholder="Password" 
             onChange={(e)=>{
                setPassword(e.target.value);
              }}
          />
          </div>
          <div className="signup_outer_inner_row7">
          <input type="password" placeholder="Re-Password"
           onChange={(e)=>{
                setRePassword(e.target.value);
              }} />
          </div>
          <div className="signup_outer_inner_row8">
            <input type="checkbox" />
            <label>
              By clicking on Register,you agree to our<label className="signup_outer_inner_row8_label">Terms and Conditions </label>of Use</label>
          </div>
          <div className="signup_outer_inner_row9">
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import "./Progressbar.css";
import {AiOutlineMore} from "react-icons/ai";
import circle from "./images/circle.png";
export default function Login() {
  return (
    <>
    <div className='Progressbarouter'>
          <div className='Progressbarouter_inner'>
          <div className='Progressbarouter_inner_row1'>
          <label>Prospect Progress</label>
          <AiOutlineMore className='Progressbarmore'/>
           </div>
   
           <div className='Progressbarouter_inner_row2'>
           <img src={circle} ></img>
           </div>
           </div>
    </div>
    </>
  );
}
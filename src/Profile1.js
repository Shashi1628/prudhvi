import React from 'react'
import {FiMoreHorizontal} from "react-icons/fi";
import {MdKeyboardArrowDown} from "react-icons/md";
import "./Profile1.css";
import pic from "./images/pic.jpg"
export default function Profile() {
  return (
    <>
    <div className='Profileouter'>
               <div className='Profileouter_column1'>
                        <img src={pic} ></img>
                        <div className='Profile_name' >Nancy Powell  </div>
                        <div className='Profile_id' >c10001</div>
                </div>
                        <div className='Profileouter_row1'>
                          <input type="Profiletext"  placeholder="Personal Information"  ></input>
                          <FiMoreHorizontal className='Profile_more1' />
                        </div>
                       <div className='Profileouter_row2'>
                       <div className='Profile_f' >FirstName</div>
                       <div className='Profile_l'>Last Name</div>
                       <div className='Profile_e'>Email</div>
                       <div className='Profile_d'>Date of Birth</div>
                       
                     
                       </div>

                       <div className='Profileouter_row3'>
                       <input  className='Profile_b1' type="text" ></input>
                       <input className='Profile_b2'  type="text" ></input>
                       <input className='Profile_b3'  type="text" ></input>
                       <input className='Profile_b4'  type="text" ></input>
                       
                       <MdKeyboardArrowDown className='Profile_v'/>
                       </div>
                       <div className='Profileouter_row4'>
                       <div className='Profile_a4' >Address</div>
                       <div className='Profile_b4' >Password</div>
                       <div className='Profile_c4' >Confirm Password</div>
                       </div>
                       <div className='Profileouter_row5'>
                       <input className='Profile_a5' type="text" ></input>
                       <input className='Profile_b5' type="text" ></input>
                       <input className='Profile_c5'type="text" ></input>
                       </div>
               
    </div>
    </>
  );
}
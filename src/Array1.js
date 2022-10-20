import { useState } from "react";
import React from "react";

export default function ObjectJson() {
  const [array, setArray] = useState(["one", "two", "three"]);
  const [user, setUser] = useState([
    { firstname: "shashidhar", lastname: "abc" },
    { firstname: "kiran", lastname: "123" },
  ]);
  const [employee, setEmployee] = useState([
    {
      firstname: "shashidhar",
      lastname: "vadla",
      emailid: "shashidharvadla@gmail.com",
      password: "abc",
      repassword: "abc",
    },
    {
      firstname: "kiran",
      lastname: "b",
      emailid: "kiran@gmail.com",
      password: "123",
      repassword: "123",
    },
  ]);
  return (
    <>
      <label>Employee :</label>
      <br />
      {employee.map((item, index) => {
        return (
          <>
            {JSON.stringify(item)} <br />
            {item.firstname}
            <br />
            {index}
            <br />
          </>
        );
      })}

      {user.map((itm, indx) => {
        return (
          <>
            {indx}- {JSON.stringify(itm)} # {itm.firstname} #{itm.lastname}{" "}
            <br />
          </>
        );
      })}
      {
        JSON.stringify(user[0]) //json to string
      }
      <br />
      {array[0]}
      <br />
      {user[0].firstname}
    </>
  );
}


























// import {useState} from "react";
// export default function Array1(){
//     const[employee,setEmployee]=useState([{FirstName:"shashidhar",
//     LastName:"vadla",
//     email:"abc@gmail.com",
//     Password:"abc",
//     RePassword:"abc"},
    
//     {FirstName:"srinu",
//     LastName:"k",
//     email:"xyz@gmail.com",
//     Password:"xyz",
//     repassword:"xyz"}])
//     return<>

//         <label>Employee :</label><br/>
//         {employee.map((item, index)=>{
//             return<>
//          {JSON.Stringify(item)}</>
//          {}
//          {index}<br/>
//             </>
//         })}
                
            
//                     </>
    
     
// }

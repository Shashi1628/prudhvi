








import "./Mainlist.css";
import React from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Mainlist() {
  const [array, setArray] = useState([
    { name: "samplename1", isclicked: false },
    { name: "samplename2", isclicked: true },
    { name: "samplename3", isclicked: true },
    { name: "samplename4", isclicked: false },
  ]);
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="Mainlist_header">
          <div className="Mainlist_row1">
            <ul>
              <li>FirstName</li>
              <li>LastName</li>
              <li>Status</li>
              <li>Created on </li>
              <li>Email</li>
              <li>Responses</li>
              <li>Owner</li>
            </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
          {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray}/>;
            })}

            <div className="Mainlist_list_row_top">
              <input className="Cb" type="checkbox" />
              <label for="checkbox"></label>
              <div className="Mainlist_list_row">
                <label>John</label>
                <label>Smith</label>
                <label>Confirmed</label>
                <label>2022-02-01</label>
                <label>larrywilson@nomail.com</label>
                <label>10</label>
                <label>Larry wilson</label>
                <div className="Mainlist_icon">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            <ListRow />
           
            <div>
              <button className="Mainlist_Button">load more leads</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}
function ListRow() {
  return (
    <>
      <div className="Mainlist_list_row_top">
        <input className="Cb" type="checkbox"/>
              <label for="checkbox"></label>
        <div className="Mainlist_list_row">
          <label>John</label>
          <label>Smith</label>
          <label>Confirmed</label>
          <label>2022-02-01</label>
          <label>larrywilson@nomail.com</label>
          <label>10</label>
          <label>Larry wilson</label>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}















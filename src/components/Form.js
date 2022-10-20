import "./Form.css";
import React from "react";
export default function Form() {
  return (
    <>
      <div className="Form_outer">
        <div className="Form_inner1">
          <label>Lead Details</label>
        </div>
        <div className="Form_inner3">
          <div className="Form_inner31">
            <label>Salutation</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>First Name</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Middle Name</label>
            <div className="Form_rectangle"></div>
          </div>
        </div>
        <div className="Form_inner3">
          <div className="Form_inner31">
            <label>Last Name</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Tittle</label>
            <div className="rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Company</label>
            <div className="Form_rectangle"></div>
          </div>
        </div>
        <div className="Form_inner3">
          <div className="Form_inner31">
            <label>Email</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Phone</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Mobile</label>
            <div className="Form_rectangle"></div>
          </div>
        </div>
        <div className="Form_inner3">
          <div className="Form_inner31">
            <label>Addres</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>City</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>State</label>
            <div className="Form_rectangle"></div>
          </div>
        </div>
        <div className="Form_inner3">
          <div className="Form_inner31">
            <label>Pin Code</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Lead Source Name</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Date Added On</label>
            <div className="Form_rectangle"></div>
          </div>
        </div>
        <div className="Form_inner3">
          <div className="Form_inner31">
            <label>Active Status</label>
            <div className="Form_rectangle"></div>
          </div>
          <div className="Form_inner31">
            <label>Lead owner</label>
            <div className="Form_rectangle"></div>
          </div>
        </div>
      </div>
    </>
  );
}

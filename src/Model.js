
import React, { useState } from "react";
import "./style/stylemodel.css";
export default function Page() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Modal show={show} handleClick={handleClick} />
      <div className="model_page">
        Modal Sample </div>
       <div><button className="model_firstbutton" onClick={handleClick}>Click Here!</button>
      </div>
    </>
  );
}
 
function Modal({ show, handleClick }) {
  return show ? (
    <div className="model_modalcontainer">
      <div className="model_modal">
        <h1>Modal Title</h1>
        <p>Modal Message</p>
        <button className="model_modelbutton" onClick={handleClick}>Close</button>
      </div>
    </div>
  ) : (
    <></>
  );
}

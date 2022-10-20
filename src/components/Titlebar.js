import "./titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import React from "react";

export default function TitleBar() {
  return (
    <>
      <div className="titlebar_top">
           <div className="titlebar_top_col1">
                              <div className="titlebar_bagSquare">
                             <GiBeachBag className="titlebar_bagIcon" />
                         </div>
                      <div className="titlebar_bagIcon_Products" > Prospects</div>
                      <div className="titlebar_bagIcon_Active" >Active</div>
                        <div className="titlebar_bagIcon_Draft"> Draft</div>
                      <div className="titlebar_bagIcon_Assembly">Assembly</div> 
                      </div>
              
               
      </div>
      <div className="titlebar_underline" >________</div>
    </>
  );
}

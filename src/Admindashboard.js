import { AiOutlineMenu, AiOutlineSearch, AiFillCompass, AiFillStar } from "react-icons/ai";
import React from "react";
import { BsThreeDots, BsThreeDotsVertical, BsBellFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { ImCross } from "react-icons/im"
import "./style/styleadmindashboard.css";
export default function Admin() {
    return <>
        <div className="Topbar">
            <div className="Topbar_col1">
                <div className="Topbar_col1_circle">
                    <AiOutlineMenu className="Topbar_col1_circle_icon" />
                </div>
                <label>Company</label>
            </div>
            <div className="Topbar_col2">
                <ul>
                    <li>Dashboard</li>
                    <li>Leads</li>
                    <li>Campaign</li>
                    <li>Prospects</li>
                    <li>Account</li>
                    <li> <BsThreeDots /> </li>
                </ul>
            </div>
            <div className="Topbar_col3">
                <AiOutlineSearch />
                <input type={"text"} placeholder="Search Products" />
                <MdOutlineArrowForwardIos />
            </div>
            <div className="Topbar_col4">
                <div className="Topbar_col4_circle">
                    <FaUserCircle />
                </div>
                <label>Clayton</label>
                <div className="Topbar_col4_circle">
                    <BsBellFill />
                </div>
                <div className="Topbar_col4_circle">
                    <ImCross />
                </div>
            </div>
        </div>
        <div className="Contentpart">
            <div className="Contentpart_Leftbar">
                <div className="Contentpart_Leftbar_circle">
                    <AiFillCompass />
                </div>
                <div className="Contentpart_Leftbar_circle">
                    <AiFillStar />
                </div>
                <div className="Contentpart_Leftbar_circle">
                    <BsMessenger />
                </div>
            </div>
            <div className="Contentpart_maincontent">
                {/* Contentpart_maincontent */}
            </div>
            <div className="Contentpart_contentarea">
                <div className="Contentarea_list">
                    <div className="Contentarea_list_title">
                        <label>User List</label>
                        <BsThreeDotsVertical />
                    </div>
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                    <SingleRow />
                </div>
            </div>
        </div>
    </>
}


function SingleRow() {
    return (
        <div className="contentarea_list_singlerow">
            <div className="contentarea_list_singlerow_circle">
                <BsBellFill />
            </div>
            <label>Larry Claton</label>
            <button>Pending</button>
        </div>
    );
}


















































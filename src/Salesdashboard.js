import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlinePlus} from 'react-icons/ai'
import './style/stylesalesdashboard.css'
import React, { useState } from 'react'

export default function SalesDashboard() {
    const [show , setShow] = useState(false)
    function HandleClick(){
        setShow(!show)
    }
  return (
    <div className='SalesDashboard_outer'>
      <div className='SalesDashboard_inner'>
        <div className='SalesDashboard_inner_head'>
            <label>Tasks</label>
        </div>
        <div className='SalesDashboard_content'>
            <div className='SalesDashboard_content_left'>
                <div className='SalesDashboard_content_left_head'>
                    <IoIosArrowDown />
                    <label>TODO</label>
                </div>
                <div className='SalesDashboard_content_left_task'>
                    <div className='SalesDashboard_content_left_task_head'>
                    <IoIosArrowDown onClick={HandleClick}/>
                    <label>Task</label>
                    </div>
                    {show?(<div className='SalesDashboard_content_left_task_list'>
                        <label>Event</label>
                        <label>Task</label>
                        <label>Lead</label>
                    </div>):(<></>)
                    }
                    <div className='SalesDashboard_content_left_task_listAdd'>
                        <AiOutlinePlus />
                    </div>
                </div>
            </div>
            <div className='SalesDashboard_content_left'>
                <div className='SalesDashboard_content_left_head'>
                    <IoIosArrowDown />
                    <label>TODO</label>
                </div>
                <div className='SalesDashboard_content_left_task'>
                    <div className='SalesDashboard_content_left_task_head'>
                    <IoIosArrowDown />
                    <label>Task</label>
                    </div>
                    <div className='SalesDashboard_content_left_task_list'>
                        <label>Event</label>
                        <label>Task</label>
                        <label>Lead</label>
                    </div>
                </div>
                <div className='SalesDashboard_content_left_task_listAdd'>
                        <AiOutlinePlus />
                    </div>
            </div>
            <div className='SalesDashboard_content_left'>
                <div className='SalesDashboard_content_left_head'>
                    <IoIosArrowDown />
                    <label>TODO</label>
                </div>
                <div className='SalesDashboard_content_left_task'>
                    <div className='SalesDashboard_content_left_task_head'>
                    <IoIosArrowDown />
                    <label>Task</label>
                    </div>
                    <div className='SalesDashboard_content_left_task_list'>
                        <label>Event</label>
                        <label>Task</label>
                        <label>Lead</label>
                    </div>
                </div>
                <div className='SalesDashboard_content_left_task_listAdd'>
                        <AiOutlinePlus />
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

import { Avatar } from '@material-ui/core'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className='side'>
        <div className="sidebar_header">
            <Avatar/>
            <div className="sidebar_headerRight">
                <DonutLargeIcon/>
                <ChatIcon/>
                <MoreVertIcon/>

            </div>

        </div>
        <div className="sidebar_search">

        </div>
        <div className="sidebar_chat">

        </div>

    </div>
  )
}

export default Sidebar
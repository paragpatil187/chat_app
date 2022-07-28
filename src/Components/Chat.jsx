import React, { useEffect, useState } from 'react'
import "./chat.css"
import { Avatar,IconButton } from '@material-ui/core'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import ChatIcon from "@material-ui/icons/Chat";
import { SearchOutlined } from '@material-ui/icons';
import { AttachFile } from '@material-ui/icons';
const Chat = () => {
    const [avtarv,setavtarv]=useState("123");
    useEffect(() => {
      setavtarv(Math.floor(Math.random()*5000))
    
      
    }, [])
  return (
    <div className='chat'>
        <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${avtarv}.svg`} />
        <div className="chat_header_info">
            <h3>Room name</h3>
            <p>Last seen at...</p>
        </div>
        <div className="chat_header_right">
            <IconButton>
                <SearchOutlined/>
                
            </IconButton>
            <IconButton><AttachFile/></IconButton>
            <IconButton> <MoreVertIcon/></IconButton>
        </div>
        </div>
        <div className="chat_body">
            <p className={`chat_message ${true} chat_reciever`}>
                <span className='chat_name'>parag patil</span>
                hello
                <span className="chat_timestamp">3:52pm</span>
            </p>
        </div>
        <div className="chat_footer"></div>
    </div>
  )
}

export default Chat
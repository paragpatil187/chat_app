import React, { useEffect, useState } from 'react'
import "./chat.css"
import {useParams} from "react-router-dom"
import { Avatar,IconButton } from '@material-ui/core'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
// import ChatIcon from "@material-ui/icons/Chat";
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon'
import { SearchOutlined } from '@material-ui/icons';
import { AttachFile} from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic"
import db from './firebaseconfig';
const Chat = () => {
    const [avtarv,setavtarv]=useState("123");
    const [input,setInput]=useState("");
    const {roomId}=useParams();
    const[roomName,setRoomName]=useState("");
    useEffect(()=>{
        if(roomId){
            db.collection("room").doc(roomId).onSnapshot(snapshot =>(
                setRoomName(snapshot.data().name)
            ))
        }

    },[roomId])
    useEffect(() => {
      setavtarv(Math.floor(Math.random()*5000))
    
      
    }, [])
    const sendMessage=(e)=>{
        e.preventDefault();

        setInput("")

    }
  return (
    <div className='chat'>
        <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${avtarv}.svg`} />
        <div className="chat_header_info">
            <h3>{roomName}</h3>
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
            <p className={`chat_message ${true && "chat_reciever"}`}>
                <span className='chat_name'>parag patil</span>
                hello
                <span className="chat_timestamp">3:52pm</span>
            </p>
        </div>
        <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
                <input type="text" placeholder='Type a message' value={input} onChange={(e)=>e.target.value}/>
                <button onClick={sendMessage}>send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
  )
}

export default Chat
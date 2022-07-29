import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./sidebarChat.css"
import { Avatar,IconButton } from '@material-ui/core'
import db from './firebaseconfig';
const SidebarChat = ({id,name,addNewChat}) => {
    const [avtarv,setavtarv]=useState("123");
    const[messages,setMessages]=useState("")
    useEffect(()=>{
      if(id){
        db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot(snapshot=>setMessages(snapshot.docs.map((e)=>e.data())))
      }
    })
    useEffect(() => {
      setavtarv(Math.floor(Math.random()*5000))
    
      
    }, [id])
    const createChat=()=>{
        const roomName= prompt("please enter name of chat")
        if(roomName){
            db.collection("rooms").add({
              name:roomName,
            })
        }

    }
    
  return !addNewChat ?
  (
    <Link to={`/rooms/${id}`}>
       <div className='sidebar_chat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${avtarv}.svg`} />
        <div className="sidebarchat_info">
            <h2>{name}</h2>
            <p>{messages[0]?.messages}</p>
        </div>
    </div>
    </Link>
   
  ):(
    <div onClick={createChat} className="sidebar_chat">
        <h2>Add new Chat</h2>

    </div>

  )
}

export default SidebarChat
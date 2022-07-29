import { Avatar,IconButton } from '@material-ui/core'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import React, { useEffect, useState } from 'react'
import "../Components/sidebar.css"
import { SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from "./firebaseconfig"
const Sidebar = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(()=>{
      const unsubscribe=  db.collection("rooms").onSnapshot(snapshot=>(
            setRooms(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })
            ))
        ))
        return ()=>{
            unsubscribe();
        }
        
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar/>
            <div className="sidebar_headerRight">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
                
                
                
               
               

            </div>

        </div>
        <div className="sidebar_search">
            <div className="sidebar_container">
            <SearchOutlined/>
            <input placeholder='search or start new chat' type="text"/>

            </div>
           

        </div>
        <div className="sidebar_chat">
            
            <SidebarChat addNewChat/>
          {rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id}
            name={room.data.name}/>
          ))}
        </div>

    </div>
  )
}

export default Sidebar